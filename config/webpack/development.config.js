require('dotenv').config();
const { resolve } = require('path');
const webpack = require('webpack');
const ManifestPlugin = require('webpack-manifest-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const serverHost = process.env.SERVER_HOST || 'localhost';
const serverPort = process.env.SERVER_PORT || 1592;

const config = env => ({
  mode: 'development',

  entry: {
    app: [
      'react-hot-loader/patch',
      'babel-polyfill',
      resolve('src'),
    ],
    commons: [
      'react',
      'redux',
      'react-redux',
      'react-dom',
      'react-router',
      'react-router-dom',
      'react-helmet',
      'loadable-components',
    ],
  },
  output: {
    filename: '[name].bundle.js',
    // the output bundle
    chunkFilename: '[name].chunk.js',

    path: resolve(__dirname, '../../build'),

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

    host: serverHost,
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
      }],
      exclude: /node_modules/,
    }, {
      test: /node_modules.*\.css$/,
      use: [{
        loader: 'style-loader',
      }, {
        loader: 'css-loader',
        options: {
          // sourceMap: true,
          minimize: false,
          modules: false,
          importLoaders: 1,
          localIdentName: '[local]',
        },
      }],
    }, {
      test: /\.css$/,
      exclude: /node_modules/,
      use: [{
        loader: 'style-loader',
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
        options: {
          config: {
            path: resolve(__dirname, '../postcss.config.js'),
          },
        },
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

  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'initial',
          minChunks: 2,
        },
      },
    },
  },

  plugins: [
    new ManifestPlugin(),
    new WriteFilePlugin({
      // Write only files that have ".json" extension.
      test: /\.json/,
      useHashIndex: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally

    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(env),
        APP_ENV: JSON.stringify(env),
      },
    }),
    new HtmlWebpackPlugin({ // Also generate a test.html
      template: './src/index.pug',
      filename: 'index.html',
    }),
  ],
});

module.exports = config;
