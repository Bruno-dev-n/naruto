const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const sass = require('gulp-sass')( require('sass'))
const sourcemaps = require('gulp-sourcemaps');





function compilasass(){
    return gulp.src('./src/style/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle:'compressed'}))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./build/style'));
}
function comprimirImagens() {
    return gulp.src('./src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'));
}


exports.default = gulp.series(compilasass,comprimirImagens);
exports.imagemin = comprimirImagens;
exports.sass = compilasass;
exports.watch=function(){
    gulp.watch('./src/style/*.scss',{
        ignoreInitial:false
    }, gulp.series(compilasass));
}