'use strict';

// dependencies
var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var changed = require('gulp-changed');

//////// - SCSS/CSS ////////

const SCSS_SRC = './src/assets/scss/**/*.scss';
const SCSS_DEST = './src/assets/css';

// Compile SCSS
gulp.task('compile_scss', function() {
  gulp.src(SCSS_SRC)
  .pipe(sass().on('error', sass.logError)) //pipe ist eine Methode von gulp und ermöglicht es Aufgaben (tasks) zu verketten
  .pipe(minifyCSS({compatibility: 'ie8'}))
  .pipe(rename({ suffix: '.min'}))
  .pipe(changed(SCSS_DEST))
  .pipe(gulp.dest(SCSS_DEST, {overwrite: true}));
});

// detect changes in SCSS
gulp.task('watch_scss', function() {
  gulp.watch(SCSS_SRC, ['compile_scss']); // watch beobachtet den Ordner, in dem die Scss Dateien liegen und führt dann den compiler aus, wenn es eine Änderung gibt
});

// Run tasks
gulp.task('default', ['watch_scss', 'compile_scss']);
