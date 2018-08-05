const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

let feedback = []

router.post('/', (req, res) => {
console.log(req.body);
res.sendStatus(201);
})

module.exports = router;