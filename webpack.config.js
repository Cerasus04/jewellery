const path = require("path");

module.exports = {
  mode: 'development',
  entry: [
    './source/js/menu.js',
    './source/js/slider.js',
    './source/js/accordion.js',
    './source/js/form.js',
    './source/js/localstorage.js',
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'build/js'),
    iife: false,
  },
  watch: true,

  devtool: 'source-map',

  module: {}
};
