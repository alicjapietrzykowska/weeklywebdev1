var gulp = require('gulp');

var browserSync = require('browser-sync').create();

gulp.task('serve', function (){
	browserSync.init({
		server: {
			baseDir: './'
		}
	})
});

gulp.watch('./**/*.html').on('change', browserSync.reload);
gulp.watch('./**/*.css').on('change', browserSync.reload);
gulp.watch('./**/*.js').on('change', browserSync.reload);


gulp.task('default', ['serve']);