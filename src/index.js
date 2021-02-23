const express = require("express");

const app = express();

const PORT = process.env.PORT || 5000;

require("./db");

app.use("/api", require("./router/api/posts"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`);
});