const merge=require("webpack-merge");
const common=require("../../webpack.common")
const path=require("path")

module.exports=merge(common,{
    entry:'./es/index.js',
    output:{
        filename:'cdHooks.js',
        library:'cdHooks',
        path:path.resolve(__dirname,'./dist'),
    }
})