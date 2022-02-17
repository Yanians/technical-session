
import { useState,Fragment } from 'react';

import { dbClientUser } from '../../../dexie';

import { Row, Cols, Panel, ButtonM, TextArea,Inputfield, Space } from '../../wrapper';

import { Gi3DGlasses } from 'react-icons/gi';

import Swal from 'sweetalert2';

const options = [
  "Access control",
  "Barriers",
  "Surveillance",
  "FDAS",
  "Storage retention",
];

function RequestMaintenance(props){

  const [state, setState ] = useState({
      types:'',
      devices:'',
      date:'',
      contact:props.user.contact,
      address:props.user.address,
      statement:''
  });

  const { types, devices, date, contact, address, statement, } = state;

	     const handleType=(e)=>{
	     	  if(e.length === 0){
	     	  	console.log(e);
	     	  	 	Swal.fire({
	     	  		title:'Oops!',
	     	  		html:'<strong>Please do not leave it empty!</strong>',
	     	  		showConfirmButton:false,
	     	  		icon:'error',
	     	  		timer:2000,
	     	  	});
	     	  }else{
	     	  	console.log(e);
	     	    setState({...state,types:e})     	
	     	  }
             
	     };
	     const handleDevices=(e)=>{
             setState({...state,devices:e})    
	     };
	     const handleDate=(e)=>{
             setState({...state,date:e})    
	     };
	     const handleContact=(e)=>{
	     	  if(e.length > 11){
	     	  	return
	     	  }else if(e.length === 0){
	     	  	 setState({...state,contact:''})     	
	     	  }else{
	     	     setState({...state,contact:e})     	
	     	  }
	     };
	     const handleAddress=(e)=>{
             setState({...state,address:e})    
	     };
	     const handleStatement=(e)=>{
	     	  const value = e.target.value;
	     	   if(value.length > 555){
	     	   	 return;
	     	   }else if(value.length === 0){
	     	   	 setState({...state,statement:''})      	  
	     	   }else{
	     	     setState({...state,statement:value})      	
	     	   }
             
	     };

	     const handleSubmit=async(e)=> {
	     	       e.preventDefault();
	     	  if(types !== "" && devices !== "" && date !== "" && contact !== "" && address !== "" && statement !== ""){
                      await dbClientUser.maintenance.add({types, devices,date,contact,address,statement}).then((result)=>{
                      	    Swal.fire({
                      	    	 title:'Success!',
                      	    	 html:'<strong>Submitted</strong>',
                      	    	 showConfirmButton:false,
                      	    	 icon:'success',
                      	    	 timer:1500,
                      	    	}).then((result)=>{
                      	    		 if(result.dismiss ===Swal.DismissReason.timer){
                      	    		 	 setState({...state,types:'',devices:'',date:null,contact:0,address:'',statement:''});
                      	    		 }
                      	    	})
                      })
	     	  }else{
                 Swal.fire({
          	    	 title:'Oops! Empty Field',
          	    	 html:'<strong>Please check Field</strong>',
          	    	 showConfirmButton:false,
          	    	 icon:'error',
          	    	 timer:1500,
          	    	 didOpen:(e)=>{
          	    	 	Swal.showLoading()
          	    	 }
          	    	})
	     	  }
	     }
	     return(
	     	<Row>
	     	 <Cols s12>
	              <div className="card" style={{padding:'2%'}}>
	                         <h4 style={{display:'flex',flexGrow:1,justifyContent:'center', width:'100%'}}><strong>Request Maintenace</strong></h4>
	                     <form className="col s12">
	                       <Space />
	                       <Row>
	                           <Cols s12 m4>
								  <label>Device type</label>
									  <select className="browser-default" onChange={e=>handleType(e.target.value)}>
									     <option disabled value="" selected>Type of Security Device</option>
									    {options.map((item,_)=>(
									    	  <Fragment key={item}>
									    	     <option value={item}>{item}</option>
									    	  </Fragment> 
									    ))
									    }
									  </select>
	                           </Cols>

	                       	   <Inputfield text v={devices} placeholder="Number of Devices" onChange={e=>handleDevices(e.target.value)} s12 m8/>

	                       	   <Inputfield date v={date} label="Set schedule" onChange={e=>handleDate(e.target.value)} s12 m6/>

	                       	   <Inputfield number v={contact} label="update your contact" onChange={e=>handleContact(e.target.value)} s12 m6/>

	                       	   <Inputfield text v={address} label="update present address" onChange={e=>handleAddress(e.target.value)} s12 m6/>

	                       	   <TextArea placeholder="Declare the type of trouble if (any)" v={statement} onChange={e=>handleStatement(e)} s={12} success="Great" datalength="555" error="Oops! you are in limit" text s12  icon={<Gi3DGlasses className="cyan-text text-darken-4 prefix small"/>}  required/>	

	                       <Row>
                              <Cols m8></Cols>
                              <Cols s12 m4><ButtonM onClick={e=>handleSubmit(e)} btn large cyan waves waveslight name="submit" /></Cols>
                           </Row>                   

	                       </Row>
	                    </form>
	              </div>   
              </Cols>    
            </Row>  
	     	)
}

export default RequestMaintenance;