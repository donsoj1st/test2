
const express = require("express");
const path = require("path")
const router = express.Router();


router.post("/add-product", (req, res, next) => {
    console.log(req.body);
    res.redirect("/shop");

});

router.get("/add-product",(req,res,next)=>{
    res.render('add-product.ejs');
})

module.exports = router; 