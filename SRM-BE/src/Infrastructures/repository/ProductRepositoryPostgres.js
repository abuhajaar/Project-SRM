const ProductRepository = require("../../Domains/products/ProductRepository");


class ProductRepositoryPostgres extends ProductRepository {
    constructor(pool, idGenerator) {
        super();
        this._pool = pool;
        this._idGenerator = idGenerator;
        this.getProducts = this.getProducts.bind(this);
        this.getProductById = this.getProductById.bind(this);
    }
    async getProductById(productId) {
        const query = {
            text: 'SELECT * FROM products WHERE id = $1',
            values: [productId],
        };
        const { rows, rowCount } = await this._pool.query(query);
        if (!rowCount) {
            return new NotFoundError('Product tidak ditemukan');
        }
        return rows[0];

    }
    async getProducts() {
        const query = {
            text: 'SELECT * FROM products',
            values: [],
        };
        const result = await this._pool.query(query);


        if (!result.rowCount) {
            return new NotFoundError('Product tidak ditemukan');
        }

        return result.rows;
    }
}

module.exports = ProductRepositoryPostgres;
