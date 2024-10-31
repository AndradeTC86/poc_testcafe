module.exports = {
    src: "./tests/*.js",
    browsers: ["chrome"],
    reporter: "spec",
    screenshots: {
        path: "reports/screenshots",
        takeonFails: true
    },
    concurrency: 1,
    pageLoadTimeout: 30000
}