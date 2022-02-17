const express = require('express');

const path = require('path');
      
const app = express();

      app.use(express.static(path.join(__dirname, 'build')));

      app.get('/*', function(req, res){
            res.sendFile(path.join(__dirname, 'build','index.html'))
      });
      
      //set port, listen for requests
      const PORT = process.env.port || 9000;
      app.listen(PORT,()=> {
      	console.log(`Server is running on port ${PORT}. `);
      });

      



