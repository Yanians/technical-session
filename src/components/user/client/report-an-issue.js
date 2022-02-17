

import { useState } from 'react';

import Swal from 'sweetalert2';

import { dbClientUser } from '../../../dexie';

import { Gi3DGlasses } from 'react-icons/gi';

import { Row, Cols, Inputfield, TextArea, Form, Space,Panel,ButtonM } from '../../wrapper';

function ReportAnIssue(props){

	const [state, setState ] = useState({
         types:'',
         company:'',
         date:'',
         technician:'',
         issue:'',
	});

	const { types, company, date, technician, issue, } = state;

	   const handleType=(e)=>{
	   	  if(e.length > 150){
	   	  	return
	      }else{
	      	setState({...state,types:e});
	      }
	   }
	      
	   const handleCompany=(e)=>{
	   	setState({...state,company:e});
	   }

	   const handleStarted=(e)=>{
	   	setState({...state,date:e});
	   }

	   const handleTechnician=(e)=>{
	   	setState({...state,technician:e});
	   }

	   const handleIssue=(e)=>{
	   	const value = e.target.value;
	   	setState({...state,issue:value});
	   }

	   const handleSubmit=(e)=>{
	   	      e.preventDefault();
	   	   if(types !== "" &&  company !== "" && date !== "" && technician !== "" && issue !== ""){
	   	   	   dbClientUser.issue.add({types,company,date,technician,issue}).then(result=>{
	   	   	   	  Swal.fire({
	   	   	   	  	title:'Success',
	   	   	   	  	html:'<strong>Done</strong>',
	   	   	   	  	showConfirmButton:false,
	   	   	   	  	icon:'success',
	   	   	   	  	timer:1000,
	   	   	   	  }).then((results)=>{
	   	   	   	  	  setState({
	   	   	   	  	  	...state,
	   	   	   	  	  	types:'',
	   	   	   	  	  	company:'',
	   	   	   	  	  	data:'',
	   	   	   	  	  	technician:'',
	   	   	   	  	  	issue:'',
	   	   	   	  	  });
	   	   	   	  })
	   	   	   })
	   	   }else{
	   	   	     Swal.fire({
	   	   	   	  	title:'Oops!',
	   	   	   	  	html:'<strong>Please Check empty field</strong>',
	   	   	   	  	showConfirmButton:false,
	   	   	   	  	icon:'error',
	   	   	   	  	timer:2000,
	   	   	   	  })
	   	   }
	   }

	  return(          
          <Row>
             <Cols s12>
               <Panel>
                <h4 style={{display:'flex',width:'100%',flexGrow:1,justifyContent:'center'}}>Report an Issue</h4>
                <Form s12>
                  <Space />
                   <Row>
                   <Space />
                   	<Inputfield text placeholder="Type of device (brand)" s12 m6 v={types} onChange={e=>handleType(e.target.value)}  /> 

                   	<Inputfield text label="Vendor Company" s12 m6 v={company} onChange={e=>handleCompany(e.target.value)}  /> 

                   	<Inputfield date label="Date started" s12 m6 v={date} onChange={e=>handleStarted(e.target.value)}  /> 

                   	<Inputfield text label="Assign Technician" s12 m6 v={technician} onChange={e=>handleTechnician(e.target.value)} /> 

                   	<TextArea placeholder="Issue: " v={issue} onChange={e=>handleIssue(e)} s={12} success="Great" datalength="2500" error="Oops! you are in limit" text s12  icon={<Gi3DGlasses className="cyan-text text-darken-4 prefix small"/>}  required/>	
                   </Row>
                      <Cols s12><ButtonM onClick={e=>handleSubmit(e)} btn large cyan waves waveslight name="submit" /></Cols>
                </Form>
               </Panel> 
             </Cols>
          </Row>
	  	)
}

export default ReportAnIssue;