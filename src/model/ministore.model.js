module.exports = mongoose => {

	const itemDescription = mongoose.Schema({
		title:{name:String, type:String},
		price:{name:String, type:Number, min:10},
		desc:{name:String, type:String},
		submitted:Boolean
	})

	itemDescription.method("toJSON", ()=> {
		 	const { __v,__id, object } = this.toObject();
		 	object.id =  __id;
		 	object.v = __v||'';
		 	return object;
	});

   //this is how you access a model to the API

   const ItemDescription = mongoose.model('itemdescription', itemDescription);
   return ItemDescription;
}


