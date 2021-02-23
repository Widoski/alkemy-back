const express = require("express");

const router = express.Router();

const { Category } = require("../../db");

router.get("/", (req, res) => {
    Category.findAndCountAll({
        limit: req.query.limit || null,
        offset: req.query.offset || 0
    })
        .then(categories => {
            res.json(categories)
        });
});

module.exports = router;