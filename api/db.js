// import pg, { Client } from "pg";

// export const db = new Client({
//   user: "postgres", //default as postgres
//   host: "localhost",
//   databse: "blog",c
//   password: "123456",
//   port: 5432,
// });

import mysql from "mysql2";
console.log("db.js");

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "8YrItEbwC455vu4f1foeMNmo7nAi6pkG",
  database: "blog",
  port: 3307,
});

console.log("db.js finished");
