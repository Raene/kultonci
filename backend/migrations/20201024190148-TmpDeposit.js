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

//user_id
exports.up = function(db) {
  return db.createTable('tmpDeposit',{
    id: {
      type: 'int',
      primaryKey: true,
      autoIncrement: true,
      unsigned: true,
      notNull: true,
      length:10
    },
    pkgName: {
      type: 'string',
      length: 40
    },
    pkgLevel: {
      type: 'string',
      length: 40
    },
    user_id: {
      type: 'int',
      unsigned: true,
      length:10,
      notNull:true,
      foreignKey: {
        name: 'tmpDeposit_user_id_fk',
        table: 'user',
        rules:{
          onDelete: 'RESTRICT',
          onUpdate: 'RESTRICT'
        },
        mapping: {
          user_id:'id'
        }
      }
    }

  });
};

exports.down = function(db) {
  return db.dropTable('tmpDeposit');
};

exports._meta = {
  "version": 1
};
