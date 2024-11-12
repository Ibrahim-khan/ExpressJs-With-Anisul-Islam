const express = require('express');
const app = express();
const PORT = 3005;

app.use(express.static("public"));

app.get("/", (req,res) => {
    res.sendFile(__dirname + "/index.html");
});

app.listen(PORT, (req,res) => {
    console.log(`server is running at http://localhost:${PORT}`);
});