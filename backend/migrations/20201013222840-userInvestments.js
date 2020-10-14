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
  return db.createTable('userInvestments', {
    id: {
      type: 'int',
      primaryKey: true,
      autoIncrement: true,
      unsigned:true,
      notNull: true,
      lenght:10
    },
    user_id: {
      type: 'int',
      unsigned: true,
      length:10,
      notNull:true,
      foreignKey: {
        name: 'userInvestments_user_id_fk',
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
    investmentPkg_id: {
      type: 'int',
      unsigned: true,
      length:10,
      notNull:true,
      foreignKey: {
        name: 'userInvestments_investmentPkg_fk',
        table: 'investmentPKG',
        rules:{
          onDelete: 'RESTRICT',
          onUpdate: 'RESTRICT'
        },
        mapping: {
          investmentPkg_id:'id'
        }
      }
    },
    amount_paid: {
      type: 'int',
      unsigned: true,
      length:10,
      notNull:true
    }
  });
};

exports.down = function(db) {
  return db.dropTable('userInvestments');;
};

exports._meta = {
  "version": 1
};
