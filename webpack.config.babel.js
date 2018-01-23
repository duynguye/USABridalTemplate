const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');

const PATHS = {
    app: path.join(__dirname, 'app'),
    build: path.join(__dirname, 'public')
};

const LAUNCH_COMMAND = process.env.npm_lifecycle_event;
const isProduction = LAUNCH_COMMAND === 'production';
process.env.BABEL_ENV = LAUNCH_COMMAND;
const productionPlugin = new webpack.DefinePlugin({
    'process.env': {
        NODE_ENV: JSON.stringify('production')
    }
});

const base = {
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    },

    stats: {
        assets: true,
        assetsSort: 'field',
        children: false,
        modules: false,
        hash: true,
        depth: true,
        version: false,
        timings: true
    },

    entry: {
        index: [ PATHS.app + '/index.js' ],
        vendor: [
            'jquery',
            'popper.js',
            'bootstrap'
        ]
    },

    output: {
        path: PATHS.build + '/javascript/',
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.js',
            minChunks: Infinity
        }),
        new webpack.NamedModulesPlugin(),
    ],
    resolve: {
        modules: [path.resolve(__dirname, './src'), 'node_modules']
    },
    
};

const developmentConfig = {
    devtool: 'cheap-module-inline-source-map',
    devServer: {
        historyApiFallback: true
    }
};

const productionConfig = {
    devtool: 'cheap-module-source-map',
    plugins: [productionPlugin, new UglifyJSPlugin()]
};

export default Object.assign({}, base,
    isProduction === true ? productionConfig : developmentConfig
);