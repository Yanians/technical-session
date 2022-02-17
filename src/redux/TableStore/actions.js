

import * as Actiontypes from './actionTypes';

export function Increase(id, price){
       return {
          type:Actiontypes.INCREASE_COUNT,
         items:{id, price},
      }
}

export function decrease(id, price){
     return{
        type:Actiontypes.DECREASE_COUNT,
       items:{id, price},
     }
}

export function insertItems(data){
	const { title, price, desc, image } = data;
  let count = 1;
	  return {
	      type:Actiontypes.INSERT_TO_FILE,
	  	 items:{count, title, price, desc, image },
        orig:{price, count}
	  }
}

export function deleteItem(id){
   console.log(id);         
    return {
        type:Actiontypes.DELETE_ITEM,
       items:{id},
    }         
}

export function deleteAll(){         
            return {
                type:Actiontypes.DELETE_ALL,
               items:{},
            }         
}

export const RegisteredInfo = objects => async dispatch =>{
        const { users, purchase, post, jsonpost, comments, reply,issue,messageCount, } = objects;
    try{
        dispatch({
          type:Actiontypes.REGISTER_SAVE,
         users,
         purchase,
         post,
         jsonpost,
         comments,
         reply,
         issue,
         messageCount,
        })
    }catch(error){
      console.error('problem occured in dispatch logic: ',error)
      console.error(error.message)
    }
}

export const MessageCount = (count) => async(dispatch)=>{
   console.log(count);
    try{
        dispatch({
          type:Actiontypes.MESSAGE_COUNT,
           count,
        })
    }catch(error){
      console.error('problem occured in dispatch logic: (MessageCount) ',error)
      console.error(error.message)
    }
}












