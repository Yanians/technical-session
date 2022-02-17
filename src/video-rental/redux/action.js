
import { CustomerDataService } from '../httpservice';

import *as actiontypes from './index';

export const GetAll = () => async dispatch => {
         
		try{
			  const res = await CustomerDataService.getAll();
	           // dispatch({
	           // 	type:actiontypes.GET_ALL,
	           // 	fromdb:[res.data],
	           // })
	           return Promise.resolve(res.data);
			}catch(err){
		       return Promise.reject(err);
			}
 };

 export const Create = data => async dispatch => {

       try{
       	    const req = await CustomerDataService.create(data);
       	 return Promise.resolve(req);   
       }catch(err){
       	  return Promise.reject(err.message);
       }
 };

 export const GetDetail = id => async dispatch => {
     try{
       	  const req = await CustomerDataService.getDetail(id);
       	  console.log(req);
          dispatch({
         	type:actiontypes.GET_DETAIL,
         	details:[req.data],
          })
         return Promise.resolve(req);
        }catch(err){
       	  console.error("Error request ",err.message)
       	  return Promise.reject(err.stack);
        };
 };

export const Update = (id, data) => async dispatch => {

	  try{
		  	 const request = CustomerDataService.update(id, data);
		  	 dispatch({
		  	 	type:actiontypes.UPDATE_CUSTOMER,
		        data,
		  	 });
		  	 
		  	 return Promise.resolve(request.data);
		  }catch(err){
		  	  return Promise.reject(err.stack);
		  }
};

export const Delete = id => async dispatch => {
    
    try{
    	 const req = CustomerDataService.delete(id);
    	     dispatch({
    	     	type:actiontypes.DELETE_CUSTOMER,
    	     	id,
    	     });
    	     
    }catch(err){
    	return Promise.reject(err.message)
    }
}