var Webpack = require('webpack');
var Path = require('path');
var LiveReloadPlugin = require('webpack-livereload-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

let pathsToClean = [
    '_bundles/*'
];

let cleanOptions = {
    watch: false
}

module.exports = {

    watch: true,

    mode: 'development',
    entry: {
        "oneapp": "./app/application.module.js"
    },

    devtool: 'source-map',

    output: {
        path: Path.join(__dirname, "_bundles"),
        publicPath: '_bundles/',
        filename: "[name].js"
    },

    resolve: {
        extensions: ['.js', '.css']
    },

    optimization: {
        minimize: false,
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
      new Webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery',
          'window.jQuery': 'jquery',
          d3: 'd3'
      }),
     new LiveReloadPlugin(),
     new CleanWebpackPlugin(pathsToClean, cleanOptions)]
};