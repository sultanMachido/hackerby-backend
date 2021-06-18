
const downloadImage = require('image-downloader')


async function download(url) {
    const options = {
        url: url,
        dest: `${__dirname}/images/image.jpg`                
      }
      
      try {
        let fname = await downloadImage.image(options)
        return fname.filename
      } catch (error) {
          console.log(error)
      }
     
      
}


// let img = download('https://images.unsplash.com/photo-1528645046579-596f02cf16eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1567&q=80')  
//  console.log(img)
module.exports = download