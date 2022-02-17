
import * as actionTypes from './actionTypes';

import { initialState } from '../data';

export const Storage = (state = [], action)=>{

     const { type, items, newUpdatedData, payload } = action;

      switch(type){ 
        
        case actionTypes.LOAD:{
              return [...payload]
        }

        case actionTypes.CREATE:{
              return [...state,items]; 
        }
        case actionTypes.DELETE:{
              return state.filter(({ id })=> id !== items.id);
        }

        case actionTypes.UPDATE:{
               return state.map((item)=> {
                  if(newUpdatedData.id === item.id){   
                    return {
                          ...item,
                             ...newUpdatedData,
                       }
                  }else{
                     return item;
                  };
              })
        }

        default:return state;
      }
}
