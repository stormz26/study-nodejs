const express = require("express");
const morgan = require("morgan");
const handlebars = require('express-handlebars').engine;

const path = require("path");
const app = express();
const port = 3000;

//HTTP logger
app.use(morgan("combined"));
app.use(express.urlencoded())
app.use(express.json())
//Template engine
app.engine(
    "hbs",
    handlebars({
        extname: ".hbs",
        
    })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

//route
app.get("/", (req, res) => {
    res.render("search")
});
app.get("/news", (req, res) => {
    res.render("news");
});
app.get("/search",(req,res)=>{
    //console.log(req.query.b)
    res.render("search")
}
)
app.post("/",(req,res)=>{
    console.log(req.body)
    res.render("search")
})
// 127.0.0.1 - localhost:3000
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
