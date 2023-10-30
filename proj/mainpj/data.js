const mongoose = require('mongoose');

var url = "mongodb+srv://ahmed:ahmed@cluster0.y4qsdmp.mongodb.net/ "
mongoose.connect(url).then(() => { console.log("Connected to MongoDB"); }).catch((err) => { console.log(err); })


var schema = new mongoose.Schema({
    name: String,
    star: Number,
    img:String,
    complete: Number,
    year: Number,
    Address: String,
    birth:String,
    join:Number,
    bike:String,
    cnic:String,
    email:String,
    whatsapp:Number,
    
  
  })
  var db = mongoose.model("webapp", schema);
  var rider = new db({
    name:"Awais Tariq",
    star:4,
    img:"awais.jpg",
    complete:19,
    year:20,
    Address:"Havelian, main Bazar",
    birth:"11-April-2004",
    join:2020,
    bike:"MNA-546",
    cnic:"13101-57898567-4",
    email:"123AWAIS@gmail.com",
    whatsapp:"033656123"
  })

//   rider.save().then(()=>{
//     console.log("Data is saved");
//   }).catch((e)=>{
//     console.log(e);
//   })

var schema = new mongoose.Schema({
  name: String,
  email: String,
  address: String,
  city: String,
  gender: String,
  amount: Number


})
var dbr = mongoose.model("feeder", schema);



module.exports = {
    db: db,
    dbr:dbr
  }
  
  
  
