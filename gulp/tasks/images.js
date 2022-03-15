import webp from "gulp-webp";
import imagemin from "gulp-imagemin";
// import tiny from "gulp-tinypng-compress";

export const images = () => {
	return app.gulp.src(app.path.src.images)
	.pipe(app.plugins.plumber(
		app.plugins.notify.onError({
			title: "IMAGES",
			message: "Error: <%= error.message %>"
		}))
	)
	.pipe(app.plugins.newer(app.path.build.images))
	.pipe(
		app.gulp.dest(app.path.build.images)
		)
	.pipe(
		app.gulp.src(app.path.src.images)
		)
	.pipe(
		app.plugins.newer(app.path.build.images)
		)
	.pipe(
		imagemin({
			progressive: true,
			quality: 70,
			svgoPlugins: [{ removeViewBox: false }],
			interlaced: true,
				optimizationLevel: 3 // 0 to 7
			})
		)
	.pipe(app.gulp.dest(app.path.build.images))
	.pipe(app.gulp.src(app.path.src.svg))
	.pipe(app.gulp.dest(app.path.build.images))
	.pipe(app.plugins.browsersync.stream());
}