const { Sequelize, DataTypes } = require("sequelize");

const PostModel = require("./models/post");
const CategoryModel = require("./models/category");

const db = new Sequelize("db_connect", "user", "4264809", {
    host: "localhost",
    dialect: "mysql",
    define: {
        freezeTableName: true
    }
});

const Post = PostModel(db, DataTypes);
const Category = CategoryModel(db, DataTypes);

db.sync()
    .then(res => console.log("¡Synchronized!"))
    .catch(err => console.log(err))

module.exports = {
    Post,
    Category
}