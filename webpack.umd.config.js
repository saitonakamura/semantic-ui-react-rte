/*eslint-env node */
var path = require('path');
var webpackconfig = require('./webpack.config.js');

module.exports = Object.assign({}, webpackconfig, {
  entry: {
    'semantic-ui-react-rte': './src/index.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    library: '[name]',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  externals: [
    {
      'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom',
      },
    },
    {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react',
      },
    },
    {
      'semantic-ui-react/dist/commonjs/elements/Input/Input': {
        root: 'Input',
        commonjs2: 'semantic-ui-react/dist/commonjs/elements/Input/Input',
        commonjs: 'semantic-ui-react/dist/commonjs/elements/Input/Input',
        amd: 'semantic-ui-react/dist/commonjs/elements/Input/Input',
      },
    },
    {
      'semantic-ui-react/dist/commonjs/elements/Button/Button': {
        root: 'Button',
        commonjs2: 'semantic-ui-react/dist/commonjs/elements/Button/Button',
        commonjs: 'semantic-ui-react/dist/commonjs/elements/Button/Button',
        amd: 'semantic-ui-react/dist/commonjs/elements/Button/Button',
      },
    },
    {
      'semantic-ui-react/dist/commonjs/modules/Dropdown/Dropdown': {
        root: 'Dropdown',
        commonjs2: 'semantic-ui-react/dist/commonjs/modules/Dropdown/Dropdown',
        commonjs: 'semantic-ui-react/dist/commonjs/modules/Dropdown/Dropdown',
        amd: 'semantic-ui-react/dist/commonjs/modules/Dropdown/Dropdown',
      },
    },
    {
      'semantic-ui-react/dist/commonjs/modules/Popup/Popup': {
        root: 'Popup',
        commonjs2: 'semantic-ui-react/dist/commonjs/modules/Popup/Popup',
        commonjs: 'semantic-ui-react/dist/commonjs/modules/Popup/Popup',
        amd: 'semantic-ui-react/dist/commonjs/modules/Popup/Popup',
      },
    },
  ],
});
