const express = require('express');
const morgan = require('morgan');

const app = express();

const port = 5007;

app.use(morgan("dev"));

app.get("/products", (req,res) => {
    res.send("list all the products");
})

app.post("/products", (req,res) => {
    res.status(201).send("create a product");
})

app.listen(port, ()=> {
    console.log(`server is running at http://localhost:${port}`);
})