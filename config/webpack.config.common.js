//Tools
const merge = require("webpack-merge");

//Plugins
const HtmlWebpackPlugin = require("html-webpack-plugin");

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
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: ['.js', '.jsx', '.json'],
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
