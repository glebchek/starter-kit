//Tools
const merge = require("webpack-merge");

//Local
const paths = require("./paths.js")
const common = require("./webpack.config.common.js");

module.exports = merge(common, {
  mode: "development",
  devServer: {
    contentBase: paths.appDist,
    compress: true,
    port: 9000,
    historyApiFallback: true
  }
});
