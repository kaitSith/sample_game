var fs = require('fs'),
    gulp = require('gulp'),
    ejs = require('gulp-ejs'),
    browserify = require('browserify'),
    babelify = require('babelify'),
    source = require('vinyl-source-stream'),
    browsersync = require('browser-sync').create();

var DEV_BASE = './htdocs_dev/',
    PUB_BASE = './htdocs/',
    SUB_DIR = 'sp/';


gulp.task('copy', function(){
  gulp.src([DEV_BASE + SUB_DIR + 'assets/shared/**/**'])
    .pipe(gulp.dest(PUB_BASE + SUB_DIR + 'assets/shared/'));
});

gulp.task('browserify', function(){
  var sources = ['assets/js/balance/'];
  var fn = 'app.js';
  
  sources.forEach(function(val, index, array){
    browserify(DEV_BASE + SUB_DIR + val + fn,{debug: true})
      .transform(babelify, {presets: ['es2015']})
      .bundle()
      .on('error', function(err){console.log('Error:' + err.message);})
      .pipe(source(fn))
      .pipe(gulp.dest(PUB_BASE + SUB_DIR + val));
  })  
});

gulp.task('ejs', function(){
  var json = JSON.parse(fs.readFileSync(DEV_BASE + SUB_DIR + 'var.json'));
  gulp.src([DEV_BASE + SUB_DIR + '**/*.html'])
    .pipe(ejs(json))
    .pipe(gulp.dest(PUB_BASE + SUB_DIR));
});

gulp.task('browsersync', function(){
  browsersync.init({
    server: {
      baseDir: PUB_BASE
    }
  });
});

gulp.task('browserload', function(){
  browsersync.reload;
});

gulp.task('watch', function(){
  gulp.watch(DEV_BASE + SUB_DIR + '**/*.html', ['ejs', 'browserload']);
  gulp.watch(DEV_BASE + SUB_DIR + 'assets/**/*.js', ['browserify', 'browserload']);
});

gulp.task('default',['ejs', 'browserify', 'copy', 'browsersync', 'watch']);