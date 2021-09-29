const path = require('path');
const webpackMerge = require('webpack-merge');
const baseComponentConfig = require('@splunk/webpack-configs/component.config').default;

module.exports = webpackMerge(baseComponentConfig, {
    entry: {
        CustomGMap: path.join(__dirname, 'src/CustomGMap.jsx'),
    },
    output: {
        path: path.join(__dirname),
    },
});
