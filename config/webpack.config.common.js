// Plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AutoPrefixer = require('autoprefixer');
const ESLintPlugin = require('eslint-webpack-plugin');

// Local
const paths = require('./paths');

module.exports = {
  entry: paths.appIndex,
  output: {
    path: paths.appDist,
    filename: '[name].[contenthash:8].js',
    publicPath: '/',
  },
  target: 'web',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Starter Kit',
      template: paths.appTemplateHtml,
    }),
    new ESLintPlugin({
      context: paths.appSrc,
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        exclude: /node_modules/,
        resolve: {
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        },
        use: ['babel-loader', 'astroturf/loader'],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [AutoPrefixer],
              },
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name][ext]',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]',
        },
      },
    ],
  },
};
