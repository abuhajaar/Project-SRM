const StoreRepository = require("../../Domains/store/StoreRepository");

class StoreRepositoryPostgres extends StoreRepository {

    constructor(pool, idGenerator) {
        super();
        this._pool = pool;
        this._idGenerator = idGenerator;
    }

    async getStoreById(storeId) {
        const query = {
            text: 'SELECT * FROM store WHERE id = $1',
            values: [storeId],
        };

        const { rows, rowCount } = await this._pool.query(query);
        if (!rowCount) {
            return new NotFoundError('Store tidak ditemukan');
        }
        return rows[0];
    }
}

module.exports = StoreRepositoryPostgres;