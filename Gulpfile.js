const gulp = require('gulp');
const sass = require('gulp-sass')( require('sass'))
const sourcemaps = require('gulp-sourcemaps');



function compilasass(){
    return gulp.src('./src/style/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle:'compressed'}))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./build/style'));
}

exports.default = gulp.series(compilasass);
exports.sass = compilasass;
exports.watch=function(){
    gulp.watch('./src/style/*.scss',{
        ignoreInitial:false
    }, gulp.series(compilasass));
}