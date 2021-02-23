module.exports = (db, Datatypes) => {
    const Post = db.define("Post", {
        titulo: {
            type: Datatypes.STRING,
            allowNull: false
        },
        contenido: {
            type: Datatypes.STRING,
            allowNull: false
        },
        categoria: {
            type: Datatypes.STRING,
            allowNull: false
        },
        imagen: {
            type: Datatypes.STRING,
            allowNull: false
        },
        id: {
            type: Datatypes.UUID,
            primaryKey: true
        }
    });
};