import http from '../httpcommon';
// const ItemDescription = require('../model');
import qs from 'qs'
class VertexDataService{

	create(data) {
    console.log(' from axios async:',data)
        return http('itemdescription',{
                   'data':{
                      data:qs.stringify(data)
                   }                        
        }).then(res=> {
            // console.log(res.data);
            console.log(res)
        })       
     
    }
 
// 	update(id,title,price,desc,image){
// 		return http.put(`../actions/inaction/${id}`,id,title,price,desc,image);
// 	}

// 	delete(id){
// 		return http.delete(`../actions/inaction/${id}`);
// 	}

// 	deleteAll(id){
// 		return http.delete(`../actions/inaction`);
// 	}

// 	findByTitle(title){
// 		return http.get(`../actions/inaction?title=${title}`);
// 	}
}

export default new VertexDataService();




