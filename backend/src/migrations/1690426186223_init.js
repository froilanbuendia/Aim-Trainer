/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable('users', {
    id: 'uuid',
    name: { type: 'varchar(1000)' },
    username: { type: 'varchar(1000)', notNull: true },
    email: { type: 'varchar(1000)', notNull: true },
    highest_score: { type: 'integer', notNull: true },
    created_at: {
      type: 'timestamp',
      notNull: true,
      default: pgm.func('current_timestamp'),
    },
    last_updated_at: {
      type: 'timestamp',
      default: pgm.func('current_timestamp'),
    },
  });
};
