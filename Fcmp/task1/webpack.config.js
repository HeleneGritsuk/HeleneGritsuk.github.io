const webpack = require('webpack');

module.exports = {
  entry: {
    main: ['webpack-dev-server/client?http://localhost:8080', 'webpack/hot/dev-server', './index.js'],
  },
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/dist`,
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loader: 'style!css',
    }],
  },
  watch: true,
  watchOptions: {
    aggregateTimeout: 100,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
};
