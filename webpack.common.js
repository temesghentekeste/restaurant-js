const path = require('path');

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
    vendor: path.resolve(__dirname, './src/vendor.js'),
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.(svg|png|jpg|jpeg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'imgs',
            publicPath: 'imgs',
          },
        },
      },
    ],
  },
  watch: true,
};
