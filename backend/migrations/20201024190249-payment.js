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
  return db.createTable('payment',{
    id: {
      type: 'int',
      primaryKey: true,
      autoIncrement: true,
      unsigned: true,
      notNull: true,
      length: 10
    },
    paymentImg: {
      type: 'string',
      length: 2048
    },
    user_id: {
      type: 'int',
      unsigned: true,
      length:10,
      notNull:true,
      foreignKey: {
        name: 'payment_user_id_fk',
        table: 'user',
        rules:{
          onDelete: 'RESTRICT',
          onUpdate: 'RESTRICT'
        },
        mapping: {
          user_id:'id'
        }
      }
    },
    tmpDeposit_Id: {
      type: 'int',
      unsigned: true,
      length:10,
      notNull:true,
      foreignKey: {
        name:'payment_tmpDeposit_id_fk',
        table:'tmpDeposit',
        rules:{
          onDelete: 'RESTRICT',
          onUpdate: 'RESTRICT'
        },
        mapping:{
          tmpDeposit_Id: 'id'
        }
      }
    }
  });
};

exports.down = function(db) {
  return null;
};

exports._meta = {
  "version": 1
};
