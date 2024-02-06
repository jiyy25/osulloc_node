const express = require("express")
const reactapi = express.Router();
const nextrouter = require("./mysql");



reactapi.use(express.json())
// reactapi.use(express.urlencoded({ extended: true }))


reactapi.post('/', (req, res, next) => {
    next('route');
})

reactapi.use('/', nextrouter)

module.exports = reactapi;