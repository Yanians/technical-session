import React from 'react';
import Swal from 'sweetalert2';
import swal from 'sweetalert';
import { useRouteMatch } from 'react-router-dom';
import {Row, Cols, Inputfield, ButtonM, Form, Space, Panel, dbTechUser } from '../index';

 class CreateUser extends React.Component{
    
      constructor(props){
      	super(props)
      	this.handleFirstname = this.handleFirstname.bind(this);
      	this.handleLastname = this.handleLastname.bind(this);
      	this.handleAddress = this.handleAddress.bind(this);
      	this.handleContact = this.handleContact.bind(this);
      	this.handleEmail = this.handleEmail.bind(this);
      	this.handlePosition = this.handlePosition.bind(this);
      	this.handleFileImage = this.handleFileImage.bind(this);
      	this.handlePassword = this.handlePassword.bind(this);
      	this.handleConfirmP = this.handleConfirmP.bind(this);
      	this.clearField = this.clearField.bind(this);
      	this.submits = this.submits.bind(this);

     	  this.state={
     	  	firstname:'',
     	  	lastname:'',
     	  	address:'',
     	  	contact:'',
     	  	email:'',
     	  	position:'',
     	  	password:'',
     	  	confirmp:'',
     	  	image:''
          };
      }

      // componentDidMount(){
      //   const { match } = this.props;

      // }
   
        handleFirstname(e){
            if(e.target.value.length > 15){
            	return null;
            }else{
            	this.setState({firstname:e.target.value})
            }
        }

        handleLastname(e){
            if(e.target.value.length > 15){
            	return null;
            }else{
            	this.setState({lastname:e.target.value})
            }
        }

        handleAddress(e){
            if(e.target.value.length > 45){
            	return null;
            }else{
            	this.setState({address:e.target.value})
            }
        }

        handleContact(e){
            if(e.target.value.length > 11){
            	return null;
            }else{
            	this.setState({contact:e.target.value})
            }
        }

        handleEmail(e){
            if(e.target.value.length > 35){
            	return null;
            }else{
            	this.setState({email:e.target.value})
            }
        }

        handlePosition(e){
            if(e.target.value.length > 15){
            	return null;
            }else{
            	this.setState({position:e.target.value})
            }
        }

        handleFileImage(e){
        	const f = e.target.files
            const reader = new FileReader()
                  reader.onload = (f)=>{
                       this.setState({image:reader.result});
                  }
                reader.readAsDataURL(f[0])  
        }

        handlePassword(e){
            if(e.target.value.length > 18){
            	Swal.fire({title:'Oops!',html:'<b>Password should not more than 18 characters...</b>',timer:1500,icon:'warning'})
            	return null;
            }else{
            	this.setState({password:e.target.value})
            }
        }

        handleConfirmP(e){
        	const { password } = this.state;
        	const cf = e.target.value
        	if(cf.length > 18 && cf.length !== password.length){
        	    swal('Oops!','the password you entered do not match...','error');
        	    return null;	
        	}else{
        	   this.setState({confirmp:cf});
        	}        	
        }

      submits=(e)=>{
      	e.preventDefault();
        const { firstname, lastname, email, contact, position, address, password, image, confirmp } = this.state;
          if( firstname !== "" && lastname !== "" &&
              address !== "" && email !== "" &&
              contact !== "" && position !== "" && image !== "" && 
             (password === confirmp ? password && password === confirmp :"")
            ){
        	const data = {firstname, lastname, email, contact, position, address, image, password}
             Swal.fire({title:'successfully created',icon:'success',timer:1000}).then(async(result)=>{
             	          if(result.dismiss === Swal.DismissReason.timer){
             	          	   await dbTechUser.technical.add(data)
             	          	  this.clearField();
             	          }
             });
 
          }else{
            swal('Some fields are empty','Do not leave empty field','error')
          }
        }  

        clearField(){
        	this.setState({firstname:'', lastname:'', email:'', contact:'', position:'',address:'',password:'',confirmp:'', image:''});
        }
   
   render(){

   	return(
   		   <React.Fragment>
	           <Row>
	             <Cols s12 className="center">
	               <Space />
	               <Space />
	               <Space />
	               <Space />
	               <Panel> 
	                <Form s8>
	                <h5>Create User Account</h5>
	                   <Row>

	                   <Cols s12>
	                     <Cols s1 className="hide-on-med-and-up"></Cols>
	                       <Cols s11>
		                     <Inputfield label="firstname" v={this.state.firstname} onChange={this.handleFirstname} text s6 m6 l6 required icon={null} />
		                     <Inputfield label="lastname" v={this.state.lastname} onChange={this.handleLastname} text s6 m6 l6 required icon={null} />
		                   </Cols> 
		               </Cols>

			               <Cols s12>
			                 <Cols s1 className="hide-on-med-and-up"></Cols>
			                   <Cols s11>
			                     <Inputfield label="address" v={this.state.address } onChange={this.handleAddress} text s6 m6 l6 required icon={null}/>
		                         <Inputfield label="contact" v={this.state.contact } onChange={this.handleContact} number s6 m6 l6 required icon={null} />
			                   </Cols>
		                   </Cols>

		                   <Cols s12>
			                 <Cols s1 className="hide-on-med-and-up"></Cols>
			                   <Cols s11>
			                     <Inputfield label="email" v={this.state.email } onChange={this.handleEmail} email s6 m6 l6 required icon={null} />
		                         <Inputfield label="position" v={this.state.position } onChange={this.handlePosition} text s6 m6 l6 required icon={null} />
			                   </Cols>
		                   </Cols>

		                   <Cols s12>
			                 <Cols s1 className="hide-on-med-and-up"></Cols>
			                   <Cols s11>
			                     <Inputfield label="password" v={this.state.password } onChange={this.handlePassword} password s6 m6 l6 required icon={null}/>
		                         <Inputfield label="confirm password" v={this.state.confirmp } onChange={this.handleConfirmP} password s6 m6 l6 required icon={null} />
			                   </Cols>
		                   </Cols>
		                   <Cols s12>
			                 <Cols s1 className="hide-on-med-and-up"></Cols>
			                   <Cols s11>
		                         <Inputfield  onChange={e=>this.handleFileImage(e)} file s6 m6 l6 required icon={null} />
			                   </Cols>
		                   </Cols>

		               </Row>
	                   <Row>
	                   	<Cols s6 l8 xl8></Cols>
	                   	 <Cols s2 l2 xl2 className="left"><ButtonM onClick={e=>this.submits(e)} submit cyan btn waves waveslight small name="Post" /></Cols>
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

const Createuser = (props)=>(<CreateUser {...props} path={useRouteMatch()} />)

export default Createuser;
