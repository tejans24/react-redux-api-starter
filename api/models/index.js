/**
 * Models - Index
 *
 * @desc Index Class, purpose is to setup and sync the models.
 * Executed in the server initiation. Be careful making edits
 * to this file
 */
"use strict";

import fs         from "fs";
import path       from "path";
import Sequelize  from "sequelize";
import pg         from 'pg';
import {database} from '../../config';

let model;

function init(dbconfig) {
  /* The Model Object */
  let db = {};

  // orm class
  let sequelize = new Sequelize(dbconfig.database, dbconfig.username, dbconfig.password, dbconfig.settings);

  // file reading import for sequelize
  fs
    .readdirSync(__dirname)
    .filter(function(file) {
      return (file.indexOf(".") !== 0) && (file !== "index.js");
    })
    .forEach(function(file) {
      let imodel = sequelize.import(path.join(__dirname, file));
      db[imodel.name] = imodel;
    });

  Object.keys(db).forEach(function(modelName) {
    if ("associate" in db[modelName]) {
      db[modelName].associate(db);
    }
  });

  // ORM object
  db.sequelize = sequelize;
  db.Sequelize = Sequelize;

  // Postgres/rdb object
  db.pgConnString = "postgres://" + dbconfig.username + ":" + (dbconfig.password == null ? '' : dbconfig.password) + "@" + dbconfig.settings.host + "/" + dbconfig.database;
  db.pg = pg;

  model = db;

  return model;
};

module.exports.init = init;

module.exports.getAll = () => {
  var env = process.env.NODE_ENV || "development";
  return init(database[env]);
};
