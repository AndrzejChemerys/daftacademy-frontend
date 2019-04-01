const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const distDir = path.resolve(__dirname, 'dist');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const isProduction = process.env.NODE_ENV === 'production';

const autoprefixer = require('autoprefixer');

const CopyWebpackPlugin = require('copy-webpack-plugin');

// const ExtractTextPlugin = require('extract-text-webpack-plugin');

// const extractPlugin = new ExtractTextPlugin({
//   filename: "main.scss"
// });

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: distDir,
    publicPath: '/dist'
  },
  mode: 'development',
  devtool: 'eval',
  devServer: {
    contentBase: distDir
  },
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },

      // {
      //   test: /\.scss$/,
      //   use: [extractPlugin.extract({
      //       use: [
      //         "style-loader", // creates style nodes from JS strings
      //         "css-loader", // translates CSS into CommonJS
      //         "sass-loader" // compiles Sass to CSS, using Node Sass by default
      //       ]
      //     })

      //   ]
      // },

      {
        test: /\.s(a|c)ss$/,
        use: [
          isProduction ?
          MiniCssExtractPlugin.loader : {
            loader: 'style-loader',
            options: {
              sourceMap: true,

            }
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: isProduction
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: isProduction
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isProduction
            }
          }
        ]
      },

      //autoprefixer postcss

      { 
        test: /\.css$/, 
        use: ['style-loader', 'css-loader', 'postcss-loader'] 
      },

    ]
  },
  plugins: [new HtmlWebpackPlugin({
      template: './src/index.html'
    }),

    // extractPlugin

    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output; optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),

    new CopyWebpackPlugin([
      {
          from: './src/assets',
          to: 'assets'
      } 
  ]),

  ]
};