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
  return db.createTable('packageLevels',{
    id: {
      type: 'int',
      primaryKey: true,
      autoIncrement:true,
      unsigned:true,
      notNull: true,
      length:10
    },
    name:{
      type: 'string',
      length: 40,
      notNull: true
    },
    minprice:{
      type: 'int',
      length: 10,
      notNull: true
    },
    maxprice:{
      type: 'int',
      length: 10,
      notNull: true
    },
    percentageReturns:{
      type: 'int',
      length: 10,
      notNull: true
    },
    investmentPkg_id: {
      type: 'int',
      unsigned: true,
      length:10,
      notNull:true,
      foreignKey: {
        name: 'package_Levels_investmentPkg_fk',
        table: 'investmentPKG',
        rules:{
          onDelete: 'RESTRICT',
          onUpdate: 'RESTRICT'
        },
        mapping: {
          investmentPkg_id:'id'
        }
      }
    }
  });
};

exports.down = function(db) {
  return db.dropTable('packageLevels');
};

exports._meta = {
  "version": 1
};
