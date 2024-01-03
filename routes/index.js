var express = require('express');
var router = express.Router();
var bodyParser=require('body-parser')
router.use(bodyParser.urlencoded({extended:false}))

//importing controllers
var{ anal, redirector, createUrl }= require('../controllers/index')


//all routes

router.get('/',(req,res)=>{
  res.render('index',{title:"url-shortner"})
})


router.post('/url',createUrl)


router.get('/:shortId',redirector)

router.get('/analytic/:shortId',anal)



module.exports = router;