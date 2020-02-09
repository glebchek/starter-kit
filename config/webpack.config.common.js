//Tools
const merge = require("webpack-merge");

//Plugins
const HtmlWebpackPlugin = require("html-webpack-plugin");
const DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin");

//Local
const paths = require("./paths");

module.exports = {
  entry: paths.appIndex,
  output: {
    path: paths.appDist,
    filename: "[name].[hash:8].js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Starter Kit",
      template: paths.appTemplateHtml
    }),
    new DuplicatePackageCheckerPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        exclude: /node_modules/,
        resolve: {
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        },
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.(png|svg|jpg)$/,
        use: ["file-loader"]
      }
    ],
  }
};
