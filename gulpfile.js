var gulp = require('gulp')
var concat = require('gulp-concat')
var concatCss = require('gulp-concat-css')
var autoprefixer = require('gulp-autoprefixer')
var cssnext = require("gulp-cssnext")
var runSequence = require('run-sequence')

gulp.task('release', function(callback){
	runSequence('js', 'css', 'fonts', function(error){
		if (error)
		{
			console.log(error)	
		}
		else
		{
			console.log('SUCCESSFUL RELEASE')
		}
		callback(error)
	})
})

gulp.task('js', function(){
	return gulp.src([
			'public/javascripts/*.js'
		], { base: ''})
		.pipe(concat('js/bundle.js'))
		.pipe(gulp.dest('public/build/'))
})

gulp.task('fonts', function(){
	return gulp.src([
			'node_modules/font-awesome/fonts/*'
		], { base: '' })
		.pipe(gulp.dest('public/build/fonts/'))
})

gulp.task('css', function(){
	return gulp.src([
				'node_modules/purecss/build/pure.css',
				'node_modules/purecss/build/grids-responsive.css',
				'node_modules/font-awesome/css/font-awesome.css',
				'public/stylesheets/*.css'
			],{ base: '' })
		.pipe(concatCss('styles/bundle.css', { rebaseUrls: false }))
		.pipe(cssnext({ compress: false }))
		.pipe(autoprefixer({
			browsers: ['last 6 versions']
		}))
		.pipe(gulp.dest('public/build/'))
})

gulp.task('watch', function(){
	gulp.watch('public/stylesheets/*.css', ['css'])
	gulp.watch('public/javascripts/*.js', ['js'])
})
