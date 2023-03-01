/* eslint-disable camelcase */


exports.up = pgm => {
    pgm.createTable('products', {
        id: {
            type: 'VARCHAR(50)',
            primaryKey: true,
        },
        nama: {
            type: 'VARCHAR(50)',
            notNull: true,
        },
        foto: {
            type: 'TEXT',
            notNull: false,
        },
        desc: {
            type: 'TEXT',
            notNull: true,
        },
        harga: {
            type: 'INTEGER',
            notNull: true,
        },
        stok: {
            type: 'INTEGER',
            notNull: false,
        },
    });
};

exports.down = pgm => {
    pgm.dropTable('products');
};
