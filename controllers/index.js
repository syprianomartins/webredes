const express = require("express");
const router = express.Router();
const fs = require('fs');

exports.index = (req, res) => {
    
    Commerce.findAll({
        attributes: ['name', 'slogan', 'phoneNumber', 'img_url'],
    })
        .then(commerces => {
            res.render("commerces/index", {
                commerces
            });
        })
        .catch(err => {
            res.send(err);
        })
};

// module.exports = router;