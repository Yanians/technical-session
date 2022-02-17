
import { useState, useEffect,useCallback } from 'react';

import { useSelector } from 'react-redux';

import { dbClientUser } from '../../../dexie'

import { useHistory } from 'react-router-dom';

import Swal from 'sweetalert2';

import { Row, Cols, Card, ColItem, Collection,Space, getTimeAgoString, } from '../../wrapper';

import { MdClose } from 'react-icons/md';

const radioOptions = [
	{
	  name:'Standard Delivery (Free)',
	  type:'radio1',
	},

	{
	  name:'Fast Delivery ($2.00)',
	  type:'radio2',
	},
];

function Shipping(props){

	const purchase = useSelector((item)=>item.RegisterTable.purchase);

	const history = useHistory();

	const [state, setState ] = useState({
		  // timesince:'',
		 toggleHide:["zoomIn"],
		       edit:false,
		  submitBtn:false,
		   fullName:'',
		    address:'',
		      email:'',
		    contact:'',
		 finalTotal:0,
	   fastDelivery:0,
	});

	let { timesince, toggleHide, fullName, address,contact,email, edit, submitBtn,radioCheck,fastDelivery,finalTotal, } = state;

	// const TimeAgo=(time, callback)=>{
 //          return callback = getTimeAgoString(time);
	// };

	// useEffect(()=>{
 //     const time = Math.floor(new Date())
 //      setInterval(()=>{
 //       	    const dis = TimeAgo(time);
 //       	    setState((state)=>({...state,timesince:dis}));
 //       },
 //       	1000);
	// },[]);
	const isHippingShow=(e)=>{
		 e.preventDefault();
		 console.log('trigger from shipping.js')
		 try{
		    setState({...state,toggleHide:toggleHide.slice(1).concat(["zoomOut"])})
		      setTimeout(()=>{
		          history.push('/client-path/inbox-view/view-items'); 	
		      },400)
		 }catch(err){
			console.error('slice Error ',err.message)
		 }
	};

	const handleEdit=(e)=>{
         e.preventDefault()
         setState({...state,edit:!edit,submitBtn:true,});
         // setState({...state,submitBtn:true,})		 	
	};

	const handleFullName=(e)=>{
		   
		    setState({...state,fullName:e.target.value})
	};
	const handleAddress=(e)=>{
		
		    setState({...state,address:e.target.value})
	};
	const handleEmail=(e)=>{
		    setState({...state,email:e.target.value})
	};
	const handleContact=(e)=>{

		    setState({...state,contact:e.target.value})
	};

	const handleFinalTotal=(e)=>{
		 const value = e.target.value;
		 setState({...state,finalTotal:value});
		 console.log(value);
	};

	const handleChangeRadio=(e)=>{
		if(e.target.checked){
			 const value = parseInt(e.target.value);
			 if(value){
			 	console.log(parseInt(value));
                 setState({...state,fastDelivery:value+1});
			 }else{
			 	setState({...state,fastDelivery:value});
			 }
		}
	};


	const handleSubmit= async(e)=>{
                e.preventDefault();
              if(fullName !== '' && address !== '' && email !== '' && contact !== ''){
              	const purchase = await dbClientUser.purchase.toArray();
              	   return Swal.fire({
                      width:'90',
                      showConfirmButton:false,
                      timer:1200,
                      didOpen:(e)=>{
                         Swal.showLoading()
                      }
                   }).then(async(result)=>{
                    
                    if(result.dismiss  === Swal.DismissReason.timer){
                    	  purchase.map(item=>{
              	             if(props.invoiceId === item.id){
              	             	   dbClientUser.purchase.toArray().then((result)=>{
				                      dbClientUser.purchase.update(props.invoiceId,
				                        {...item,
				                      	amount:(item.amount - (item.amount*.30 / 100) + fastDelivery),
				                      	date:new Date().toLocaleDateString(),
				                      	time:new Date().toLocaleTimeString(),
				                      	timesince:props.timeago,
				                      	isConfirmedPurchase:true,
				                      });
				                   });   
              	             }	  
              	  })
                         Swal.fire({
                                title:'Completed',
                                icon:'success',
                                timer:1000,
                                text:'Submitted',
                                showConfirmButton:false
                          }).then((result)=>{
                                Swal.fire({title:'Purchase success!',text:'You have successfully purchase!',icon:'info',showConfirmButton:false,timer:1500})
                                setTimeout(()=>{history.push('/client-path/inbox-view')},1500)
                                  setState({
				                      	...state,
				                      	fullName:'',
				                      	address:'',
				                      	email:'',
				                      	contact:'',
				                      })	
                          })
                       }
                     })     
              	  
              }else{ 
              	Swal.fire({
              		title:'Empty field!',
              		html:'Cannot continue the process',
              		showConfirmButton:false,
              		icon:'error',
              		timer:2000,
              		didOpen:(e)=>{
              			 Swal.showLoading()
              		},
              	}).then(result=>{
              		if(result.dismiss === Swal.DismissReason.timer){
              	       setState({...state,submitBtn:!submitBtn})		 
              		}
              	})
              }
	}

	useEffect(()=>{
    
		if(fullName !== "" && address !=="" && email !=="" && contact !==""){
			setState({...state,submitBtn:true})		 
		}else{
			setState({...state,submitBtn:false,})		 
		}
	},[fullName, address, contact, email,finalTotal]);

	useEffect(()=>{
		const elem = document.getElementById('radio-options').childNodes;
              elem[1].childNodes[0].childNodes[0].checked = true; //default selected
	},[]);

	const styles = {
		radius:{
			borderRadius:10,
			WebkitBoxShadow:'0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2)',
			boxShadow:'0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2)',
		},

		absolute:{
			position:'relative',
			top:0,
			right:3,
			width:'auto',
		},

		defaultButton:{
			border:'none',
			color:'solid green',
			backgroundColor:'transparent',
			cursor:'pointer',
		},
		summary:{
			textShadow:'1px 2px 3px grey',
		}
    };

	return (
          <Row>
          	<Cols s12 className={"animate "+toggleHide}>
          		<span onClick={e=>isHippingShow(e)}><i className="material-icons small right"><MdClose className="small red-text" style={styles.hover} /></i></span>
          		<div className="card card-small grey lighten-1 col s12" style={styles.radius}>

	          		 <Cols s12 className="card" style={styles.radius} id="radio-options">
	          		   <Space />
	          		   {
                         [...radioOptions].map((item,index)=>(
                               <Cols s6 className={"center"} key={item.type}>
				      		      <label>
							        <input className={"with-gap "+index}  value={index} type="radio" name='radioName' onChange={handleChangeRadio} />
							           <span>{item.name}</span><br />
							           <span>Delivered on {new Date().toLocaleDateString()}</span>
							      </label>
							      <Space />
          		               </Cols>
                         ))
	          		   }
	          		     
	          		 </Cols>

	              <Cols s12 m7>
		          	  {
		          		purchase !== undefined ? purchase.map((user,index)=>{
		          		   if(props.invoiceId === user.id){
		          		 	 return <Cols s12 className="card-stack" key={user.id}>
		          		 	            <Space />
			          		 	        <Collection className="width-header" style={styles.radius}>
				          		 	         <ColItem className="Collection-header">
				          		 	              <b>Ship to:</b>  <div style={styles.absolute} className="right">
				          		 	                                 <button className="browser-default green-text" style={styles.defaultButton} onClick={e=>handleEdit(e)}>{edit ? 'Cancel' : 'Edit'}</button>
				          		 	                               </div>
				          		 	               {
				          		 	               	edit ? <input onChange={handleFullName} value={fullName} />
				          		 	                     : <input value={fullName = (user.firstname+ " "+user.lastname)} disabled/>
				          		 	               }      
				          		 	         </ColItem>
				          		 	         <ColItem>
				          		 	         	<b>Address:&nbsp;</b>
				          		 	         	   {
				          		 	         	   	edit ? <input onChange={handleAddress} value={address} />
				          		 	         	   	     : <input value={address = (user.address)} disabled/>
				          		 	         	   }	     
				          		 	         </ColItem>
				          		 	         <ColItem>
				          		 	         	<b>Phone:&nbsp;</b>
				          		 	         	   {
				          		 	         	   	edit ? <input onChange={handleContact} value={contact} />
				          		 	         	   	     : <input value={contact = (user.contact)} disabled/>
				          		 	         	   }
				          		 	         </ColItem>
				          		 	         <ColItem>
				          		 	         	<b>Email:&nbsp;</b>
				          		 	         	   {
				          		 	         		edit ? <input onChange={handleEmail} value={email} />
				          		 	         		     : <input value={email = (user.email)} disabled/>
				          		 	         	   }     
				          		 	         </ColItem>
			          		 	         </Collection>
		          		 	        </Cols>
		          		   }       
		          		  }) : null
	          		  }
	          	  </Cols>

	          	  <Cols s12 m5>
	          	    <h5 className="center white-text" style={styles.summary}>Order Summary</h5>
	          	    
                        <table className="striped">
                        	<tbody>
                    			{
                    		      purchase !== undefined ? purchase.map((item,index)=>{
                    		      	  if(props.invoiceId === item.id){
                    		      	   return <tr key={item.id}>
                    		      	              <td>
                        		      	   	         <b className="left">subTotal: &nbsp;</b>$ 
                        		      	   	          {item.amount + (fastDelivery)}
                        		      	   	      </td>  
                    		      	          </tr>
                    		      	  }        
                    		      }) : null		
                    			}

                    			<tr>
    		      	              <td>
        		      	   	         <b className="center">Membership Discount:&nbsp; <i className="red-text" style={styles.fontsize}>30%</i></b> 
        		      	   	      </td>  
    		      	            </tr>
    		      	            
                        		<tr>
                        		  <td>
        		      	   	         <b className="left">Shipping:</b>&nbsp; {fastDelivery !== 0 ? `$2.00` : `Free`}       		      	   	          {/*<h6 className="red-txt">Free</h6>*/}
        		      	   	      </td>  
                        		</tr>
                        		{
                    		      purchase !== undefined ? purchase.map((item,index)=>{
                    		      	if(props.invoiceId === item.id){
                    		      	   return <tr>
                    		      	              <td>
                        		      	   	         <b className="center">Total:&nbsp; </b> $
                        		      	   	          {item.amount - ((item.amount*.30) / 100) + fastDelivery}
                        		      	   	      </td>  
                    		      	          </tr>
                    		      	 }
                    		      }) : null
                    			}		
                        	</tbody>
                        </table>
	          	  </Cols>
	          	  <Cols s12 className="right">
	          	    <Cols s4></Cols>
	          	    <Cols s8 className="center">
                      {
                      	submitBtn ? <button onClick={e=>handleSubmit(e)} className="btn btn-small cyan">submit</button>
                      	          : <button className="btn btn-small cyan" disabled>submit</button>
                      } 	 
                    </Cols>           
                    <Space />
	          	  </Cols>
	          </div>

             

          	</Cols>
          </Row>
		)
  }

export default Shipping;