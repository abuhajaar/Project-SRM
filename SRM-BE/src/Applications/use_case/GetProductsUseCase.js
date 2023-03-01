class GetProductsUseCase {
    constructor({ productRepository }) {
        this._productRepository = productRepository;
        this.execute = this.execute.bind(this);
    }
    async execute() {
        const products = await this._productRepository.getProducts();
        return products;
    }

}
module.exports = GetProductsUseCase;