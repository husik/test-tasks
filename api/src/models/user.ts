"use strict";

import {verbose} from "sqlite3";
import * as faker from "faker";

const sqlite3 = verbose();
const db = new sqlite3.Database(':memory:');

// @ts-ignore
const add = (stmt, firstName, lastName, email, password) => new Promise((resolve, reject) => {
    stmt.run(faker.name.firstName(), faker.name.lastName(), faker.internet.email(), faker.internet.password());
    resolve();
});

// @ts-ignore
const each = () => new Promise((resolve, reject) => {
    db.each("SELECT * FROM table1", function (err, row) {
        if (err) {
            reject(err);
        }

        console.log(row);
    });

    setTimeout(() => {
        resolve();
    }, 5000);
});

db.serialize(function () {
    db.run("CREATE TABLE table1 (firstName TEXT, lastName TEXT, email TEXT, password TEXT)");

    const stmt = db.prepare("INSERT INTO table1 VALUES (?, ?, ?, ?)");
    const promises = [];
    for (let i = 0; i < 10; i++) {
        promises.push(add(stmt, faker.name.firstName(), faker.name.lastName(), faker.internet.email(), faker.internet.password()));
    }

    // @ts-ignore
    Promise.all(promises)
        .then(() => {
        });

    stmt.finalize();

    each().then(() => {
        db.close();
    }).catch((err) => {
        console.log(err);
    });
});

