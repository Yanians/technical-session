import React  from 'react';
import { Gi3DGlasses } from 'react-icons/gi';
import { dbPost } from '../../../dexie';
import Swal from 'sweetalert2';
import M from 'materialize-css';
import swal from 'sweetalert';
import { Inputfield, Cols, Row, Panel, Space, Form, TextArea, ButtonM } from '../../wrapper';
export class Blog extends React.Component{

  componentDidMont(){
    M.AutoInit();
  }

	constructor(props){
     super(props)
     this.handleDate = this.handleDate.bind(this)
     this.handleFileUpload = this.handleFileUpload.bind(this)
     this.handlePost = this.handlePost.bind(this)
     this.handleTitle = this.handleTitle.bind(this)
     this.handleType = this.handleType.bind(this)
     this.handleCompany = this.handleCompany.bind(this)
     this.submits = this.submits.bind(this);
     this.clearField = this.clearField.bind(this);
     this.state = {dated:'',title:'',post:'',file:'',type:'',company:''}
	}

   handleDate(e){
     const dated = e.target.value;
     this.setState({dated:dated})
   }

   handleTitle(e){
      const title = e.target.value
      this.setState({title:title});
   }

   handlePost(e){
   	const post = e.target.value
   	this.setState({post:post})
   }

   handleType(e){
    const type = e.target.value
    this.setState({type:type})
   }

      handleCompany(e){
    const input  =  e.target.value
    this.setState({company:input})
   }

   handleFileUpload(e){
   	const reader = new FileReader();
   	reader.onload =(e)=>{
   	  this.setState({file:reader.result})	
   	}
   	reader.readAsDataURL(e[0]);
   }

   clearField(){
   	 this.setState({
   	 	dated:'',
   	 	title:'',
   	 	post:'',
   	 	file:'',
      company:'',
      type:''
   	 });
   }

   submits=(e)=>{
         e.preventDefault();
         const { firstname, lastname, position, image } = this.props.data;
         console.log(lastname)
    const {dated, title, post, file, company, type } = this.state;

       if(dated !== "" && title !=="" && post !== "" && file !== "" && company!== "" && type !== ""){
       	   Swal.fire({
       	   	   title:'Posted!',
       	   	   html:'<b>Successfully posted</b>',
       	   	   icon:'success',
       	   	   timer:1500,
       	   }).then(async(result)=>{
               if(result.dismiss === Swal.DismissReason.timer){
                    const data = {dated, title, post, file, company, type, identity:{firstname, lastname, position, image}}
                    await dbPost.postcomment.add(data)    	
                    this.clearField();
               }
       	   });
           
       }else{
         swal({
           title:'Oops!',
           text:'do not leave empty field',
           icon:'error',
           button:false
          });
       }
   }

	render(){
	return (
		<React.Fragment>
           <Row>
             <Cols s12 className="center">
               <Space />
               <Space />
               <Space />
               <Space />
               <Panel> 
                <Form s8>
                <h5>Post your Support experience</h5>
                   <Row>

                   <Cols s12>
                     <Cols s1 className="hide-on-med-and-up"></Cols>
                       <Cols s11>
	                     <Inputfield label="Set a Date" v={this.state.dated} onChange={this.handleDate} s9 m6 l5 xl3 date required />
	                   </Cols> 
	               </Cols>

                 <Cols s12>
                      <Cols s1 className="hide-on-med-and-up"></Cols>
                        <Cols s11>
                          <Inputfield label="Device Type"  datalength="15" text v={this.state.type} onChange={this.handleType} s6 required />
                         </Cols>
                 </Cols>

		               <Cols s12>
		                 <Cols s1 className="hide-on-med-and-up"></Cols>
		                   <Cols s11>
		                     <Inputfield label="Title of the post"  datalength="15" text v={this.state.title} onChange={this.handleTitle} s6 required />
		                   </Cols>
	                   </Cols>
                    
                     <Cols s12>
                      <Cols s1 className="hide-on-med-and-up"></Cols>
                        <Cols s11>
                          <Inputfield label="Company"  datalength="15" text v={this.state.company} onChange={this.handleCompany} s6 required />
                         </Cols>
                      </Cols>
                     
	                 <TextArea label="RCA" v={this.state.post} onChange={this.handlePost} s={12} success="Great" datalength="555" error="Oops! you are in limit" text s12  icon={<Gi3DGlasses className="cyan-text text-darken-4 prefix small"/>}  required/>	
	                 <Inputfield name="File" onChange={e=>this.handleFileUpload(e.target.files)} file s12 required btnType="btn btn-small cyan white-text text-darken-1" />
	               </Row>
                   <Row>
                   	<Cols s6 l8 xl8></Cols>
                   	 <Cols s2 l2 xl2 className="left"><ButtonM onClick={this.submits} submit cyan waves waveslight small btn name="Post" /></Cols>
                   	 <Cols s4 l2 xl2 className="left"><ButtonM onClick={this.clearField} btn small cyan waves waveslight name="clear" /></Cols>
                   </Row>                   
                </Form>
               </Panel> 
             </Cols>
           </Row>
         </React.Fragment>  
		)
	}
}