var combineLoaders = require('webpack-combine-loaders');

var config = {
   entry: './src/index.js',
	
   output: {
      path:'./',
      filename: 'build.js',
   },
	
devServer: {
    historyApiFallback: true,
    contentBase: './',
    hot: true
  },
	
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: "babel-loader",
				
            query: {
               presets: ['es2015', 'react']
            }
         },
         {
           test: /\.css$/,
           loader: combineLoaders([
             {
               loader: 'style-loader'
             }, {
               loader: 'css-loader',
               query: {
                 modules: true,
                 localIdentName: '[name]__[local]___[hash:base64:5]'
               }
             }
           ])
         }]
      
   }
}

module.exports = config;
