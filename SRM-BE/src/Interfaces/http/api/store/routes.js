const routes = (handler) => [
    {
        method: 'GET',
        path: '/stores/{storeId}',
        handler: handler.getStoreByIdHandler,
    },
];

module.exports = routes;