const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    aula270: './src/secao19/aula270/index.ts',
    aula271: './src/secao19/aula271/index.ts',
    aula272: './src/secao19/aula272/index.ts',
    aula273: './src/secao19/aula273/index.ts',
    aula274: './src/secao19/aula274/index.ts',
    aula275: './src/secao19/aula275/index.ts',
    aula276: './src/secao19/aula276/index.ts',
    aula277: './src/secao19/aula277/index.ts',
    aula278: './src/secao19/aula278/index.ts',
    aula279: './src/secao19/aula279/index.ts',
    aula280: './src/secao19/aula280/index.ts',
    aula281: './src/secao19/aula281/index.ts',
    aula282: './src/secao19/aula282/index.ts',
    aula286: './src/secao19/aula286/index.ts',
    aula287: './src/secao19/aula287/index.ts',
    aula290: './src/secao19/aula290/index.ts',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  devtool: 'inline-source-map',
};