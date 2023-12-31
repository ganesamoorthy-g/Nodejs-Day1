
//Synchronous Operation:
// const fs = require('fs');
// const content = new Date().toString().replace(/[:.]/g,'-')
// const path=`./files/${content}.txt`;
// try {

//     //write file
//   fs.writeFileSync(path, content);
// //Read File
//   fs.readFile(path, "utf8", (err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(data);
//     }
//   });
  
// } catch (err) {
//   console.error(err);
// }



//Asynchronous Opearation:

// const fs = require('fs/promises');
// const content = new Date().toString();

// async function Asynchronous() {
//   try {
 
//     await fs.writeFile('./files/test.txt', content);
//   } catch (err) {
//     console.log(err);
//   }
// }
// Asynchronous();



//day1 Task start from here

// run `node index.js` in the terminal
// STEP 1: IMPORT ALL NECESSARY PACKAGES
const express = require('express');
const HTTP_SERVER = express();
const cors = require('cors');
const bodyParser = require('body-parser');


// BASIC SERVER CONFIGS
const PORT = 4000;

HTTP_SERVER.listen(PORT, "0.0.0.0", (err) => {
  if (err) throw err;
  console.log(`Listening on PORT ${PORT}`);
});

HTTP_SERVER.get('/', function (resquest, response) {
  response.send("Hello World!!!! ");
})

// CONFIGURING CORS
HTTP_SERVER.use(cors());




// CONFIGURING BODY-PARSER
HTTP_SERVER.use(bodyParser.json());

// parse application/x-www-form-urlencoded
HTTP_SERVER.use(bodyParser.urlencoded({ extended: false }));


// INJECTING API SERVER
HTTP_SERVER.use('/v1', require('./app'));