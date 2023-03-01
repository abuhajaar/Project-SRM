/* eslint-disable camelcase */
exports.up = (pgm) => {
  pgm.createTable('store', {
    id: {
      type: 'VARCHAR(50)',
      primaryKey: true,
    },
    nama: {
      type: 'TEXT',
      notNull: true,
    },
    noHp: {
      type: 'TEXT',
      notNull: true,
    },
    kota: {
      type: 'TEXT',
      notNull: true,
    },
  });
};

exports.down = (pgm) => {
  pgm.dropTable('store');
};
