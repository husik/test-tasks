"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.initDatabase = void 0;
// import Sequelize from "sequelize";
// import config from "../config/app.config";
//
// const sequelize = new Sequelize(config.db.database, config.db.username, config.db.password, {
//     host: config.db.host,
//     dialect: config.db.dialect,
//     pool: config.db.pool,
//     freezeTableName: false,
//     logging: (data, result) => {
//         if (result.type === "INSERT") {
//             console.log(result.model);
//             console.log(result.instance.dataValues);
//         }
//     }
// });
const db = {// Company: sequelize.import("./company.model"),
};

const initDatabase = done => {// sequelize
  //     .sync({force: false})
  //     .then(() => {
  //         if (done) {
  //             done(db);
  //         }
  //     })
  //     .catch((err) => {
  //         // eslint-disable-next-line no-console
  //         console.log(err);
  //     });
}; // export { sequelize };


exports.initDatabase = initDatabase;
var _default = db;
exports.default = _default;