import path from 'path';
import { Configuration } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import EslintPlugin from 'eslint-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import FaviconsWebpackPlugin from 'favicons-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import 'webpack-dev-server';

const config: Configuration = {
  mode: (process.env.NODE_ENV as 'production' | 'development') ?? 'development',
  entry: { app: './src/index.tsx' },

  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.module\.(sc|sa|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]___[hash:base64:5]'
              },
              importLoaders: 1
            }
          }
        ]
      },
      {
        test: /\.(sc|sa|c)ss$/i,
        exclude: /\.module\.(sc|sa|c)ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    compareBeforeEmit: true
  },
  devServer: {
    open: true,
    hot: true,
    port: 8080,
    static: path.join(__dirname, 'public'),
    historyApiFallback: {
      disableDotRule: true,
      rewrites: [
        { from: /^\/$/, to: '/index.html' },
        { from: /./, to: '/index.html' }
      ]
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
    new EslintPlugin({ extensions: ['ts', '.tsx'] }),
    new FaviconsWebpackPlugin('./src/assets/icon/favicon.png'),
    new CopyWebpackPlugin({
      patterns: [{ from: './src/assets/', to: './assets/' }, { from: './public/', to: './' },]
    }),
  ]
};

export default config;
