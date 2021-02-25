const express = require("express");

const router = express.Router();

const { Category } = require("../../db");

router.get("/", (req, res) => {
    Category.findAll({
        order: [["nombre", "ASC"]]
    })
        .then(categories => {
            res.json(categories)
        })
        .catch(err => {
            console.log(err);
        });
});

router.get("/:id", (req, res) => {
    Category.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(category => {
            if (!category) {
                res.json({ msg: `Category ${req.params.id} doesn't exist` })
            } else {
                res.json(category);
            }
        })
        .catch(err => {
            console.log(err);
        });
});

router.post("/", (req, res) => {
    if (!req.body.nombre) {
        res.json({ msg: "Cannot post." })
    } else {
        Category.create(req.body)
            .then(post => {
                res.json(post);
            })
            .catch(err => {
                console.log(err);
            });
    }
});

router.put("/:id", (req, res) => {
    if (req.params.id && req.body.nombre) {
        Category.findOne({
            where: {
                id: req.params.id
            }
        })
            .then(category => {
                if (!category) {
                    res.json({ msg: `Category ${req.params.id} doesn't exist.` })
                } else {
                    Category.update(req.body, {
                        where: {
                            id: req.params.id
                        }
                    })
                        .then(category => {
                            res.json({ msg: `Category ${req.params.id} updated.` });
                        })
                        .catch(err => {
                            console.log(err);
                        });
                }
            });
    } else {
        res.json({ msg: "Bad request." })
    }
});


router.delete("/:id", (req, res) => {
    Category.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(response => {
            if (response === 0) {
                res.json({ msg: `Category ${req.params.id} doesn't exist.` })
            }
            res.json({ msg: `Category ${req.params.id} deleted.` })
        })
        .catch(err => {
            console.log(err);
        })
});

module.exports = router;