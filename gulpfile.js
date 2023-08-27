const gulp=require("gulp");
const babel=require("gulp-babel");
const ts=require("gulp-typescript");
const del=require("del");
//如果上次有对应产物，此时就要进行
gulp.task('clean',async function(){
    await del('cjs/**');
    await del('lib/**');
    await del('es/**');
    await del('declaration/**');
})

//针对不同的产物进行构建
//commonjs
gulp.task('cjs',function(){
    return gulp.src(['./es/**/*.js']).pipe(
        babel({
            configFile:'../../.babelrc',
        })
    ).pipe(gulp.dest('lib/'))
})
//es module 的产物
gulp.task('es',function(){
    const tsProject=ts.createProject('tsconfig.pro.json',{
        module:'ESNext'
    })
    return tsProject.src().pipe(tsProject()).pipe(babel()).pipe(gulp.dest('es/'));
})

gulp.task('declaration',function(){
    const tsProject=ts.createProject('tsconfig.pro.json',{
        declaration:true,
        emitDeclarationOnly:true
    })
    return tsProject.src().pipe(tsProject()).pipe(gulp.dest('es/')).pipe(gulp.dest('lib/'))
})

gulp.task("copyReadme",async function(){
    await gulp.src("../../README.md").pipe(gulp.dest("../../packages/hooks"))
})

exports.default=gulp.series('clean','es','cjs','declaration','copyReadme');