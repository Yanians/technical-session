
import PropTypes from 'prop-types';

import { useState, useEffect, Fragment } from 'react';

import { Switch, Route, } from 'react-router';

import { useRouteMatch } from 'react-router-dom';

import Swal from 'sweetalert2';

import ViewItems from './view-items';

import *as actionTypes from '../../../redux';

import { useSelector, connect } from 'react-redux';

import { dbClientUser, } from '../../../dexie';

import { Link } from 'react-router-dom';

import M from 'materialize-css';

import { useLiveQuery as Live } from 'dexie-react-hooks';

import { Img,Row, Cols, Collection, getTimeAgoString, ColItem, } from '../../wrapper';

const styles={

	 parent:{
	 	display:'flex',
	 	width:'100%',
	 	flexDirection:'row',
	 },
	 child:{
       alignSelf:'center',
       width:'100%',
	 },
	 receipt:{
	 	width:'100%',
	 	justifyContent:'center',
	 	alignItems:'center',
	 },
	 spanButton:{
	 	cursor:'pointer',
	 },
};

const Grid = ({image,description,quantity,unitPrice,totalAmount,date,time})=>{
           
  return <div style={styles.parent}>
  	           <div style={styles.child}>
  	              <Img src={image} w="30" h="30" alt={description}/>
  	           </div>
  	           <div style={styles.child}>
  	              {quantity}
  	           </div>
  	           <div style={styles.child}>
  	              {unitPrice}
  	           </div>
  	           <div style={styles.child}>
  	              {totalAmount}
  	           </div>
         </div>
}

const Header = ()=>{
return <ColItem style={styles.parent}>
          <div style={styles.parent}><b>Items</b></div>
          <div style={styles.parent}><b>Qty</b></div>
          <div style={styles.parent}><b>unit Price</b></div>
          <div style={styles.parent}><b>sub Total</b></div>
       </ColItem>
}

Grid.propTypes ={
image:PropTypes.oneOf(['',{},0,Number]),
dscription:PropTypes.oneOf(['',{},0,Number]),
quantity:PropTypes.oneOf(['',{},0,Number]),
unitPrice:PropTypes.oneOf(['',{},0,Number]),
totalAmount:PropTypes.oneOf(['',{},0,Number]),
date:PropTypes.oneOf(['',{},0,Number]),
time:PropTypes.oneOf(['',{},0,Number]),
};

export const L = ({children, to, style, onClick,value})=>{
 return <Link className="comment-ref" to={to} style={style} onClick={onClick} value={value}>
           {children}
        </Link>
}

L.propTypes = {
	children:PropTypes.node.isRequired,
	to:PropTypes.string,
	style:PropTypes.object,
  value:PropTypes.number,
	onClick:PropTypes.func,
};

