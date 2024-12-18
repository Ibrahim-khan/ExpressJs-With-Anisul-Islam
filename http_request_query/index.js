const express = require('express');
const app = express();
const PORT = 3001;
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/register", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/register", (req, res) => {
    const fullName = req.body.fullName;
    const age = req.body.age;
    res.send(`Welcome ${fullName}. You are ${age}`);
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
