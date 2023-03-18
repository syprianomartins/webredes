const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.render("index");
});

router.get("/whatisit", (req, res) => {
    res.render("whatisit");
});

router.get("/howitworks", (req, res) => {
    res.render("howitworks");
});

router.get("/benefits", (req, res) => {
    res.render("benefits");
});

router.get("/whatis6e", (req, res) => {
    res.render("whatis6e");
});

module.exports = router;