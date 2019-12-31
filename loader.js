const path = require('path');
const defaultConfig = require("./defaultConfig.json");


try {
    var packageJson = path.resolve('package.json')
    var config = require(packageJson).namespace;
} catch (e) {
    config = false
}

config = config ?
    Object.assign({}, defaultConfig, config)
    :
    defaultConfig


module.exports = function (source) {
    source
        .slice(0, 150) // for improve transpile spead
        .replace(/@namespace "([^"]+)";/i, function (command, namespace) {
            source = source.slice(command.length); // remove @namespace
            source = '[' + config.name + '=' + namespace + ']{' + source + '}'; // add wrapper
        })
    return source;
}
