const HtmlWebpackPlugin = require("html-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /.js$/,
        use: ["babel-loader"],
      },
      // {
      //   test: /.s?css$/,
      //   use: [
      //     isProduction ? MiniCssExtractPlugin.loader : "style-loader",
      //     "css-loader",
      //     "sass-loader",
      //   ],
      // }
    ],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
