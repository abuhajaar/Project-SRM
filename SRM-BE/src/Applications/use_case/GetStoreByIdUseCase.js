class GetStoreByIdUseCase {
    constructor({ storeRepository }) {
        this._storeRepository = storeRepository;
    }
    async execute(useCasePayload) {
<<<<<<< HEAD
=======
        console.log('getsotrebyidusecase')
>>>>>>> 9017120 (commit)
        const storeId = useCasePayload;
        const store = await this._storeRepository.getStoreById(storeId);
        return store;
    }

}
module.exports = GetStoreByIdUseCase;