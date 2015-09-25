var gulp = require('gulp')
var concat = require('gulp-concat')
var concatCss = require('gulp-concat-css')
var autoprefixer = require('gulp-autoprefixer')
var cssnext = require("gulp-cssnext")
var uglify = require('gulp-uglify')

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
		.pipe(gulp.dest('public/build/'))
})

gulp.task('watch', function(){
	gulp.watch('public/stylesheets/*.css', ['css'])
	gulp.watch('public/javascripts/*.js', ['js'])
})

gulp.task('default', ['js', 'css', 'fonts'])

gulp.task('compress-js', ['js'], function(){
	return gulp.src('public/build/js/bundle.js')
			.pipe(uglify())
			.pipe(gulp.dest('public/dist/js/'))
})

gulp.task('compress-css', ['css'], function(){
	return gulp.src('public/build/styles/bundle.css')
			.pipe(autoprefixer({
				browsers: ['last 2 versions']
			}))
			.pipe(cssnext({ compress: true }))
			.pipe(gulp.dest('public/dist/styles/'))
})

gulp.task('dist-fonts', ['fonts'], function(){
	return gulp.src('public/build/fonts/*')
			.pipe(gulp.dest('public/dist/fonts/'))
})

gulp.task('dist-images', function(){
	return gulp.src('public/images/*')
			.pipe(gulp.dest('public/dist/images/'))
})

gulp.task('release', ['compress-js', 'compress-css', 'dist-fonts', 'dist-images'], function(){
	console.log('SUCCESSFUL RELEASE.')
})