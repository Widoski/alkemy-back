const express = require("express");

const router = express.Router();

const { Post } = require("../../db");

router.get("/", (req, res) => {
    Post.findAndCountAll({
        limit: parseInt(req.query.limit) || null,
        offset: parseInt(req.query.offset) || null
    })
        .then(posts => {
            res.json(posts)
        })
        .catch(err => console.log(err));
});

module.exports = router;