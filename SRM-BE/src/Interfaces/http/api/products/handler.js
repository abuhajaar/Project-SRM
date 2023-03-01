const GetProductByIdUseCase = require("../../../../Applications/use_case/GetProductByIdUseCase");
const GetProductsUseCase = require("../../../../Applications/use_case/GetProductsUseCase");

class ProductHandler {
    constructor(container) {
        this._container = container;
        this.getProductByIdHandler = this.getProductByIdHandler.bind(this);
        this.getAllProductsHandler = this.getAllProductsHandler.bind(this);
    }

    async getProductByIdHandler(request, h) {
        const { productId } = request.params;
        const getProductByIdUseCase = this._container.getInstance(GetProductByIdUseCase.name);
        const product = await getProductByIdUseCase.execute(productId);
        return h.response({
            status: 'success',
            data: {
                product,
            },
        }).code(200);
    }
    async getAllProductsHandler(h) {
        const getProductsUseCase = this._container.getInstance(GetProductsUseCase.name);
        console.log("masuk getAllProductsHandler")
        const products = await getProductsUseCase.execute();
        return h.response({
            status: 'success',
            data: {
                products,
            },
        }).code(200);
    }
}

module.exports = ProductHandler;