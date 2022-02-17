
import React from 'react';

import { useHistory } from 'react-router';

import { useSelector } from 'react-redux';

import store from '../../../redux/store';

import *as action from '../../../redux';

import { Inputfield, Textfield, Emailfield, Row, Cols,Numberfield } from '../../';

import { MdClose, MdSend } from 'react-icons/md';

import Swal from 'sweetalert2';

import { dbClientUser } from '../../../dexie';

export function PaymentForm(prop){

  const { firstname, lastname, address, contact, email, password, } = prop.purchaseInfo;

  const fullname = firstname+" "+lastname;

  const amount = prop.price;

  const history = useHistory();

  const [ closed, setClosed ] = React.useState(false);

  const [Firstname, setFirstname ] = React.useState(firstname);

  const [Lastname, setLastname ] = React.useState(lastname);

  const [Address, setAddress ] = React.useState(address);

  const [Contact, setContact ] = React.useState(contact);

  const [Email, setEmail ] = React.useState(email);

  const [ creditCard, setCreditCard ] = React.useState("");

  const [cardName, setCardName ] = React.useState(fullname);

  const [expiration, setEx ] = React.useState("");

  const [cvv, setCvv ] = React.useState("");

  const today = new Date().toLocaleDateString();

  const times = new Date().toLocaleTimeString();

  const priceRecord = useSelector(state=>state.Record)

  const itemPurchased = useSelector((dis)=>{

      const items = dis.TableStore;

      const all = items.map((state,index)=>{

              return {
                name:state.items.title,
                unitPrice:priceRecord[index].price,
                quantity:state.items.count,
                image:state.items.image,
                totalAmount:state.items.price,
              }              
      });
      return all;
  });	

	 const Closed=()=>{
	   	setClosed(true);
	   	setTimeout(()=>{
	   	  setClosed(false);
	   	  prop.action(false);	  
	   	},400)
	 };

     const handleCreditcard=(value)=>{
      const input = value;
        if(input.length > 16){
           return null;
        }else{
          setCreditCard(input);  	
        };
     };

     const handleFirstName=(e)=>{
          setFirstname(e);
     };

     const handleLastName=(e)=>{
          setLastname(e);
     };

     const handleEmail=(e)=>{
          setEmail(e);
     };

     const handleContact=(e)=>{
     	const input = e;
        if(input.length > 11){
           return null;
        }else{
          setContact(e);
        };
          
     };

     const handleAddress=(e)=>{
          setAddress(e);
     };

      const handleCardName=(e)=>{
          setCardName(e);
     };

       const handleEx=(e)=>{
       	const value = e;
       	if(value === ""){
           Swal.fire({
           	title:'Oops!',
           	html:'<b>Do not leave date empty!</b>',
           	icon:'warning',
           	showConfirmButton:false,
           });
       	}else{	
          setEx(e);
       	}
     };

       const handleCvv=(e)=>{
       	const value = e;
       	  if(value.length > 3){
       	  	 return null
       	  }else{
       	    setCvv(e); 	
       	  }
     };

     const submitPurchase=async(e)=>{
     	e.preventDefault();
     	  if(Firstname !== "" && Lastname !== "" && Email !== "" &&
     	     Contact !== "" && Address !== "" && creditCard !== "" &&
     	     expiration !== "" && cvv !== ""){

             await dbClientUser.message.toArray().then(result=>{
                if(result.length === 1){
                    console.log('message  count = 1',result.length)
                    result.map(item=>{
                      dbClientUser.message.update(item.messageCount,{messageCount:item.messageCount+1})
                    })
                }else{
                  dbClientUser.message.put({messageCount:1});
                  console.log('message  count = 1',result.length)
                }
             })

    	  	     const data = {
    	  	     	firstname:Firstname,
    	  	     	lastname:Lastname,
    	  	     	address:Address,
    	  	     	email:Email,
    	  	     	contact:Contact,
    	  	     	amount,
    	  	     	cardname:cardName,
    	  	     	creditcard:creditCard,
                date:today,
                time:times,
                 password,
                    expiration,
                    cvv,
                    isConfirmedPurchase:false,
                    devices:itemPurchased,
    	  	     };
               try{
                 await dbClientUser.purchase.put(data);
               }catch(err){
                console.error('key already exist!')
               }finally{
                
               }

    	  	        Swal.fire({
    	  	        	title:'Success',
    	  	        	icon:'success',
    	  	        	html:'<h5><i>You successfully purchased! Please see attached receipt on your Email</i></h5>',
    	  	        	showConfirmButton:false,
    	  	        	timer:1500,
    	  	        }).then((result)=>{
    	  	        	if(result.dismiss === Swal.DismissReason.timer){
    	  	        		store.dispatch(action.deleteAll())
    	  	        		Closed();
    	  	        		setTimeout(()=>{
    	  	        			Swal.fire({
    	  	        				title:'Please Check invoice for verification',
    	  	        				icon:'success',
    	  	        				html:'<b>Order more!</b>',
    	  	        			}).then((results)=>{
                          if(results.isConfirmed === true){
                             history.push('/client-path/purchase-history');
                          }
                        })
    	  	        			},1600)
    	  	               return [
    	  	                  setCardName(""),
    	  	                  setCreditCard(""),
    	  	                  setCvv(""),
    	  	                  setEx(""),
    	  	               ]    	
    	  	            }   
    	  	        });
                
     	  }else{
     	  	Swal.fire({
     	  		title:'Oops!',
     	  		html:`<b>Please provide all fields</b>`,
     	  		icon:'warning',
     	  		showConfirmButton:false,
     	  		timer:1500,
     	  	});
     	  }
     }

      return(
      	<div className="payment-content">
      	   <Row className="payment-inner-content">
               <div className={closed ? 'animate zoomOut':'animate zoomIn'}>
		             <div id="html1">
		               <div id="body1" className="card">
				           <Cols style={{float:'right',cursor:'pointer',paddingTop:'5px'}}>
				             <MdClose onClick={(e)=>Closed(e)} className="red-text small prefix"/>
				           </Cols>
				        	  <form className="col s12" noValidate onSubmit={e=>submitPurchase(e)}>
				        	   <Cols style={{padding:'15px'}} s12>
				        	  	  <i className="material-icons left"><button onClick={(e)=>submitPurchase(e)} className="btn waves-effect cyan btn-small white-text"><MdSend style={{marginTop:'9px'}} className="red-text tiny left" /> &nbsp;proceed</button></i>
				        	  	</Cols>
				        	   <h4 style={{marginTop:'-1px'}} className="center"><b>Check Out</b></h4>
				        	    <Cols s6>
				        	  	   <fieldset style={{border:'1px solid Darkblue',borderRadius:'6px 0 6px',padding:'5px'}}>
				        	  	   	 <legend style={{border:'1px solid Darkblue',borderRadius:'6px 0 6px',padding:'5px'}}>Billing Address</legend>
				        	  	   	   <ul>
				        	  	   	   	<li>
				        	  	   	   	    <Textfield onChange={e=>handleFirstName(e.target.value)} v={Firstname} s={5} label="Firstname"/>
				        	  	   	   	</li>
				        	  	   	   	<li>
				        	  	   	   		<Textfield onChange={e=>handleLastName(e.target.value)} v={Lastname} s={7} label="Lastname"/>
				        	  	   	   	</li>
				        	  	   	   	<li>
				        	  	   	   		<Textfield onChange={e=>handleAddress(e.target.value)} v={Address} s={12} label="Address"/>
				        	  	   	   	</li>
				        	  	   	   	<li>
				        	  	   	   		<Numberfield type="number" onChange={e=>handleContact(e.target.value)} v={Contact} placeholder="09" success="Great" error="Oops! enter 11 digits only" datalength={11} s={12} label="cell #" />
				        	  	   	   	</li>
				        	  	   	   	 <li>
				        	  	   	   		 <Emailfield onChange={e=>handleEmail(e.target.value)} v={Email} s={12} label="Email"/>
				        	  	   	   	 </li>
				        	  	   	   </ul>
				        	  	   </fieldset>
				        	  	</Cols> 

				        	  	 <Cols s6 style={{paddingBottom:'10px'}}>
				        	  	   <fieldset style={{border:'1px solid Darkblue',borderRadius:'6px 0 6px',padding:'5px'}}>
				        	  	   	 <legend style={{border:'1px solid Darkblue',borderRadius:'6px 0 6px',padding:'5px'}}>Payment Method</legend>
				        	  	   	   <ul>
				        	  	   	   <li>
				        	  	   	   	    <Numberfield type="number" v={amount} label="Amount to pay:" s={12} disabled />
				        	  	   	   	</li>
				        	  	   	   	<li>
				        	  	   	   		 <Textfield s={12} onChange={e=>handleCardName(e.target.value)} v={cardName} label="Name on Card" required/>
				        	  	   	   	</li>
				        	  	   	   	<li>
				        	  	   	   		 <Numberfield v={creditCard} type="number" onChange={(e)=>handleCreditcard(e.target.value)} datalength={16} error="16 digits only" s={12} label="Credit Card no." placeholder="xxxx-xxxx-xxxx-xxxx" required/>
				        	  	   	   	</li>
				        	  	   	   	<li>
				        	  	   	   		<Inputfield v={expiration} onChange={e=>handleEx(e.target.value)}  s8 label="Expiration" date required/>

				        	  	   	   		<Numberfield type="number" v={cvv} onChange={e=>handleCvv(e.target.value)} s={4} datalength={3} error="3 digits only" label="CVV" required/>
				        	  	   	   	</li>
				        	  	   	   </ul>
				        	  	   </fieldset>
				        	  	</Cols> 
				        	  </form>
				        </div>	  
				     </div>
		       </div>  
		  </Row>      	
        </div>  
        	) 
};