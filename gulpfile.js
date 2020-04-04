//   ___    __________   |  Vasanth Developer (Vasanth Srivatsa)
//   __ |  / /___  __ \  |  ------------------------------------------------
//   __ | / / __  / / /  |  https://github.com/vasanthdeveloper/samskara.git
//   __ |/ /  _  /_/ /   |
//   _____/   /_____/    |  Gulp instruction set for build samskara Ghost theme
//                       |

const del = require('del');
const gulp = require('gulp');
const sass = require('gulp-sass');
const postCSS = require('gulp-postcss');
const livereload = require('gulp-livereload');

sass.compiler = require('node-sass');
const postCSSOptions = require('./postcss.config');

// globs will store either direct paths or globs to the file we
// process through Gulp.js
const globs = {
    styles: ['./src/styles/*.sass', './src/styles/**/*.sass'],
    markup: ['./**/*.hbs']
};

// the function that deletes the generated assets
function clean() {
    return del([
        './assets',
        './dist',
        './public',
    ]);
}

// the function that watches for file changes and re-builds the changed sources
function watch(callback) {
    // start the livereload server
    // note: Install the extension below to get live reload working
    // https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei
    livereload.listen();

    // watch for file changes
    gulp.watch(globs.styles[1], styles);
    // gulp.watch(globs.script, script);
    gulp.watch(globs.markup).on('change', livereload.changed);
    gulp.watch('./assets/**/*').on('change', livereload.reload);

    // tell gulp to continue with this function
    callback();
}

// compile the stylesheet
function styles() {
    return gulp.src(globs.styles[0])
        .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
        .pipe(postCSS(postCSSOptions))
        .pipe(gulp.dest('./assets/css'));
}

// the build task first cleans, and then builds all the assets
// and terminates
gulp.task('build', gulp.series(clean, gulp.parallel(styles)));

// the Gulp task that does a fresh build and keeps watching for any changes
// while reloading the browser every time a file is changed.
gulp.task('default', gulp.series('build', watch));

exports.clean = clean;