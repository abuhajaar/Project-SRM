class ProductRepository {
    async getProductById(storeId) {
        throw new Error('STORE_REPOSITORY.METHOD_NOT_IMPLEMENTED');
    }
    async getProducts(productId) {
        throw new Error('STORE_REPOSITORY.METHOD_NOT_IMPLEMENTED');
    }
}

module.exports = ProductRepository;