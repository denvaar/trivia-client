const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HTMLPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
});
