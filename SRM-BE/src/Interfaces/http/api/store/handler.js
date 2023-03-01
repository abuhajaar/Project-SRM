const GetStoreByIdUseCase = require('../../../../Applications/use_case/GetStoreByIdUseCase');

class StoreHandler {
    constructor(container) {
        this._container = container;
        this.getStoreByIdHandler = this.getStoreByIdHandler.bind(this);
    }
    async getStoreByIdHandler(request, h) {
        const { storeId } = request.params;
        console.log(this._container.getInstance('GetStoreByIdUseCase'));
        const getStoreByIdUseCase = this._container.getInstance(GetStoreByIdUseCase.name);
        console.log(getStoreByIdUseCase)
        const store = await getStoreByIdUseCase.execute(storeId);
        return h.response({
            status: 'success',
            data: {
                store,
            },
        }).code(200);
    }
}

module.exports = StoreHandler;