require('dotenv').config();
const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const serverHost = process.env.SERVER_HOST || 'localhost';
const serverPort = process.env.SERVER_PORT || 1592;

const config = env => ({
  entry: {
    app: [
      'react-hot-loader/patch',
      // support async & await
      'babel-polyfill',
      resolve('src'),
    ],
    commons: [
      'react',
      'redux',
      'react-dom',
    ],
  },
  output: {
    filename: '[name].js',
    // the output bundle

    path: resolve(__dirname, './build'),

    publicPath: `http://${serverHost}:${serverPort}/`,
    // necessary for HMR to know where to load the hot update chunks
    sourceMapFilename: '[name].js.map',
  },

  // context: resolve('sources'),

  // devtool: 'eval-source-map',
  devtool: 'inline-source-map',

  devServer: {
    hot: true,
    // enable HMR on the server

    // contentBase: resolve('public/build'),
    // match the output path
    historyApiFallback: true,

    publicPath: `http://${serverHost}:${serverPort}/`,
    // match the output `publicPath`
    headers: {
      'Access-Control-Allow-Origin': '*',
    },

    port: serverPort,
  },

  resolve: {
    alias: {
      constants: resolve(__dirname, '../../src/constants'),
      components: resolve(__dirname, '../../src/components'),
      containers: resolve(__dirname, '../../src/containers'),
      actions: resolve(__dirname, '../../src/actions'),
      helpers: resolve(__dirname, '../../src/helpers'),
    },
  },

  module: {
    rules: [{
      test: /\.pug/,
      use: [{
        loader: 'pug-loader',
      }],
    }, {
      test: /\.js$/,
      use: [{
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
        },
      }],
      exclude: /node_modules/,
    }, {
      test: /\.css$/,
      use: [{
        loader: 'style-loader',
        options: {
          useable: true,
        },
      }, {
        loader: 'css-loader',
        options: {
          sourceMap: true,
          minimize: true,
          modules: true,
          importLoaders: 1,
          localIdentName: '[name]__[local]___[hash:base64:5]',
        },
      }, {
        loader: 'postcss-loader',
      }],
    }, {
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 10000,
          minetype: 'application/font-woff',
        },
      },
    }, {
      test: /\.jpe?g$|\.gif$|\.png$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 10000,
        },
      },
    }, {
      test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      use: {
        loader: 'file-loader',
      },
    }],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally

    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates

    new webpack.optimize.CommonsChunkPlugin({
      names: ['commons', 'manifest'],
      minChunks(module) {
      // this assumes your vendor imports exist in the node_modules directory
        return module.context && module.context.indexOf('node_modules') !== -1;
      },
    }),
    new webpack.DefinePlugin({
      'process.env.APP_ENV': JSON.stringify(env),
      'process.env.NODE_ENV': JSON.stringify(env),
      'process.env.API_HOST': JSON.stringify(process.env.API_HOST),
    }),
    new HtmlWebpackPlugin({ // Also generate a test.html
      template: './src/index.pug',
      filename: 'index.html',
    }),
  ],
});

module.exports = config;