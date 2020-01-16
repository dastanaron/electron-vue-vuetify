const rules = require('./webpack.rules');
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

rules.push({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
});

rules.push({
  test: /\.vue$/,
  loader: 'vue-loader'
});

rules.push(
    {
      test: /\.s(c|a)ss$/,
      use: [
        'vue-style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            implementation: require('sass'),
            fiber: require('fibers'),
            indentedSyntax: true
          },
          options: {
            implementation: require('sass'),
            sassOptions: {
              fiber: require('fibers'),
              indentedSyntax: true
            },
          },
        },
      ],
    },
);

module.exports = {
  // Put your normal webpack config below here
  module: {
    rules,
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm.js',
      'vue$': 'vue/dist/vue.runtime.js',
    }
  },
  plugins: [
    new VueLoaderPlugin()
  ]
};
