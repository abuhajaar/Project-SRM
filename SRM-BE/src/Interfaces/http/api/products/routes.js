const routes = (handler) => [
    {
        method: 'GET',
        path: '/products',
        handler: handler.getAllProductsHandler,
    },
    {
        method: 'GET',
        path: '/product/{productId}',
        handler: handler.getProductByIdHandler,
    },
];

module.exports = routes;