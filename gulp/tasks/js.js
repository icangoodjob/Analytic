import webpack from "webpack-stream";
import babel from "gulp-babel";
import uglify from "gulp-uglify";
import jsRename from "gulp-rename";
import fileinclude from "gulp-file-include";

export const js = () => {
	return app.gulp.src(app.path.src.js, { sourcemaps: app.isDev })
	.pipe(app.plugins.plumber(
		app.plugins.notify.onError({
			title: "JS",
			message: "Error: <%= error.message %>"
		}))
	)
	.pipe(fileinclude())
	// Раскомментировать если нужна поддержка старых браузеров
	// .pipe(babel())
	.pipe(app.gulp.dest(app.path.build.js))
	.pipe(uglify())
	.pipe(
		jsRename({
			extname: ".min.js"
		})
		)
	// .pipe(webpack({
	// 	mode: app.isBuild ? 'production' : 'development',
	// 	output: {
	// 		filename: 'app.min.js',
	// 	}
	// }))
	.pipe(app.gulp.dest(app.path.build.js))
	.pipe(app.plugins.browsersync.stream());
}