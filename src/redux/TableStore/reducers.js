import * as Actiontypes from './actionTypes';

import { cctv, xpass, cardscanner, turnstyle, biometrics } from '../../components/servicedata';

let id = 0;
let Id = 0;

export const TableStore = ( state = [], action) =>{
     const { type, items } = action;

    switch(type) {
    	case Actiontypes.INSERT_TO_FILE:{
           return [
           ...state,
             {
                id:++id,
                items,
             }
          ] 
    }

  case Actiontypes.INCREASE_COUNT:{
           state.map((item)=>{
              if(item.id === items.id){
                 return { 
                  ...state,
                    count:item.items.count++,
                     price:item.items.price >= 0 ? item.items.price = (item.items.count*(parseInt(items.price))) : item.items.price <= 0 ? item.items.price = 0.00 : item.items.price = 0,
                 }
              }else{
                return item;
              }
         });
           return [...state]
  }

  case Actiontypes.DECREASE_COUNT:{
         state.map((item)=>{
             if(item.id === items.id){
              return {
                ...state,
                count:item.items.count--,
                price:item.items.price?item.items.price = (item.items.price-items.price) : item.items.price === 0 || isNaN(item.items.price) ? item.items.price = 0 : null,
              }
            }else{
              return state;
            }  
        });       

         return [...state,]

  }

   case Actiontypes.DELETE_ITEM:{
         return state.filter(({id})=> id !== items.id)
   }

   case Actiontypes.DELETE_ALL:{
         return [];
   }

    default:
    return state;	
  }  
}

export const Record = (state = [], action)=>{
      const { type, orig } = action;

      switch(type){

         case Actiontypes.INSERT_TO_FILE:{
                return [
                  ...state,
                 { 
                  id:++Id,
                  price:orig.price,
                  count:orig.count
                 } 
              ]
         }

         case Actiontypes.DELETE_ITEM:{
             return state.filter(({id})=> id !== state.id)
        }

         case Actiontypes.DELETE_ALL:{
                return [];
         }

         default:return state;
      }
}

const timeAgo = 0

export const RegisterTable = (state = [], action)=>{
  const { type, users, purchase, post, jsonpost, comments, reply, issue, messageCount,count} = action;
                 
            switch(type){
              case Actiontypes.REGISTER_SAVE:{
            
              return {
                   users,
                   purchase,
                   post,
                   jsonpost,
                   reply,
                   comments,
                   issue,
                   messageCount,
                }
            }

             case Actiontypes.MESSAGE_COUNT:{
                  return {
                    ...state,
                    messageCount:count,
                  }
             } 

              default:return state;
            }
}

export const Biometrics = (state = biometrics.bio, action)=>{
  const { type, items } = action;
            switch(type){
              case Actiontypes.BIOMETRICS:{
                return[
                   items,
                ]
              }
              default:return state;
            }
}

export const Cctv = (state = cctv, action)=>{
  const { type, items } = action;
            switch(type){
              case Actiontypes.CCTV:{
                return[
                   items,
                ]
              }
              default:return state;
            }
}

export const Turnstyles = (state = turnstyle, action)=>{
  const { type, items } = action;
            switch(type){
              case Actiontypes.TURNSTYLES:{
                return[
                   items,
                ]
              }
              default:return state;
            }
}

export const Cardscanners = (state = cardscanner, action)=>{
  const { type, items } = action;
            switch(type){
              case Actiontypes.CARD_SCANNERS:{
                return[
                   items,
                ]
              }
              default:return state;
            }
}

export const Xpass = (state = xpass, action)=>{
  const { type, items } = action;
            switch(type){
              case Actiontypes.XPASS:{
                return[
                   items,
                ]
              }
              default:return state;
            }
}



