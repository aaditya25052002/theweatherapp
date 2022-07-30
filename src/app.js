const express = require("express");
const app = express();
const port = process.env.PORT || 3000 ;
const path = require("path");

const staticpath = path.join(__dirname,"../public");
app.set('view engine','hbs');

app.use(express.static(staticpath));

app.get("",(req,res)=>{
    res.render('index')
});
app.get("/about",(req,res)=>{
    res.render('about')
});
app.get("/weather",(req,res)=>{
    res.render('weather')
});
app.get("*",(req,res)=>{
    res.render('404')
});
app.listen(port,()=>{console.log(`listening at port ${port}`)});