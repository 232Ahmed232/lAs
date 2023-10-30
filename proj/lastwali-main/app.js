const express = require("express")
const ejs = require("ejs")
const bp = require("body-parser")
const mongoose = require('mongoose')

const app = express()

var url = "mongodb+srv://ahmed:ahmed@cluster0.y4qsdmp.mongodb.net/ "
mongoose.connect(url).then(() => { console.log("Connected to MongoDB"); }).catch((err) => { console.log(err); })


var schema = new mongoose.Schema({
    name: String,
    email: String,
    address: String,
    city: String,
    gender: String,
    amount: Number


})
var db = mongoose.model("feeder", schema);


app.use(bp.urlencoded({ extended: true }))

app.set("view engine", "ejs")

app.use(express.static("public"))

app.get("/", (req, res) => {
    res.render("index")
})
app.get("/home", (req, res) => {
    res.render("home")
})
app.post("/home", (req, res) => {
    var name = req.body.name
    var email = req.body.email
    var addr = req.body.address
    var city = req.body.city
    var gen = req.body.gender
    var amu = req.body.amu

    console.log(name);
    console.log(email);
    console.log(addr);
    console.log(city);
    console.log(gen);
    console.log(amu);

    var re = new db({
        name: name,
        email: email,
        address: addr,
        city: city,
        gender: gen,
        amount: amu
    })

    re.save().then(() => {
        console.log("Data is saved");
    }).catch((e) => {
        console.log(e);
    })
    res.redirect("/")
})


app.listen(3000, () => {
    console.log("sERVER is running");
})