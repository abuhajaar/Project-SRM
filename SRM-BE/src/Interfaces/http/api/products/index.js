const Producthandler = require('./handler');
const routes = require('./routes');

module.exports = {
    name: 'products',
    version: '1.0.0',
    register: async (server, { container }) => {
        const productHandler = new Producthandler(container);
        server.route(routes(productHandler));
    },
};