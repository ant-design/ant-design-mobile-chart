const path = require('path');

module.exports = {
  entry: './demo/index.js',
  devServer: {
    contentBase: './demo',
    stats: 'minimal',
    port: 9001,
    disableHostCheck: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              // [
              //   "import",
              //   {
              //     "libraryName": "ant-design-mobile-chart",
              //     "libraryDirectory": "src"
              //   }
              // ]
            ]
          }
        }
      },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
    ]
  },
  plugins: [],
  externals: {
    // react: 'React',
    // 'react-dom': 'ReactDOM',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      'ant-design-mobile-chart': path.join(__dirname, '..'),
    },
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'development',
};
