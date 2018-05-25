var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('copyhtml', function(){
	return gulp.src('app/**/*.+(htm|html)')
		.pipe(gulp.dest('dist/'))
});

gulp.task('copymedia', function(){
	return gulp.src('app/**/*.+(png|jpeg)')
		.pipe(gulp.dest('dist/'))
});

gulp.task('sass', function(){
	return gulp.src('app/style/**/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('dist/css/'))
});