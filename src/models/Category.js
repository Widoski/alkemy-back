module.exports = (db, DataTypes) => {
    const Category = db.define("Category", {
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
    });
    return Category;
};