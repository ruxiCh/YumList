var path = require("path");
var webpack = require("webpack");

module.exports = {
    resolve: {
      modules: ["node_modules", path.resolve(__dirname, "src")],
      extensions: [".css", ".js", ".jsx", ".less"]
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                loader: "react-hot-loader/webpack",
                include: path.join(__dirname, "src")
            },
            {
                test: /\.jsx?/,
                loader: "babel-loader",
                query: {
                    presets: ["@babel/preset-env", "@babel/preset-react"]
                },
                include: path.join(__dirname, "src")
            }, {
                test: /\.less?$/,
                loader: "style-loader!css-loader!less-loader",
                include: path.join(__dirname, "src/less")
            }, {
                test: /\.(png|jpg)/,
                loader: "url-loader?limit=10000?/!image-webpack-loader",
                include: path.join(__dirname, "src/img")
            }
        ]
    },
    entry: ["webpack-dev-server/client?http://localhost:8080", "webpack/hot/only-dev-server","./src/index"],
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: "dist/"
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]


};