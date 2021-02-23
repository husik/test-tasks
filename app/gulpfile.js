"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass");
sass.compiler = require("node-sass");

gulp.task("sass", () => {
    return gulp.src("./public/**/*.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest("public"));
});

gulp.task("sass:watch", () => {
    gulp.watch("./public/**/*.scss", gulp.series("sass"));
});
