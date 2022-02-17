import React from 'react';

import { useSelector } from 'react-redux';

import store from '../../../redux/store';

import { MdSend } from 'react-icons/md';

import { TiShoppingCart } from 'react-icons/ti';

import { PaymentForm } from './paymentform';

import { Row, Cols } from '../../wrapper';

import { L } from './view-inbox';

import { useHistory } from 'react-router-dom';

import { MdDeleteForever } from 'react-icons/md'

import * as action from '../../../redux';

export function ItemStore(prop){
     
     const fromrecord = useSelector((state)=>state.Record);
     
     const items = useSelector((state)=>state.TableStore);

     const [payment, setPayment] = React.useState(false);

     const history = useHistory();

   /********************* total price *****************************/  
     let total = 0;
     let count = 0;
     items.map((item)=>{
               total += parseInt(item.items.price); /*counts the total price*/
               count += parseInt(item.items.count);
        return total;
     });

/********************* increase count *****************************/  

     const increaseItem=(e)=>{
     const id = parseInt(e.target.value);
       fromrecord.map((record)=>{
          if(id === record.id){
            const price = record.price;
              store.dispatch(action.Increase(id, price)); 
          }
          // return record;
       });
     }
/********************* decrease count *****************************/  
     const decreaseItem=(e)=>{
     const id = parseInt(e.target.value);
            fromrecord.map((record)=>{
             if(id === record.id){
               const price = record.price;
               store.dispatch(action.decrease(id, price))       
             }
             // return record;
           });
     }

     const deleteItems=(e)=>{
        e.preventDefault();
       let refId = parseInt(e.target.value);
       console.log(refId)
       store.dispatch(action.deleteItem(refId));
     }

     const payments=()=>{
         setPayment(true);
     }

     const Closeform=(e)=>{
        setPayment(e);
     }

let content = <h3> You have no order: </h3>     

const table = items?items.map((i,index)=>{           

     content = <div><h3>Your Purchased:</h3>
                 <span>{total === 0 ? null : <b>Total Amount: </b>} &#x20b1; {total}</span><p></p>
                 <span><b>Total Device{count > 1 ? "s" : null}</b>: {count}</span>
               </div> 

            return(
              <React.Fragment key={index}>
                <tr>
                  <td><img alt="undefined" width="50" height="50" src={i.items.image} /></td>
                  <td>{i.items.title}</td>
                  <td>{fromrecord.map(item=>item.id === i.id ? item.price : null)}</td>
                  <td>
                     {i.items.count === 0 ? <button disabled value={i.id} onClick={(e)=>decreaseItem(e)} className="btn btn-small waves-effect waves-light waves-ripple btn-small cyan darken-4 minus">-</button>
                      : <button value={i.id} onClick={(e)=>decreaseItem(e)} className="btn btn-small waves-effect waves-light waves-ripple btn-small cyan darken-4 minus">-</button> }
                        <strong style={{cursor:'default'}} className="btn white black-text btnValue">{i.items.count}</strong>  
                     <button value={i.id} onClick={(e)=>increaseItem(e)} className="btn btn-small waves-effect waves-light waves-ripple btn-small cyan darken-4 add">+</button>
                  </td>
                  <td>&#x20b1; {i.items.price}</td>
                  <td><button onClick={(e)=>deleteItems(e)} value={i.id} className="btn btn-small red darken-1 ">remove</button></td>
                </tr>
              </React.Fragment>  
            )  
   }):null;

return (
        <>
          {content}
       <Row>
         <Cols s12 style={{overflowX:'auto',width:'100%'}}>
          <div className={payment ? 'showPayment' : 'defaultHidepaymentForm'}>
             <PaymentForm purchaseInfo={prop.purchaseInfo} price={total} action={(e)=>Closeform(e)} />
          </div>
          <table className="centered striped table-purchased">
                <thead>
               {total === 0 ? null : <tr>
                      <th>Item</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th>Total</th>
                      <th>Remove</th>
                  </tr>
                }  
                </thead>
              <tbody>
               {table}
               <tr>
               <td><button className="btn btn-small white-text" onClick={()=>history.push(`/client-path`)}>Add To Cart</button></td>
               <td></td>
               <td>{total === 0 ? null :<b> Total Price: </b>}</td>
               <td></td>
               <td>{total === 0 ? null :''} &#x20b1; {total}</td>
               <td>{total === 0 ? null : <a onClick={(e)=>payments(e)} href="#!" className="waves-effect waves-light btn btn-small white-text">payment<i className="material-icons right"><MdSend className="red-text tiny" /></i></a>}</td>
                </tr>
              </tbody>
          </table>
          <div style={{position:'absolute',top:90,left:200}}>{total === 0 ? <TiShoppingCart className="pink-text animated fadeInLeft large" /> :''}</div>
         </Cols></Row>  
         </> 
     )
  }