const fs = require("fs").promises;
//alt new syntax: import {promises as fs} from 'fs';

module.exports = (pool) => {
  return fs
    .readFile("./sql/setup.sql", { encoding: "utf-8" })
    .then((sql) => pool.query(sql));
};
