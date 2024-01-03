
var userModal =require('../routes/users')

async function anal(req,res){
    shortId=req.params.shortId;
    let data=await userModal.findOne({shortId})
    res.json({
        totalClicks:data.visitHistory.length,
        analytics:data.visitHistory
    })
}
async function redirector(req,res){
    var shortId=req.params.shortId;
    console.log(shortId)
   const entry=await  userModal.findOneAndUpdate({shortId},
    {
     $push:
     {
      visitHistory:
      {
        timestamps:Date.now(),
      }
     },
     })
     res.redirect(entry.redirectUrl)
   
}

async function createUrl(req,res){
    if(!req.body.url)
   {
      res.status(4000).send({"error":"url has not sent"});
   }
   
   function hand()
   {
       let password='';let str='ABCDEFGHIJKLMOPQRSTUVWXYZabcdefghijklmopqrstuvwxyz'
        for(let i=0;i<=8;i++)
       {
          let char=Math.floor(Math.random()*str.length+1)
          password+=str.charAt(char)
       }
       return password
      
   }
   
   
   
   
   
   let s=hand()
  
  
  let created=await userModal.create({
      redirectUrl:req.body.url,
      shortId:s
  })
  console.log(created)
  return res.json({Id:s});
  
  }
  
module.exports={anal,redirector,createUrl}