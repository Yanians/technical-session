module.exports = app => {
	const items = require('../controller/ministore.controller.js');
	var router = require('express').Router()


  // Create a new Tutorial
  router.post("/", items.create);

  // Retrieve all Tutorials
  router.get("/", items.findAll);

  // Retrieve all published Tutorials
  router.get("/published", items.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", items.findOne);

  // Update a Tutorial with id
  router.put("/:id", items.update);

  // Delete a Tutorial with id
  router.delete("/:id", items.delete);

  // Create a new Tutorial
  router.delete("/", items.deleteAll);

  app.use("/api/itemdescription", router); // this is the endpoint when you start navigating your UI page
};

// import items from '../controller/ministore.controller';
// import axios from 'axios'

// class VertexDataService {
//     create(data){
//      return http.post('/')

//     }
// }

