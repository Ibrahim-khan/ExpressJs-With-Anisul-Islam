const express = require('express');
const app = express();
const PORT = 3004;

const myMiddleWare = (req, res, next) => {
    console.log("Middleware function");

    req.currentTime = new Date(Date.now());
    next();
};

app.use(myMiddleWare);

app.get("/", (req,res) =>{
    console.log("I am home" + req.currentTime);
    res.send("<h1>I am Home route</h1>");
});
app.get("/about", (req,res) =>{
    console.log("I am about" + req.currentTime);
    res.send("<h1>I am About route</h1>");
});

app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`);
});