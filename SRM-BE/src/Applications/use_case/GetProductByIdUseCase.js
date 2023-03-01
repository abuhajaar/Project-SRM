
class GetProductByIdUseCase {
    constructor({ productRepository }) {
        this._productRepository = productRepository;
    }
    async execute(useCasePayload) {
        const productId = useCasePayload;
        const product = await this._productRepository.getProductById(productId);
        return product;
    }

}
module.exports = GetProductByIdUseCase;
