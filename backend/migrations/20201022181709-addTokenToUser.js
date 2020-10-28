'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db) {
  return db.createTable('password_reset_token',{
    id: {
      type: 'int',
      primaryKey: true,
      autoIncrement: true,
      unsigned: true,
      notNull: true,
      length: 10
    },
    email: {
      type: 'string',
      length: 255,
      defaultValue: null
    },
    token: {
      type: 'string',
      length: 255,
      defaultValue: null
    },
    expiration: {
      type: 'timestamp',
      notNull:false,
      defaultValue: null
    },
    created_at: {
      type: 'timestamp',
      notNull: true,
      defaultValue: new String('CURRENT_TIMESTAMP')
    },
    updated_at: {
      type: 'timestamp',
      notNull: false,
    },
    used: {
      type: 'int',
      lenght:11,
      notNull: true,
      defaultValue: 0
    }
  })
}

exports.down = function(db) {
  return db.dropTable('password_reset_token');
};

exports._meta = {
  "version": 1
};
