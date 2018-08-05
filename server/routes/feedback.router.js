const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// let feedback = []

router.post('/', (req, res) => {
    pool.query(`INSERT INTO "feedback"
    ("feeling", "understanding", "support", "comments")
VALUES ($1, $2, $3, $4);`, [req.body.feedback.feeling, req.body.feedback.understanding,
        req.body.feedback.support, req.body.feedback.comments])
        .then((results) => {
            res.sendStatus(201);
        }).catch((errorFromPG) => {
            res.sendStatus(500)
        })
});

module.exports = router;