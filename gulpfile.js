var gulp = require('gulp')
var concatCss = require('gulp-concat-css')
var cssnext = require("gulp-cssnext")

gulp.task('default', function(){

})

gulp.task('css', function(){
	return gulp.src([
				'node_modules/purecss/build/pure.css',
				'node_modules/purecss/build/grids-responsive.css',
				'public/stylesheets/*.css'
			],{ base: '' })
		.pipe(concatCss('styles/bundle.css'))
		.pipe(cssnext({ compress: false }))
		.pipe(gulp.dest('public/build/'))
})

gulp.task('watch', function(){
	gulp.watch('public/stylesheets/*.css', ['css'])
})
