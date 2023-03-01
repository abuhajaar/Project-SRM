class GetStoreByIdUseCase {
    constructor({ storeRepository }) {
        this._storeRepository = storeRepository;
        this.execute = this.execute.bind(this);
    }
    async execute(useCasePayload) {
        const storeId = useCasePayload;
        const store = await this._storeRepository.getStoreById(storeId);
        return store;
    }

}
module.exports = GetStoreByIdUseCase;