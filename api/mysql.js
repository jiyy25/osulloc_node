const express = require("express");
const mysql = require("mysql");
const mydbinfo = require("./dbconfig.json")

const mysqlapi = express.Router();


mysqlapi.use(express.json())
mysqlapi.use(express.urlencoded({ extended: true }))

mysqlapi.post('/', (req, res) => {

    res.send("next로 잘 연결되었나?")
})


module.exports = mysqlapi;