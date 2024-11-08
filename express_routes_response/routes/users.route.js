
const express =require('express');
const router = express.Router();

// http://localhost:3000/api/user

router.get("/register", (req,res) => {
    res.send("I am get request at a Register routes by khan");
    res.end();
});

router.get("/login", (req,res) => {
    res.send("I am get request at a home Login by khan");
    res.end();
});


module.exports = router;