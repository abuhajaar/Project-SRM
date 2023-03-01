const routes = require('./routes');
const StoreHandler = require('./handler');

module.exports = {
    name: 'store',
    version: '1.0.0',
    register: async (server, { container }) => {
        const storeHandler = new StoreHandler(container);
        server.route(routes(storeHandler));

    }

}