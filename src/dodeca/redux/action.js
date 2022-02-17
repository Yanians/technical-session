
import *as actionTypes from './actionTypes';

export function LoadItem(payload) {
        try{
           return{
               type:actionTypes.LOAD,
               payload,
           }
        }catch(err){
            console.error(err);
        }
};

export const CreateItem = (items) => async dispatch => {
    try{
        dispatch({
            type:actionTypes.CREATE,
               items,
        });
    }catch(err){
        console.error("ERROR",err)
    }
}

export const UpdateItem = newUpdatedData => async dispatch => {
    try{
        dispatch({
            type:actionTypes.UPDATE,
            newUpdatedData,
        });
    }catch(err){
        console.error("ERROR",err)
    }
}

export const DeleteItem = (id) => async dispatch => {
    try{
        dispatch({
            type:actionTypes.DELETE,
            items:{id},
        });
    }catch(err){
        console.error("ERROR",err)
    }
}

      
