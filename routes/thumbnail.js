const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/verifyToken");
const sharp = require("sharp");
const download = require("../download-image");
const { uuid } = require('uuidv4');

router.post("/thumbnail", verifyToken, async (req, res) => {
  const { imageUrl } = req.body;
 
  if (imageUrl) {
    let imgFolder = req.hostname 
    let imageName = uuid();
    let imgPath;
    let thumbnail;
    let errorType; 
    try {
        imgPath = await download(imageUrl);
       
        thumbnail = await sharp(imgPath)
        .resize({ height: 50, width: 50 })
        .toFile(`./images/${imageName}.jpg`)

    } catch (error) {
         
         errorType = error
         //log error
    }
    
  
   
    
    
    thumbnail
      ? res.json({
          staus: 200,
          message:'thumbnail ready',
          data:{
            image: `${imgFolder}/images/${imageName}.jpg`
          }
     
        })
      : res.json({
        status:400,
        message:'thumbnail not created'
      });

  } else {
    res.json({
      status: 400,
      message: "Bad request",
      error:'all fields are required'
    });
  }
});

module.exports = router;
