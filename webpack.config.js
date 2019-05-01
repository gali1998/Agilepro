const path = require('path');
const TSLintPlugin = require('tslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: 'development',
    entry: path.join(__dirname, '/app/index.tsx'),
    devtool : 'source-map',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },{
                test: /.css$/,
                use: [ 
                { loader: 'style-loader' },
                // css-loader
                {
                  loader: 'css-loader',
                  options: {
                    modules: true
                  }
                },
                // sass-loader
                { loader: 'sass-loader' }
              ]
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './app/index.html'
          }),
        new TSLintPlugin({
            files: ['./src/**/*.ts']
        })
    ]
};