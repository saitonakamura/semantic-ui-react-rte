/*eslint-env node */
var path = require('path');

var loaders = [
  {
    test: /\.js$/,
    loader: 'babel',
    exclude: /node_modules/,
  },
  {
    test: /\.css$/,
    exclude: /\.global\.css$|semantic-ui-css.*\.css/,
    loaders: [
      'style?sourceMap',
      'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
    ],
  },
  {test: /\.global\.css$|semantic-ui-css.*\.css/, loader: 'style!css'},
  {test: /\.(png|jpg)$/, loader: 'file?name=images/[name].[hash].[ext]'},
  {
    test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'file?name=fonts/[name].[hash].[ext]&mimetype=application/font-woff',
  },
  {
    test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'file?name=fonts/[name].[hash].[ext]&mimetype=application/font-woff',
  },
  {
    test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'file?name=fonts/[name].[hash].[ext]&mimetype=application/octet-stream',
  },
  {
    test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'file?name=fonts/[name].[hash].[ext]',
  },
  {
    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'file?name=images/[name].[hash].[ext]&mimetype=image/svg+xml',
  },
];

module.exports = {
  entry: {
    demo: './src/demo.js',
  },
  output: {
    path: path.join(__dirname, 'assets/dist'),
    publicPath: '/',
    filename: '[name].js',
  },
  module: {loaders: loaders},
};
