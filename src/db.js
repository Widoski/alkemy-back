const { Sequelize, DataTypes } = require("sequelize");

const PostModel = require("./models/post");

const db = new Sequelize("db_connect", "user", "4264809", {
    host: "localhost",
    dialect: "mysql",
    define: {
        freezeTableName: true
    }
});

const Post = PostModel(db, DataTypes);

db.sync()
    .then(res => console.log("¡Synchronized!"))
    .catch(err => console.log("Cannot synchronized"))

module.exports = {
    Post
}