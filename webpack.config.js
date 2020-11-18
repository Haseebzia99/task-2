const path = require('path');

module.exports = env => {
  console.log('NODE_ENV: ', env.NODE_ENV);
  console.log('Production: ', env.production);

  return {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },

    module: {
      rules: [
        { test: /\.txt$/, use: 'raw-loader' },
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
      ]
    }
  };

};