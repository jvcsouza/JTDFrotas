var webpack = require('webpack');
var path = require('path');
var LiveReloadPlugin = require('webpack-livereload-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

let pathsToClean = [
    '_bundles/*'
];

let cleanOptions = {
    watch: false
}

module.exports = {

    watch: false,

    mode: 'production',
    entry: {
        "oneapp": "./app/application.module.js"
    },

   output: {
        path: path.join(__dirname, "_bundles"),
        publicPath: '_bundles/',
        filename: "[name].[hash].js"
    },

    resolve: {
        extensions: ['.js', '.css']
    },

    optimization: {
        minimizer: [new TerserPlugin({
            terserOptions: {
                output: {
                    comments: false
                }
            },
            parallel: 4
        })],
        minimize: true,
        splitChunks: { chunks: 'all' }
    },

    module: {
        rules: [
          {
              test: /\.html$/,
              use: {
                  loader: 'html-loader'
              }
          },
          {
              test: /\.(s*)css$/,
              use: ['style-loader', 'css-loader', 'sass-loader']
          },
          {
              test: /\.(woff|woff2|eot|ttf|otf|png|jpg|gif|svg)$/,
              use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]',
                        outputPath: ''
                    }
                }
              ]
          }
        ]
    },
    plugins: [
      new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery',
          'window.jQuery': 'jquery',
          d3: 'd3'
      }),
     new LiveReloadPlugin(),
     new CleanWebpackPlugin(pathsToClean, cleanOptions)]
};