import React,{ useState, useEffect } from 'react';

import { Row, UserLink, Center, Space, Img } from '../../wrapper';

import Swal from 'sweetalert2';

import swal from 'sweetalert';

// import { useLiveQuery as Live } from 'dexie-react-hooks';

import { Redirect } from 'react-router-dom';

import { dbAdminUser, dbClientUser, dbTechUser, } from '../../../dexie';

import  Loginlogo  from '../../../images/vertex-logo.png';

const Login = (props) => {

    const [ adminData, setAdminData ] = useState("");

    // const [ manageData, setManageData ] = useState("");

    const [ techData, setTechData ] = useState("");

    const [ password, setPassword ] = useState("");
    
    const [ clientData, setClientData ] = useState("");

    useEffect(()=>{
             
       if(password !== ""){
     	  props.loginPassword(password)
       }else if(clientData !== ""){
       	  props.clientPass(clientData)
       }else if(adminData !== ""){
       	  props.adminPass(adminData)
       }else if(techData !== ""){
       	  props.techPass(techData)

       // }else if(manageData !== ""){
       	  // props.managePass(manageData)
       }else{
       	return null;
       }
      	       async function awaits(){
      	       	await dbClientUser.transaction('r',dbClientUser.client, async function(){
                       if(dbClientUser.close )dbClientUser.open();

                       
      	       	})
      	       }
      	       awaits();
    });
// ,[ password, clientData, adminData, techData, /*manageData,*/ props, ]            
const adminLogin=async(e)=>{

 e.preventDefault();
 const key = await dbAdminUser.admin.toArray();
 setTimeout(()=>{Swal.showLoading()})
	// Swal.fire({
	// 	  width:'90',
	// 	  showConfirmButton:false,
	// 	  timer:400
	// 	 }).then((result)=>{
 //              if(result.dismiss === Swal.DismissReason.timer){
 //          	      Swal.fire({
	// 			  title: 'password',
	// 			  input: 'password',
	// 			  showConfirmButton:true,
	// 			  inputPlaceholder: 'Enter your password',
	// 			  confirmButtonText:'submit',
	// 			  inputAttributes: {
	// 			    maxlength: 20,
	// 			    autocapitalize: 'off',
	// 			    autocorrect: 'off'
	// 			  },
	// 			  inputValidator:async(value)=>{
	// 			      	     if(!value){
	// 			      	     return `Empty field!`
	// 			           }
	// 			      }
	// 			 }).then((result)=>{
	// 			 	 if(result.isConfirmed){
 //                           for(let prop of key){
	// 			      	     if(result.value === prop.password){
				      	     	  
	// 			      	     	setTimeout(()=>{Swal.showLoading()})
	// 			              	Swal.fire({
	// 			              		      title:'Loading content...',
	// 									  width:'300',
	// 									  showConfirmButton:false,
	// 									  timer:800
	// 						    }).then((result)=>{
	// 						    	if(result.dismiss === Swal.DismissReason.timer){
	// 						          swal({title:'Redirecting',icon:'success',text:'Please wait',button:false,timer:1500});
	// 			      	     	   } 
	// 						    });
	// 				      	     setTimeout(()=>{
	// 				      	        setAdminData(prop)
	//                                 setPassword(result.value) 	
	// 				      	     },2000)
	// 			      	     }else{
 //                              swal({title:'Oops!',
	//                               	 text:'password not match try again',
	//                               	 icon:'error',
	//                               	 timer:1000
	//                               });
 //                              return adminLogin(e);
	// 			      	     }
 //                         }
	// 			 	 }
	// 			 })
 //              }
	// 	 })

          	      Swal.fire({
				  title: 'NOTICE OF ADVICE',
				  html:`<b className="green-text darken-3">We were sorry for inconvenience..
				   this Link is under maintenance please proceed to membership account</b>`,
				  showConfirmButton:false,
				  icon:'info',
				  backdrop: `
				    rgba(0,0,123,0.4)
				    url("/images/nyan-cat.gif")
				    left top
				    no-repeat
			      `,
				  didOpen:(e)=>{
				  	Swal.showLoading()
				  },
				 })
  }

  const managementLogin=(e)=>{
          e.preventDefault()

            Swal.fire({
				  title: 'NOT YET AVAILABLE',
				  html:`<b className="green-text darken-3">Please proceed to Membership account</b>`,
				  showConfirmButton:false,
				  icon:'error',
				  backdrop: `
				    rgba(255,0,0,0.7)
				    url("/images/nyan-cat.gif")
				    left top
				    no-repeat
			      `,
				  didOpen:(e)=>{
				  	Swal.showLoading()
				  },
				 })
  }

  const clientLogin=async(e)=>{
     e.preventDefault();
     const loginKey =  await dbClientUser.client.toArray().then((result)=>{
      	                         return result
                              }).catch(async(err)=>{
                              	console.log('encountered error reading please wait... ',err)
                                 await dbClientUser.delete().then((result)=>{
                                 	   dbClientUser.open();
                                 	   console.log('Database now open')
                                 })                  	
                              }).finally(async()=>{
                              	   await dbClientUser.open()                  	
                              })

      if(loginKey === undefined){
      	   Swal.fire({
      	  	title:'Diagnosing',
      	  	html:'<b>Please wait...</b>',
      	  	icon:'question',
      	  	timer:1700,
      	  	showConfirmButton:false,
      	  	allowOutsideClick:()=>!Swal.isLoading(),
			didOpen:()=>{
			  	Swal.showLoading()
			}
      	  }).then(async(result)=>{
      	  	if(result.dismiss === Swal.DismissReason.timer){
      	  		 Swal.fire({
      	  		 	title:'EMPTY DATABASE',
      	  		 	icon:'question',
      	  		 	html:`<b>The database has been deleted would you like to Register again ?</b>`,
      	  		 	showConfirmButton:true,
      	  		 }).then(result=>{
      	  		 	  if(result.isDismissed){
      	  		 	  	return null;
      	  		 	  }
      	  		 	  if(result.isConfirmed){
                         props.showRegister('display-block')
      	  		 	  }
      	  		 })
            }
      	  })

      	  

      }else if(loginKey.length === 0 && loginKey !== undefined){
      	  Swal.fire({
      	  	title:'You are not Registered',
      	  	html:'<b>You mean Register ? </b>',
      	  	icon:'question',
      	  	timer:1700,
      	  	showConfirmButton:false,
      	  }).then((result)=>{
      	  	const dis = 'display-block';
      	  	  props.showRegister(dis);
      	  })
      	}else{
		             setTimeout(()=>Swal.showLoading())
						 Swal.fire({
							  width:'90',
							  showConfirmButton:false,
							  timer:400
							 }).then((result)=>{
				              if(result.dismiss === Swal.DismissReason.timer){
				          	      Swal.fire({
								  title: 'password',
								  input: 'password',
								  showConfirmButton:true,
								  inputPlaceholder: 'Enter your password',
								  confirmButtonText:'submit',
								  inputAttributes: {
								    maxlength: 20,
								    autocapitalize: 'off',
								    autocorrect: 'off'
								  },
								  inputValidator:(value)=>{
								      	     if(!value){
								      	     return `Empty field!`
								           }
								      }
								 }).then((input)=>{
								 	if(input.isDismissed){
								 		return null;
								 	}
								 	const pass = input.value
						                Swal.fire({
						              		      title:'validating...',
												  width:'300',
												  showConfirmButton:false,
												  timer:700,
												  allowOutsideClick:()=>!Swal.isLoading(),
												  didOpen:()=>{
												  	Swal.showLoading()
												  }
									    }).then(async(result)=>{
									    	if(result.dismiss === Swal.DismissReason.timer){
											   const items = await Promise.all(loginKey.map((item)=>{
											   	         const found = pass === item.password ? item : '';
											   	         return found;
											   }));

											     for(let prop of items){	         
			                                        if(pass === prop.password){
			                                         return Swal.fire({
			                                                	title:`Welcome Back ${prop.firstname} !`,
			                                                	icon:'success',
			                                                	text:'Please wait...',
			                                                	showConfirmButton:false,
			                                                	timer:1700
			                                                }).then((result)=>{
			                                                    setTimeout(()=>{
									      	                    setClientData(prop);
									     	                    setPassword(prop.password);
									     	                  },100);     
			                                                })
			                                         }else{
			                                         	input.value = ""
			                                            Swal.fire({
							    	           	         title:'Oops!.',
							    	           	          html:'<b>password do not match try again...</b>',
							    	           	          icon:'error',
							    	           	          showConfirmButton:false,
							    	           	          timer:1100
							    	           	        }).then((result)=>{
							    	           	        	if(result.dismiss === Swal.DismissReason.timer){
							    	           	        	    return clientLogin(e);
							    	           	        	}
							    	           	        })
							    	           	     }   	
											   };	    
									    	}
									    })
						         })	 
				          }

		    	    })
             }  
  }

   const techLogin=async(e)=>{
   	e.preventDefault();
   	   Swal.fire({
				  title: '70% in progress',
				  html:`<b className="green-text darken-3">We will inform for the next update. THANK YOU!</b>`,
				  showConfirmButton:false,
				  icon:'info',
				  backdrop: `
				    rgba(0, 204, 68, 0.4)
				    url("/images/nyan-cat.gif")
				    left top
				    no-repeat
			      `,
				  didOpen:(e)=>{
				  	Swal.showLoading()
				  },
				 })
  //    const key = await dbTechUser.technical.toArray()
	 // setTimeout(()=>Swal.showLoading())
		// Swal.fire({
		// 	  width:'90',
		// 	  showConfirmButton:false,
		// 	  timer:400
		// 	 }).then((result)=>{
  //             if(result.dismiss === Swal.DismissReason.timer){
  //         	      Swal.fire({
		// 		  title: 'password',
		// 		  input: 'password',
		// 		  showConfirmButton:true,
		// 		  inputPlaceholder: 'Enter your password',
		// 		  confirmButtonText:'submit',
		// 		  inputAttributes: {
		// 		    maxlength: 20,
		// 		    autocapitalize: 'off',
		// 		    autocorrect: 'off'
		// 		  },
		// 		  inputValidator:(value)=>{
		// 		      	     if(!value){
		// 		      	     return `Empty field!`
		// 		           }
		// 		      }
		// 		 }).then((input)=>{
		// 		 	if(input.isDismissed){
		// 		 		return null;
		// 		 	}
  //                   const password = input.value 
		// 		              	Swal.fire({
		// 		              		      title:'validating...',
		// 								  width:'300',
		// 								  showConfirmButton:false,
		// 								  timer:700,
		// 								  allowOutsideClick:()=>!Swal.isLoading(),
		// 								  didOpen:()=>{
		// 								  	Swal.showLoading()
		// 								  }
		// 					    }).then(async(result)=>{
		// 					    	if(result.dismiss === Swal.DismissReason.timer){
		// 							    const values = await Promise.all(key.map(item=>{
		// 							    	           const found = password === item.password ? item :'';
		// 							    	           return found;
  //                                              }));
                                   
		// 					    		for(let prop of values){
		// 					    			if(password === prop.password){
  //                                             return Swal.fire({
  //                                                   	title:`Welcome Back ${prop.firstname} !`,
  //                                                   	icon:'success',
  //                                                   	text:'Please wait...',
  //                                                   	showConfirmButton:false,
  //                                                   	timer:1500
  //                                                   }).then((result)=>{
  //                                                       setTimeout(()=>{
		// 					      	                   setTechData(prop)
		// 					     	                   setPassword(prop.password)
		// 					     	                 },100)     	
  //                                                   });
		                                             
		// 					    			 }else{
		// 					    	           Swal.fire({
		// 					    	           	         title:'Oops!.',
		// 					    	           	          html:'<b>password do not match try again...</b>',
		// 					    	           	          icon:'error',
		// 					    	           	          showConfirmButton:false,
		// 					    	           	          timer:1100
		// 					    	           	        }).then((result)=>{
		// 					    	           	        	if(result.dismiss === Swal.DismissReason.timer){
		// 					    	           	        	    return techLogin(e);
		// 					    	           	        	}
		// 					    	           	        });
		// 					    			 }
		// 					    		}
		// 					        }
		// 					     })
		// 		    })	 
		//       	 }
		// 	})
		 } 

   switch(password){
   	
   	  case techData.password:{
   	  	  return <Redirect to="/tech-path" />
   	  }
   	  case clientData.password:{
   	  	   return <Redirect to="/client-path" />
   	  }
   	  case adminData.password:{
   	  	    return <Redirect to="/admin-path" />
   	  }
   	  // case manageData.password:{
   	  // 	    return <Redirect to="/management-path" />
   	  // }

   	  default: try{return <div id="html">
                         <div id="body">
                           <Space />
						  <div className="modal-register"></div>   
		                     <div className="card-panel modal-content-register z-depth-3">
						       <Center>
						            <UserLink style={{marginTop:'-14px',textDecoration:'underline'}} onClick={props.hidelogin} name="Back to site" className="right red-text text-darken-2" link="/" />
						              <Img style={{marginLeft:'60px'}} src={Loginlogo} description="undefined" w="75" h="75" className="circle responsive-img z-depth-2" />
						            <h3 className="center vertex-banner grey-text text-darken-1">VERTEX</h3>
						            <h5 className="center grey-text text-darken-2"><b>V</b>ertical <b>E</b>Lect<b>R</b>onics <b>TE</b>chnical <b>X</b>olution</h5>
						              <Row>
							            <button onClick={(e)=>clientLogin(e)} className="btn btn-waves-effect cyan black-text darken-1 hoverable btn-large user">Member</button>
						              </Row>
						              <Row>
							            <button onClick={e=>techLogin(e)} className="btn btn-waves-effect cyan black-text lighten-1 hoverable btn-large technical">Technical</button>
				                      </Row>
				                      <Row>
							            <button onClick={(e)=>managementLogin(e)} className="btn btn-waves-effect cyan black-text lighten-2 hoverable btn-large management">Management</button>
				                      </Row> 
				                      <Row> 
							            <button onClick={(e)=>adminLogin(e)} className="btn btn-waves-effect cyan black-text lighten-3 hoverable btn-large admin">Admin</button>
							          </Row> 
		                       </Center>
					 	     </div>
					 	     <Space />
		                  </div>
		              </div>
		            }catch{
		            }  

     }         
}

export default Login;