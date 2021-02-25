const express = require("express");
const { restart } = require("nodemon");

const router = express.Router();

const { Post } = require("../../db");

router.get("/", (req, res) => {
    Post.findAll({
        order: [["fecha", "DESC"]],
    })
        .then(posts => {
            res.json(posts);
        })
        .catch(err => {
            console.log(err);
        });
});

router.get("/:id", (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(post => {
            if (!post) {
                res.json({ msg: `Post ${req.params.id}, doesn't exist.` });
            } else {
                res.json(post);
            }
        })
        .catch(err => {
            console.log(err);
        });
});

router.post("/", (req, res) => {
    console.log(req.body)
    if (!req.body.titulo || !req.body.contenido || !req.body.imagen || !req.body.CategoryId) {
        res.json({ msg: "Cannot post." })
    } else {
        const newBody = {
            ...req.body,
            fecha: new Date()
        };

        Post.create(newBody)
            .then(post => {
                res.json(post);
            })
            .catch(err => {
                res.json({ msg: `Error. Cannot post.` });
            });
    }
});

router.patch("/:id", (req, res) => {
    if (req.body.titulo || req.body.contenido || req.body.imagen || req.body.CategoryId && req.params.id) {
        Post.findOne({
            where: {
                id: req.params.id
            }
        })
            .then(post => {
                if (!post) {
                    res.json({ msg: `Post ${req.params.id} doesn't exist.` })
                } else {
                    const data = req.body;
                    const newBody = {
                        titulo: data.titulo ? data.titulo : post.titulo,
                        contenido: data.contenido ? data.contenido : post.contenido,
                        imagen: data.imagen ? data.imagen : post.imagen,
                        CategoryId: data.CategoryId ? data.CategoryId : post.CategoryId
                    };

                    Post.update(newBody, {
                        where: {
                            id: req.params.id
                        }
                    })
                        .then(response => {
                            res.json(`Post ${req.params.id} updated.`);
                        })
                        .catch(err => {
                            console.log(err);
                        });
                }
            })
            .catch(err => {
                console.log(err);
            });
    }
});

router.delete("/:id", (req, res) => {
    Post.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(response => {
            if (response === 0) {
                res.json({ msg: `Post ${req.params.id} doesn't exist.` })
            }
            res.json({ msg: `Post ${req.params.id} deleted.` })
        })
        .catch(err => {
            console.log(err);
        })
});

module.exports = router;