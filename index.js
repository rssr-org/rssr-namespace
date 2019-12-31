import PropTypes from 'prop-types';
import defaultConfig from  "./defaultConfig.json"

let config;
try {
    config = require("~/package.json").namespace;
} catch (e) {
    config = false
}

config = config ?
    Object.assign({}, defaultConfig, config)
    :
    defaultConfig


const Namespace = ({namespace, children}) => {
    const copy = {
        children: {...children},
        childrenProps: {...children.props}
    }
    copy.childrenProps[config.name] = namespace;
    copy.children.props = copy.childrenProps;
    return copy.children;
}

Namespace.propTypes = {
    namespace: PropTypes.string.isRequired
}

export default Namespace;
