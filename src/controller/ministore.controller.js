const db = require("../model");

const ItemDescription = db.ItemDescription;

// Create

exports.create = (req, res)=> {
	if(!req.body.title){
		res.status(400).send({message:"content cannot be empty!"});
		return;
	}
   
   const  itemDescription = new ItemDescription({
   	   title: req.body.title,
   	   price: req.body.price,
   	   description: req.body.desc,
   	   submitted: req.body.submitted
   })

   //Save items in the database

   itemDescription.save(itemDescription).then(data=> {
   	   res.send(data);
   }).catch(err => {
   	 res.status(500).send({ 
   	 	message:err.message || "Some error occured while creating the items."
   	 });
   });
}

// Retrieve all items from the database

exports.findAll = (req, res) => {
	  const title = req.query.title;
	  var condition = title ? { title: {
	                                      $regex: new RegExp(title),
	                                      $options:"i"
	                                    }
	                            } :{};

	ItemDescription.find(condition).then(data => {
		   res.send(data);
	}).catch(err => {
		res.status(500).send({
			message:err.message || "Some error occured while retrieving items"
		});
	});
}

//Find a single items with an id

exports.findOne = ( req, res ) => {
	const id = req.params.id;

	ItemDescription.findById(id).then(data => {
		    if(!data){
		    	res.status(404).send({
		    		message:"Not found items with id "+ id
		    	})
		    }else res.send(data);                      
	})
}

// Update the tutorial by the id in the request

exports.update = ( req, res ) => {
	 if(!req.body) {
	 	 return res.status(400).send({
	 	 	message:"Data to update cannot be empty"
	 	 });
	 }

	 const id = req.params.id;
        
     ItemDescription.findByIdAndUpdate(id, req.body, { useFindAndModify:false }).then(data => {
     	  if(!data) {
            es.status(404).send({
            	message:`cannot update items with an id: ${id}.  maybe items was not found.`
            });
     	  }else res.send({message: "items was updated successfully. "});
     }).catch(err => {
     	res.status(500).send({
     		message:"Error updating items with id " + id
     	});
     });
};


exports.delete = (req, res) => {
  const id = req.params.id;

  ItemDescription.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
        });
      } else {
        res.send({
          message: "item was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Tutorial with id=" + id
      });
    });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  ItemDescription.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Tutorials were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all tutorials."
      });
    });
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  ItemDescription.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};





























