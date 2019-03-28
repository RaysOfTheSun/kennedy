const path = require('path');
const SRC_DIR = path.join(__dirname, './src');
const DIST_DIR = path.join(__dirname, './dist');

module.exports = {
    mode: 'production',
    entry: {
        main: ['./src/components/Navbar/Navbar.jsx', './src/main.js'],
        index: ['./src/components/CardGrid/CardGrid.jsx', './src/components/DiscoverGrid/DiscoverGrid.jsx'],
        categoryIndex: ['./src/category-index.js', './src/components/MensDiscoverGrid/MensDiscoverGrid.jsx',
            './src/components/BannerCarousel/BannerCarousel.jsx', './src/components/WomensDiscoverGrid/WomensDiscoverGrid.jsx'],
        bags: ['./src/components/BagsFeaturedBannerCarousel/BagsFeaturedBannerCarousel.jsx',
            './src/components/BagsNewArrivalBannerCarousel/BagsNewArrivalBannerCarousel.jsx'],
        apparel: ['./src/components/HatsAndAccessoriesBannerCarousel/HatsAndAccessoriesBannerCarousel.jsx',
            './src/components/ShirtsBannerCarousel/ShirtsBannerCarousel.jsx'],
        productPrev : ['./src/components/ProductDetails/ProductDetails.jsx', './src/components/WatchesCardGrid/WatchesCardGrid.jsx', './src/productPrev.js'],
        catalog: ['./src/components/Catalog/Catalog.jsx', './src/components/Catalog/CatalogWrapper.jsx', './src/catalog.js']
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
    }
};