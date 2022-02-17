
import React from 'react';

import { useHistory } from 'react-router';

import { useSelector } from 'react-redux';

import { Card, Cols, UserLink, Space, } from '../../wrapper';

   function Purchasedhistory(props){

   const history = useHistory();

   const { userId } = props;

   const { password, } = userId;

   const purchase = useSelector(state=>state.RegisterTable.purchase)

   const handleRefId=(e)=>{
    const input = e.nativeEvent.path[1]
    const dis = input.childNodes[1];
    const parse = parseInt(dis.value);
      props.refId(parse);   
      history.push('/client-path/inbox-view/view-items');
   }
       
   const dis = purchase ? purchase.map((item,index)=>{
                   
   	try{
	    if(password === item.password){
	          const content = item.devices;
	            let container = [];
	            let total = 0;
	            let qty = 0;
	               content.map((i)=>{
                total += parseInt(i.totalAmount);      
                qty  += i.quantity;

   			  container = <Cols s12 m6 l12 key={index}>

			                   <div className="hide-on-med-and-down">
			                           <Card className="card card-small horizontal" style={{width:'100%'}}>
			                             <div className="card-stacked cyan darken-2">
			                                   <div className="card-content cyan darken-1">
			                                   <div className="card-title center">
			                                       <p style={{marginTop:'-10px',width:'100%'}} className="teal-text darken-4"><b>Card Details</b></p>
			                                   </div>
					                                  <h6 style={{fontSize:'12px'}} className="white-text left">Date: {item.date}&nbsp;at: {item.time}</h6>
					                                  <h6 style={{fontSize:'12px'}} className="white-text left">{item.cardname}</h6>
					                                  <h6 style={{fontSize:'12px'}} className="white-text left">{item.creditcard}</h6>
					                                  <h6 style={{fontSize:'12px'}} className="white-text left">expiration:{item.expiration}</h6>
					                           </div>       
			                             </div>
			                             <div className="card-stack cyan">
			                                <Cols s12>
			                                    <h6 className="white-text center">Total Amount: {/*&#x20b1;*/}$ {item.amount}</h6>
			                                    <h6 className="white-text center"><b>Qty:</b>{qty}</h6>
			                                    <h6 className="white-text center">
			                                       <b>Status:</b>
			                                       {item.isConfirmedPurchase ? 
			                                       	  <span className="badge new yellow darken-4">scheduled</span>
			                                       	 :<span className="badge new red darken-2">pending...</span>
			                                       }	 
			                                    </h6>
			                                </Cols>

			                                <Cols s12>
			                                  <Cols s5>
			                                    	<div className="white-text" style={{textShadow:'1px 2px 3px red',letterSpacing:'1px'}}>Invoice from:</div>
			                                  </Cols>
			                                  <Cols s7>
			                                       	<div className="grey-text left text-lighten-4" style={{textShadow:'1px 1px 2px grey',letterSpacing:'.1rem'}}>1147 Rohan Drive Suite 819 - Burlington, VT / 82021 Paseo De Roxas Makati City</div>
			                                  </Cols>
			                                </Cols>
                                             <Space />
			                                <Cols s12>
			                                  <Cols s5>
			                                    	<div className="white-text" style={{textShadow:'1px 2px 3px red',letterSpacing:'1px'}}>Invoice To:</div>
			                                  </Cols>
			                                  <Cols s7>
			                                       	<div className="grey-text left text-lighten-4" style={{textShadow:'1px 1px 2px grey',letterSpacing:'.1rem'}}>
			                                       	  {item.address} phone: {item.contact}
			                                       	</div>
			                                  </Cols>
			                                </Cols>
			                                
			                             </div>
			                             <div className="card-stacked cyan lighten-1">
				                             <div className="card-action center">
				                               <h6 className="white-text">{i.name}</h6>
				                               <input type="hidden" value={item.id} className="ref-id" />
				                                 <span style={{cursor:'pointer'}} className="new badge " onClick={e=>handleRefId(e)}>check </span>
				                             </div>
					                      </div>          
			                           </Card>
			                   </div>

			                    
	                           <div className="hide-on-large-only">
		                           <Card className="card card-small">
		                             <div className="card-content cyan darken-2">
		                                <p className="card-title grey-text center darken-1"><b>Card Details</b></p>
		                             </div>
		                             <div className="card-content cyan center">
		                                  <h6 style={{fontSize:'13px'}} className="white-text">Date: {item.date}&nbsp;at: {item.time}</h6>
		                                  <h6 style={{fontSize:'13px'}} className="white-text">{item.cardname}</h6>
		                                  <h6 style={{fontSize:'13px'}} className="white-text">{item.creditcard}</h6>
		                                  <h6 style={{fontSize:'13px'}} className="white-text">expiration:{item.expiration}</h6>
		                                  <h5 className="white-text">Total Amount: &#x20b1; {total}</h5>
		                                  <h6 className="white-text">{i.name}</h6>
		                                  <h5 className="white-text"><b>Qty:</b>{qty}</h5>
		                                    <b>Status:</b>
			                                       {item.isConfirmedPurchase ? 
			                                       	  <span className="badge new yellow darken-4">scheduled</span>
			                                       	 :<span className="badge new red darken-2">pending...</span>
			                                       }	
		                             </div>
		                             <div className="card-stacked cyan lighten-1">
			                             <div className="card-action center">
			                               <div></div>
			                               <input type="hidden" value={item.id} className="ref-id" />
			                                <UserLink className="red-text" onClick={e=>handleRefId(e)} name="view this"/>
			                             </div>
				                      </div>          
		                           </Card>
	                           </div>    

					        </Cols>
     	                })
     	               return container;
     	   }
     	  }catch(err){
   	        console.error('encounterred error parsing due to refreshing page (redux side)  ',err);
          } 
          // return item;
       }) : null;
return dis
};

export { Purchasedhistory };