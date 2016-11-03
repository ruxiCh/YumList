path = require("path");
var webpack = require("webpack");

module.exports = {
    resolve: {
      root: path.resolve(__dirname),
      modulesDirectories: ["node_modules", "src"],
      extensions: ["", ".css", ".js", ".jsx", "sass", ".scss"]
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                query: {
                    presets: ["es2015", "react"]
                },
                include: path.join(__dirname, "src")
            }, {
                test: /\.(scss|sass)$/,
                loader: "style-loader!css-loader!postcss-loader!sass-loader",
                include: path.join(__dirname, "src/scss")
            }, {
                test: /\.(png|jpg)/,
                loader: "url-loader?limit=10000?/!image-webpack-loader",
                include: path.join(__dirname, "src/img")
            }, {
                test: /\.jsx?$/,
                loader: "react-hot",
                include: path.join(__dirname, "src")
            }
        ]
    },
    entry: ["webpack-dev-server/client?http://localhost:2300", "webpack/hot/only-dev-server","./src/index"],
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: "dist/"
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]


};