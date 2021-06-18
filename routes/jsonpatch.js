const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken');
patch = require('jsonpatch')

router.post('/jsonpatch',verifyToken,(req,res)=>{
          const{jsonObject,jsonPatch}=req.body;
          if (jsonObject && jsonPatch) { 
           let patchedJSON = patch.apply_patch(jsonObject, jsonPatch);  
           res.json({
               status:200,
               message:'JSON patched',
               data: patchedJSON
           })
          }else{
            res.json({
                status:400,
                message:'Bad request',
                
            })
          }
 
})




module.exports = router