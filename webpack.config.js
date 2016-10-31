path = require("path");
var webpack = require("webpack");

module.exports = {
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                query: {
                    presets: ["es2015", "react"]
                },
                include: path.join(__dirname, "src")
            },
        ]
    },
    entry: ["./src/index"],
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: "/static/"
    }
};