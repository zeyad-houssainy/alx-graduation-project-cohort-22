const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
  devServer: {
    hot: true,
    port: 9000,
    compress: true,
    static: {
      directory: path.join(__dirname, './dist'),
    },
    historyApiFallback: true,
  },
module: {
    rules: [
      {
        test: /\.jsx?$/, // Matches both .js and .jsx files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
          },
        },
      },
      {
        test: /\.txt$/, // Add rule to handle .txt files
        use: 'raw-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },  resolve: {
  extensions: ['.js', '.jsx'], // Resolve .jsx extension
},
  plugins: [
    new HtmlWebpackPlugin({
      template: './dist/index.html',
	  inject: false,
    }),
  ],
};