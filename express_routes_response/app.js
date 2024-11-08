const express = require('express');
const app = express();
const userRouter = require("./routes/users.route");

app.use("/api/user", userRouter);

app.use("/register", (req,res) =>{
    res.statusCode = 200;
    res.sendFile(__dirname + "/views/register.html");
});

app.use("/login", (req,res) =>{
    // res.cookie("name", "Khan");
    // res.cookie("age", 29);
    res.clearCookie("name");
    res.append("id", "123456789");
    res.end();
});

app.use("/", (req,res) => {
    res.statusCode = 200;
    res.sendFile(__dirname + "/views/index.html");
});

app.use((req,res) => {
    res.send("<h4> 404 not Found</h4>");
    res.end();
});




module.exports = app;