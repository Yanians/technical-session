import *as Actiontypes from './actionTypes';

export const CustomerReducer =(state = [], action)=>{
       
       const { type, fromdb, } = action;

         switch(type){

         	  case Actiontypes.GET_ALL:{
                   return [
                    ...state,
                    { fromdb }
                  ]
              };
            
              case Actiontypes.UPDATE_CUSTOMER:{                  
                      state.map(item=>{
                          if(item.id === state.id){
                              return{
                                 ...state,
                                 ...fromdb,
                              }
                          }else{
                           return state;
                          }
                      })
              }
              break;     

         	  default:{
               return state
             }  
         }
}

export const UpdateTableRowContent = (state=[], action)=>{

      const { type, values } = action;
        switch(type){
             case Actiontypes.UPDATE_CUSTOMER:{
                 return [
                 ...state,
                   {values}
                 ]
               break;  
             }                
             default:{return state}
        }
}