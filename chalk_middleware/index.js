const express = require('express');

const chalk = require('chalk');
const app = express();

const error = chalk.bold.red;
const warning = chalk.hex('#FFA500'); // Orange color

console.log(error('this is an error'));

const port = 5008;

app.get("/products", (req,res) => {
    res.send("this is chalk middleware");
})

app.listen(port, ()=>{
    console.log(chalk.green.bgRed.bold(`server is running at http://localhost:${port}`));
});