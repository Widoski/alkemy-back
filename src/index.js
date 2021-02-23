const express = require("express");

const app = express();

const PORT = process.env.PORT || 5000;

require("./db");

app.use("/api/posts", require("./router/api/posts"));
app.use("/api/categories", require("./router/api/categories"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`);
});