
const express = require("express");
const app = express();
const admin = require("./route/admin");
const shop = require('./route/shop');
const path = require("path");
app.use(express.static(path.join(__dirname,"public")));
app.set('view engine', 'ejs');
 app.set('views','views');

const bodyparser = require("body-parser");


app.use(bodyparser.urlencoded({ extended: false }));
app.use('/admin',admin);
app.use('/shop',shop);

app.use((req,res,next)=>{
    res.render('error',{title: 'Error page not found'});

})

app.listen(4000);