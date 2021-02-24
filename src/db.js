const { Sequelize, DataTypes } = require("sequelize");

const PostModel = require("./models/Post");
const CategoryModel = require("./models/Category");

const db = new Sequelize("db_connect", "user", "4264809", {
    host: "localhost",
    dialect: "mysql",
    define: {
        freezeTableName: true,
        timestamps: false
    }
});

const Post = PostModel(db, DataTypes);
const Category = CategoryModel(db, DataTypes);

db.sync()
    .then(res => console.log("¡Synchronized!"))
    .catch(err => console.log("Cannot synchronized", err))

module.exports = { Post, Category };