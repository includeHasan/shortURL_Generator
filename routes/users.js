var express = require('express');
var router = express.Router();
var db=require('mongoose')
/* GET users listing. */
db.connect("mongodb+srv://utkarsh:%40Utkarsh123@cluster0.uiwjnnu.mongodb.net/?retryWrites=true&w=majority")

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