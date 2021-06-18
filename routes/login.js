const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const { uuid } = require('uuidv4');
const dotenv = require("dotenv");


router.post('/login',(req,res)=>{
       const {username,password}=req.body
        let id = uuid()
      
       if (username&&password) {
              const token = jwt.sign({id:id},process.env.SECRET_TOKEN);
              res.json({
                  status:200,
                  message:'user logged in',
                  data:{
                      id:id,
                      token:token
                   }
              })
       }else{
           res.json({
               status:400,
               message:'all fields are required',
               error:'bad request'
           })
       }
})

module.exports = router