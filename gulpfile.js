var gulp = require('gulp')
var concatCss = require('gulp-concat-css');

gulp.task('default', function(){
	
})

gulp.task('css', function(){
	return gulp.src([
				'public/stylesheets/*.css', 
				'node_modules/purecss/build/pure.css'
			],{ base: '' })
		.pipe(concatCss('styles/bundle.css'))
		.pipe(gulp.dest('public/build/'))
})