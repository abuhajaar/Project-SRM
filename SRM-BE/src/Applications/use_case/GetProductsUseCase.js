class GetProductsUseCase {
    constructor({ productRepository }) {
        this._productRepository = productRepository;
    }
    async execute() {
        const products = await this._productRepository.getProducts();
        return products;
    }

}
module.exports = GetProductsUseCase;