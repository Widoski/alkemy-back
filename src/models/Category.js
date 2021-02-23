module.exports = (db, DataTypes) => {
    const Category = db.define("Category", {
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
    });
    return Category;
};