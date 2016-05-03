'use strict';

   var mysql = {
        host: "localhost",
        port: 3306,
        database: "eden",
        user: "root",
        password: ""
    },
    redis = {
        host: "localhost",
        port: 6379,
        user: "",
        password: "",
        db: 2,
        prefix: "eden"
    },
    httpCache = {
        host: "localhost",
        port: 6379,
        user: "",
        password: "",
        db: 3,
        prefix: "eden"
    };


export {mysql, redis, httpCache};