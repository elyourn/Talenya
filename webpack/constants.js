const path = require('path');

const PATH_SRC = path.join(__dirname, '../src');
const PATH_DIST = path.join(__dirname, '../talenya');
const PATH_SRC_INDEX = path.join(PATH_SRC, './index.jsx');
const PATH_NODE_MODULES = path.join(__dirname, '../node_modules');

module.exports = {
    PATH_SRC,
    PATH_DIST,
    PATH_SRC_INDEX,
    PATH_NODE_MODULES,
};
