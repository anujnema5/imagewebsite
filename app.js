const express = require('express');
const ejs = require('ejs');
const app = express();

app.use(express.static("style"));
app.set("view engine", "ejs");


app.get("/download", (req,res)=>{
    res.render("download");
})

app.get("/", (req,res)=>{
    res.render("home");
})

app.get("/about", (req,res)=>{
    res.render("about");
})

app.listen(3000, (req,res)=>{
    console.log(`Server started at port 3000`);
})