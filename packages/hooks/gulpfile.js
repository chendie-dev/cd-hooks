const gulp = require("gulp");
const fg = require("fast-glob");
const fs = require("fs-extra")
const gm=require("gray-matter")
const commonConfig = require("../../gulpfile");

function generateDesc(mdPath){
    if(!fs.existsSync(mdPath))return null;
    const mdFile=fs.readFileSync(mdPath,'utf8');
    const {content}=gm(mdFile)//获取内容
    let desc=(content.replace(/\r\n/g, '\n').match(/# \w+[\s\n]+(.+?)(?:, |\. |\n|\.\n)/m) || [])[1] || '';
    desc=desc.trim();
    return desc
}

async function generateDoc() {
  const metaData = {
    functions: []
  }
  const hooks = fg
    .sync('src/use*', {
      onlyDirectories: true
    })
    .map(hooks => hooks.replace('src/', ''))
    .sort();
  await Promise.allSettled(
    hooks.map(async (hook) => {
      const desc = await generateDesc(`src/${hook}/index.md`)
      return {
        name: hook,
        desc
      }
    })
  ).then((res) => {
    metaData.functions = res.map(res => {
      if (res.status === 'fulfilled') return res.value;
      return null
    })
  })
  return metaData;
}
gulp.task('metaData', async () => {
    const metaData = await generateDoc();
    await fs.writeJSON('meta.json',metaData,{
        spaces:2
    })    
})
exports.default = gulp.series(commonConfig.default, 'metaData');
