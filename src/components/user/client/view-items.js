
import { useState, useEffect, Fragment } from 'react';

import { useSelector } from 'react-redux';

import { useRouteMatch, useHistory } from 'react-router';

import { Switch, Route, } from 'react-router-dom';

import { L } from './view-inbox';

import { FaShippingFast } from 'react-icons/fa';

import { Row, Cols, Center, Img } from '../../wrapper';

import Shipping from './shipping';

function ViewItems(props){

	const purchase = useSelector((state)=> state.RegisterTable.purchase)

	const { url, path } = useRouteMatch();

	const keySwitch = props.purchaseId === 0 ? props.purchaseRef : props.purchaseId;

	return (
         <Row>
          <Switch>
          	<Route exact path={`${path}`}>
          	   <Cols s12 style={{overflow:'auto'}}>
         	  <Center>
	         	  <Cols s12>
	         	   <div className="collection-header">
	         	     <span className="card-title">View Item Purchased:</span>
	         	   </div>
	         	  </Cols>	
         	  </Center>
         	  <table className="centered striped">
	         	  <thead>
	         	  <tr>
	         	    <th>Image</th> 
	         	    <th>Name</th>
	         	    <th>Qty</th>
	         	    <th>Unit price</th>
	         	    <th>Amount</th>
	         	    <th>Date</th>
	         	    <th>Time</th>
	         	 </tr>   
	         	  </thead>  
         	  { purchase !== undefined ? purchase.map((item,index)=>{
                  if(keySwitch === item.id){
                  	const dis = [item.amount]
		         	return <Fragment key={item.id}>
		         	        <tbody>
		         	        { item.devices.map(items=>{
			         	      return<tr key={item.id}>
			         	              <td><Img className="img" src={items.image} w="30" h="30" /></td>
			         	              <td>{items.name}</td>
				         	   	      <td>{items.quantity}</td>
				         	   	      <td>{items.unitPrice}</td>
				         	   	      <td>{items.totalAmount}</td>
				         	   	      <td>{item.date}</td>
				         	   	      <td>{item.time}</td>
				         	   	    </tr>
			         	   	    })
			         	   	 }
			         	   	 <tr>
			         	   	 	<td><L to='/client-path/purchase-history'><span className="new badge">Invoice</span></L></td>
			         	   	 	<td><b>Total Price: $</b>{item.amount}</td>
			         	   	 	<td></td>
			         	   	 	<td></td>
			         	   	 	<td></td>
			         	   	 	<td>
			         	   	 	{ item.isConfirmedPurchase
			         	   	 	  ?	<span className="badge new yellow darken-4">scheduled</span>
			         	   	 	  :<L to={`${url}/shipping`}><i  className="material-icons"><FaShippingFast style={{position:'relative',top:10,right:10}} className="small fadeInLeft" /></i><span className="new badge cyan">Shipping</span></L>
			         	   	 	}
			         	   	 	</td>
			         	   	 </tr>      
			         	   	 <tr>
			         	   	 </tr> 
			         	   	  </tbody>
			         	   </Fragment>
			       }   	   
			    }) : null}
			   </table>          	   
         	</Cols>
          	</Route>

          	<Route path={`${path}/shipping`}>
                  <Shipping timeago={props.timeago} userPassword={props.password} invoiceId={keySwitch} />
          	</Route>
          </Switch>
         	
         </Row>

	)
}

export default ViewItems;
 