const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

console.log(process.env);

module.exports = {
  entry: path.resolve(__dirname, 'src/index.tsx'),
  resolve: {
    extensions: [`.tsx`, `.jsx`, `.json`, `.js`, `.ts`],
  },
  target: 'web',
  context: __dirname,
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'dist/index.html'),
      filename: 'index.html',
      title: 'Articles App',
      meta: { viewport: 'width=device-width, initial-scale=1' },
      favicon: 'dist/assets/favicon.ico',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(tsx?|jsx?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
            },
          },
        ],
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    compress: false,
    https: false,
    noInfo: false,
    overlay: true,
    historyApiFallback: true,
  },
};
