const express=require("express");
const app=express();

const path=require("path");
const port = process.env.port || 3000;
// const port=8080;

app.use(express.urlencoded({extended: true}));

app.set("view engine","ejs");
app.set("views", path.join(__dirname,"views"));

const { v4: uuidv4 } = require('uuid');

const methodOverride = require("method-override");
app.use(methodOverride('_method'));

app.use(express.static(path.join(__dirname,"public")));

let blogs=[
    {
        id: uuidv4(),
        title: "pratik kothare",
        short_content: "i'm from nagpur..............",
        full_containt:""
    },
    {
        id: uuidv4(),
        title: "School Day's",
        short_content: "At a Day.............",
        full_containt:""
    }
];
// This route tells Express what to do for the main URL
app.get('/', (req, res) => {
  res.render('index.ejs', { blogs: blogs });
});
app.get("/blogs",(req,res)=>{
    res.render("index.ejs",{blogs});
});

app.get("/blogs/new",(req,res)=>{
    res.render("new.ejs",{blogs});
});

app.post("/blogs",(req,res)=>{
    let {title,short_content,full_containt}=req.body;
    let id = uuidv4();
    blogs.push({title,short_content,id,full_containt});
    res.redirect("/blogs");
});

app.get("/blogs/:id",(req,res)=>{
    let {id}=req.params;
    let blog=blogs.find((b)=> id===b.id);
    res.render("read.ejs",{blog});
});

app.patch("/blogs/:id",(req,res)=>{
    let {id}=req.params;
    let NewSort=req.body.short_content;
    let NewFull=req.body.full_containt;
    let blog=blogs.find((b)=> id===b.id);
    blog.short_content=NewSort;
    blog.full_containt=NewFull;
    res.redirect("/blogs");
});

app.get("/blogs/:id/edit",(req,res)=>{
    let {id}=req.params;
    let blog=blogs.find((b)=> id===b.id);
    res.render("edit.ejs",{blog});
});

app.delete("/blogs/:id",(req,res)=>{
    let {id}=req.params;
    blogs=blogs.filter((b)=> id !== b.id);
    res.redirect("/blogs");
});

app.listen(port,()=>{
    console.log(`Listing on port: ${port}`);
});
