module.exports = (db, DataTypes) => {
    const Post = db.define("Post", {
        titulo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        contenido: {
            type: DataTypes.STRING,
            allowNull: false
        },
        imagen: {
            type: DataTypes.STRING,
            allowNull: false
        },
        id: {
            type: DataTypes.UUID,
            primaryKey: true
        }
    });
};