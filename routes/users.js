var express = require('express');
var router = express.Router();
var db=require('mongoose')
/* GET users listing. */
db.connect("mongodb://localhost:27017/urlShortner")

userSchema=db.Schema({
  shortId:{
    type:String,
    required:true,
    unique:true
  },
  redirectUrl:{
    type:String,
    required:true
  },
  visitHistory:[{
    timestamps:{type:Number}}],
   

},
{ timestamps:true}
)

module.exports = db.model('url',userSchema);