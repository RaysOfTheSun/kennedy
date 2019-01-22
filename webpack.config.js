const path = require('path');
const SRC_DIR = path.join(__dirname, './src');
const DIST_DIR = path.join(__dirname, './dist');

module.exports = {
    mode: 'production',
    entry: {
        main: ['./src/components/Navbar/Navbar.jsx', './src/main.js'],
        index: ['./src/components/CardGrid/CardGrid.jsx', './src/components/DiscoverGrid/DiscoverGrid.jsx'],
        mens: ['./src/mens.js', './src/components/MensDiscoverGrid/MensDiscoverGrid.jsx']
    },
    output: {
        path: path.join(DIST_DIR, 'app'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: SRC_DIR,
                options: {
                    plugins: ['@babel/plugin-transform-runtime'],
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
                include: path.join(SRC_DIR, 'components'),
                options: {
                    plugins: ['@babel/plugin-transform-runtime'],
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }
                ]
            },
            {
                test: /\.(jpeg|jpg)(\?.*$|$)/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'images/'
                        }
                    }
                ]
            },
            {
                test: require.resolve('jquery'),
                use: [
                    {
                        loader: 'expose-loader',
                        options: 'jquery'
                    },
                    {
                        loader: 'expose-loader',
                        options: '$'
                    }
                ]
            }
        ]
    },
    watch: true
};