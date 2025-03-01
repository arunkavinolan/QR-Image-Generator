import inquirer from 'inquirer'
import qr from 'qr-image'   
import fs from 'fs'

//Steps Need to do 
//step:1 use the inquirer package to ask the user for the URL
//step:2 use the qr-image package to generate the image from the user's URL

//step:1 
inquirer
.prompt([
    {
        type: 'input',
        name: 'url',    
        message: 'Hello , Please Enter the URL to generate QR Image:'
    }
])
.then((answers) =>{
    let url = answers.url;
    //step:2
    let qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('url.png'));
   
})

 .catch((error)=>{
    if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        console.log(`error${error}`) ;
      }
 })  

 
