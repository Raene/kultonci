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
  return db.createTable('user', {
    id: {
      type: 'int',
      primaryKey: true,
      autoIncrement: true,
      unsigned:true,
      notNull: true,
      length: 10
    },
    name: {
      type: 'string',
      length: 40,
      notNull: true
    },
    email: {
      type: 'string',
      length: 50,
      notNull: true
    },
    password: {
      type: 'string',
      notNull: true
    },
    kyc_id: {
      type: 'int',
      length: 10,
      notNull: true
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
    deleted_at: {
      type: 'timestamp',
      notNull: false,
    }
  });
};

exports.down = function(db) {
  return db.dropTable('user');
};

exports._meta = {
  "version": 1
};
