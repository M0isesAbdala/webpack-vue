const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
    entry: './src/main.js',
    output:{
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.styl(us)?$/,
                use: [
                  'vue-style-loader',
                  'css-loader',
                ]
            }
        ]
    },
    mode: 'development',
    plugins:[
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({}),
        new HtmlWebPackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        }),
    ],
    resolve: {
        alias: {
            'vue': '@vue/runtime-dom',
            'vuex': 'vuex/dist/vuex.esm-bundler',
            '@': path.join(__dirname, 'src')
        }
    },
    devServer: {
        historyApiFallback: true
    }
}