import mysql, { createConnection } from "mysql2"

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "senai",
    database: "cullinari",
});