function ViewInbox(props){

const comments = useSelector(state=>state.RegisterTable.comments);

const purchase = useSelector(state=>state.RegisterTable.purchase);

const { url, path, } = useRouteMatch();

const { password } = props.user;

const [state, setState ] = useState({
	      loading:false,
	         post:[],
	 userIdentity:'',
	purchaseRefId:0,
	   idPurchase:0,
	  purchaseRef:0,
	      seconds:0,
	      minutes:0,
	        hours:0,
	    timesince:props.timeago,
});

   const { timesince, post, userIdentity, purchaseRefId,idPurchase,purchaseRef,seconds,minutes,hours } = state;
   
// const TimeAgo=(timer,callback)=>{
//       return callback = getTimeAgoString(timer)
// }

// useEffect(()=>{
//   const time = Math.floor(new Date());
//       setInterval(()=>{3
//           const timer = TimeAgo(time);
//             setState((state)=>({
//               ...state,
//               timesince:timer,
//             }))
//   },1000)
// },[]);            

   const forwwardRefFromComments= async e =>{
   	      const inputRef = e.nativeEvent.path[3].firstElementChild;
   	      const value = parseInt(inputRef.value);
   	        await dbClientUser.temporarysave.toArray().then((result)=>{
   	        	    result.map(item=>{
   	        	       dbClientUser.temporarysave.update(item.refId, {refId:value}); 	
   	        	    });
   	        })
   }

   const handlePurchaseId= async e =>{
   	 const inputRef = e.nativeEvent.path[3].firstElementChild;
   	      const value = parseInt(inputRef.value);
   	    setState({...state,purchaseRefId:value,});
   }

   const onClickHandler=(e)=>{
   	  const targetSpan = document.querySelectorAll('.show-confirmed-purchased');

   	  const refId = document.querySelectorAll('.purchase-ref'); 

   	  const showToggle = document.querySelectorAll('.display-none'); 

      targetSpan.forEach((el,i)=>{
          el.addEventListener('click',es=>{
          	 es.stopPropagation();
          	 const els = targetSpan[i];

          	 if(els.textContent === 'show receipt...'){
          	 	 els.textContent = 'hide receipt...';
          	 	 els.className = 'badge new red lighten-3 right white-text show-confirmed-purchased'
          	 	 showToggle[i].className="display-block"
          	 	 const id = parseInt(refId[i].value)
          	 	 setState({...state,idPurchase:id});
          	 }else if(els.textContent === 'hide receipt...'){
          	 	 els.textContent = 'show receipt...';
          	 	 els.className = 'badge new green lighten-3 right white-text show-confirmed-purchased'
          	 	 showToggle[i].className="display-none"
          	 	 const id = parseInt(refId[i].value)
          	 	 setState({...state,idPurchase:id});
          	 }
          })
      })
   }

   useEffect(()=>{
    onClickHandler()
     const countElem = document.querySelector('.inbox-view');
           const Elem =  countElem?countElem.childNodes.length:null;
             const dis = document.createElement('tr')
             const span = document.createElement('span')
                   span.className="badge new green lighten-3"
                   span.textContent="no messages"
                   dis.appendChild(span)
              setTimeout(()=>{
                   if(Elem === 0){
	            	 countElem.appendChild(dis);
	            	 M.toast({
	            	 	 html:'You can buy on the store or create a comments',
	            	 	 classes:'rounded',
	            	 	})
	            }
              },500)     
	            
   },[]);

      	 return (
   	 	   <Switch>
   	 	   	  <Route exact path={`${path}`}>
                  <Row>
	 	     <Cols s12>
			  <table className="striped table-inbox" >
		        <thead>
		          <tr>
		              <th>Messages:</th>
		          </tr>
		        </thead>

		        <tbody className="inbox-view">
{/********************************************************************* COMMENTS SECTION ***************************************************************************/}		        
		          {
		            comments !== undefined ? comments.map((comment)=>{
		            	if(password === comment.password){
          	             return <tr key={comment.id}>
		                           <td>
				                     you write a comment on 
				                     <input type="hidden" value={comment.refId} className="comments-ref" />
				                      <span>
				                         <L to={`blog-review/gototopic`} onClick={e=>forwwardRefFromComments(e)}><strong>&nbsp;{comment.userIdentityFirstName+" "+comment.userIdentityLastName+"'s"}</strong></L>
				                      </span> blog
				                   </td>
			                     </tr> 
				        }
                }) : null
              } 

{/*************************************************************************** USERS PURCHASE **********************************************************************/}
              {
	            purchase !== undefined ? purchase.map((payment)=>{
	            	if(password === payment.password){
	            		let total = 0,partialTotal = 0;
	            		payment.devices.map(item=>{
                          total += parseInt(item.quantity)
                          partialTotal += parseInt(item.totalAmount)
                        })
	          return <tr key={payment.id}>
                       <td>
                          <input type="hidden" value={payment.id} className="purchase-ref" />

	                   { payment.isConfirmedPurchase ?
	                      	 <div>
	                      	  purchased completed {payment.date} <i className="red-text">{timesince}</i>
	                            <span onClick={onClickHandler} style={styles.spanButton} className="badge new green lighten-3 right white-text show-confirmed-purchased">show receipt...</span>
{/**************************************************************** SHOW RECEIPT ****************************************************************************/}
	                             <div className="display-none">
							 		 <Collection className="with-header">
	                                    <li className="collection-header">
	                                      <div style={styles.parent}>
	                                      	<div style={styles.receipt}><h4><strong>RECEIPT</strong></h4></div>	
	                                      </div>
	                                      <div style={styles.parent}>
	                                          <div style={styles.child}><strong>Date:&nbsp;</strong>{payment.date}</div>	
	                                           <div style={styles.child}><strong>time:&nbsp;</strong>{payment.time}</div>
	                                      </div>
	                                    <p>Hi Good day <strong><i>{`${payment.firstname} ${payment.lastname}`}! </i></strong> We are thankful for your purchase online!.. we would like to
	                                    inform you, Our delivery will arrived on the specified date {payment.date} at {payment.time}. if you have any complains regarding our services
	                                    feel free to report an issue! HAVE A GOOD DAY AHEAD..</p>
	                                    </li>
	                                    <Header />
								                 {
                                  	               payment.devices.map((item,index)=>{
                                  	                 if(idPurchase === payment.id){
                                  	             	  return <ColItem key={index}> 
	                                  	             	        <Grid
	                                  	             	          image={item.image}
	                                  	             	          description={item.name}
	                                  	             	          quantity={item.quantity}
	                                  	             	          unitPrice={item.quantity === 0 ? 0 : item.unitPrice}
	                                  	             	          totalAmount={item.totalAmount}
	                                  	             	         />
                                  	             	        </ColItem> 
                                  	             	   }     
                                  	                })
	                                              }
								                    <ColItem style={styles.parent}>
										                <div style={styles.parent}></div>
										                <div style={styles.parent}><b>{total}</b></div>
										                <div style={styles.parent}><b>${partialTotal} - 30%</b></div>
										                <div style={styles.parent}><b>Total:&nbsp;${payment.amount}</b></div>
								                     </ColItem>
			                         </Collection>
	                             </div>
	                         </div>
	                       : <span>
	                           pending purchase
		                         <L to={`${url}/view-items`} onClick={e=>handlePurchaseId(e)}>
		                              <strong>&nbsp;{total} piece{total === 1 ? " ":"s"} of device{total === 1 ? " ":"s"} on</strong>
		                         </L>
	                          </span>
	                      }
	                   </td>
                       </tr>
			           }            
			        }) : null
				 }
{/*************************************************************************************************************************************************/}				 
		        </tbody>
		      </table>
		    </Cols>
		 </Row>  
   	 	   	</Route>
   	 	   	<Route path={`${path}/view-items`}>
   	 	   	     <ViewItems timeago={props.timeago} purchaseRef={props.purchaseRef} password={password} purchaseId={purchaseRefId}/>
   	 	   	</Route>
   	 	   </Switch>
	 	    
	 	)
	}

export default ViewInbox;
