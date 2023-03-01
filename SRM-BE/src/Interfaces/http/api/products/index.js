const handler = require('./handler');
const routes = require('./routes');

module.exports = {
    name: 'products',
    version: '1.0.0',
    register: async (server, { container }) => {
        const productHandler = new handler(container);
        server.route(routes(productHandler));
    },
};