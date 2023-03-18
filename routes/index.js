const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.render("index");
});
router.get("/whatisit", (req, res) => {
    res.render("whatisit");
});


module.exports = router;