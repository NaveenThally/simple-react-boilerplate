var webpack = require('webpack');
var path = require('path');


var BUILD_DIR =   path.resolve(__dirname,'src/client/public');
var APP_DIR = path.resolve(__dirname,'src/client/app');
var HTML_DIR = path.resolve(__dirname,'src/client');

var config = {
  entry:{
    path: APP_DIR + '/index.js',
  },
  output: {
    path:BUILD_DIR,
    filename:'bundle.js'
  },

  devServer: {
    inline:true,
    port:8989
  },
  //Loader Configuration which converts Jsx/JS to js
  module: {
    loaders:[
      {
         test: /\.(js|jsx|es6)$/,
         exclude: /node_modules/,
         loader: 'react-hot!babel?presets[]=react,presets[]=es2015',
         include:APP_DIR, //directory to look for the file extension
      },
      {
         test: /\.html$/,
         loader: 'file?name=[name].[ext]'
      }
    ]
  },
  resolve : {
    extensions: ['', '.js', '.jsx', '.es6']
  }
};

module.exports = config;
