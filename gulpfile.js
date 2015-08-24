var gulp = require('gulp')
var concatCss = require('gulp-concat-css')

gulp.task('default', function(){
	
})

gulp.task('css', function(){
	return gulp.src([
				'node_modules/purecss/build/pure.css',
				'public/stylesheets/*.css'
			],{ base: '' })
		.pipe(concatCss('styles/bundle.css'))
		.pipe(gulp.dest('public/build/'))
})

gulp.task('watch', function(){
	gulp.watch('public/stylesheets/*.css', ['css'])
})