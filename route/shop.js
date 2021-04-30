const shop = require('express');
const { dirname } = require('path');
const path = require("path");

const shopRoute = shop.Router();

shopRoute.get("/", (req, res, next) => {
    res.render('shop',{shop:'this is the render', title:'shop'});
});

module.exports = shopRoute;