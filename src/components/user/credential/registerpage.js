import React, { useState,useEffect } from 'react';

import  vertexLogo  from '../../../images/vertex-logo.png';

import { Redirect } from 'react-router-dom';

import {Cols, Form, Row,ButtonM, Inputfield, Img, Center, Space } from '../../wrapper';

import  { VscChromeClose }  from 'react-icons/vsc';

import { dbClientUser } from '../index';

import Swal from 'sweetalert2';

import swal from 'sweetalert';

export const RegisterUser=(props)=> {

const [ firstname, setFirstname ] = useState("");

const [ lastname, setLastname ] = useState("");

const [ address, setAddress ] = useState("");

const [ contact, setContact ] = useState("");

const [ company, setCompany ] = useState("");

const [ email, setEmail ] = useState("");

const [ image, setFileImage ] = useState("");      

const [ password, setPassword ] = useState("");

const [ confirmp, setConfirmed ] = useState("");

const [ position, setPosition ] = useState("");

const [ validateF, setValidateF ] = useState("");

const [ validateA, setValidateA ] = useState("");

const [ validateP, setValidateP ] = useState("");

const [ validateC, setValidateC ] = useState("");

const [ validateL, setValidateL ] = useState("");

const [ successF, setSuccessF ] = useState("");

const [ successL, setSuccessL ] = useState("");

const [ successA, setSuccessA ] = useState("");

const [ successP, setSuccessP ] = useState("");

const [ successC, setSuccessC ] = useState("");

const [ validateTextF, setValidateTextF ] = useState("");

const [ validateTextL, setValidateTextL ] = useState("");

const [ validateTextA, setValidateTextA ] = useState("");

const [ validateTextP, setValidateTextP ] = useState("");

const [ validateTextC, setValidateTextC ] = useState("");

const [ clientdata, setClientdata ] = useState("");

useEffect(()=>{
  
  async function Run(){
    
     await dbClientUser.client.toArray().then((key)=>{
         key.map((item)=>{
             if(item.password === password && confirmp === password){
                 Swal.fire({
                  title:'Password already taken',
                  icon:'warning',
                  html:'<b>Please change password</b>',
                 }).then((result)=>{
                    setPassword("")
                    setConfirmed("")
                    setClientdata("")
                    props.showRegister('display-block')
                 })
             }else{
                return key
             }
         })
      }).catch((err)=>{
        console.log('dbClientUser empty state')
      })     
  }
  Run();
},[password, confirmp, props])

useEffect(()=>{         
   props.clientInfo(clientdata)
   props.isPassword(password)
},[ clientdata, props])

      const onChangeFirstname=async(e)=>{
      	   let value = await e.target.value;
           if(value.length > 0 && value.length <= 15){
           	setFirstname(value);
            setValidateTextF("valid")
            setValidateF("");
            setSuccessF("Great!");
           }else if(value.length > 15){
              setValidateTextF("invalid")
              setSuccessF("");
              setValidateF("15 characters allowed");
             // return null;
           }else if(value.length <= 0){
              setFirstname("");
              setValidateF("");
              setSuccessF("");
              setValidateTextF("")
              // return null
           }else{
           	return value;
           }
      }

       const onChangeLastname=async(e)=>{
           let value = await e.target.value;
           if(value.length > 0 && value.length <= 15){
            setLastname(value)
            setValidateTextL("valid")
            setValidateL("");
            setSuccessL("Great!");
           }else if(value.length > 15){
              setValidateTextL("invalid")
              setSuccessL("");
              setValidateL("15 characters allowed");
             return null
           }else if(value.length <= 0){
              setLastname("");
              setSuccessL("");
              setValidateTextL("")
              return null
           }else{
            return null;
           }

      }

           const onChangeAddress = async(e)=>{
           	   let value = await e.target.value
           	   if(value.length > 0 && value.length <= 41){
                 setAddress(value)
                 setValidateTextA("valid")
                 setValidateA("");
                 setSuccessA("Great!");
           	   }else if(value.length > 41){
                 setValidateTextA("invalid")
                 setSuccessA("");
                 setValidateA("41 characters allowed");
           	   	  return null;
           	   }else if(value <= 0){
                 setSuccessA("");
                 setValidateA("");
           	   	 setAddress("")
           	   }else{
           	   	return null;
           	   }
           }

           const onChangeContact = async(e)=>{
           	   let value = await e.target.value
           	   if(value.length > 0 && value.length <= 11){
           	   	  setContact(value);
           	   }else if(value.length > 11){
                    return null;
           	   }else{
           	   	return null;
           	   }
           }

           const onChangeFileImage = async(e)=>{
           	   const reader = new FileReader()
                     reader.onload =(e)=>{
                        setFileImage(reader.result)
                     }
                     reader.readAsDataURL(e[0]);
           }

           const onChangePosition = async(e)=>{
           	   let value = await e.target.value
           	   if(value.length > 0 && value.length <= 70){
           	   	  setPosition(value)
                  setValidateTextP("valid")
                  setValidateP("");
                  setSuccessP("Great!");
           	   }else if(value.length > 70){
                  setValidateTextP("invalid")
                  setSuccessP("");
                  setValidateP("70 characters allowed");
           	   	  return null
           	   }else if(value.length <= 0){
                  setPosition("")
                  setValidateTextP("")
                  setSuccessP("");
                  setValidateP("");
                     return null
           	   }else{
           	   	return null;
           	   }
           }

           const onChangeCompany = async(e)=>{
               let value = await e.target.value
               if(value.length > 0 && value.length <= 15){
                  setCompany(value)
                  setValidateTextC("valid")
                  setValidateC("");
                  setSuccessC("Great!");
               }else if(value.length > 15){
                  setValidateTextC("invalid")
                  setValidateC("");
                  setValidateC("15 characters allowed");
                  return null
               }else if(value.length <= 0){
                  setCompany("")
                  setValidateTextP("")
                  setSuccessP("");
                  setValidateP("");
                  return null
               }else{
                return null;
               }
           }

           const onChangeEmail = async(e)=>{

           	   let value = await e.target.value
           	   if(value.length > 0 && value.length <= 25){
           	   	  setEmail(value)
           	   }else if(value.length > 25){
           	   	  return null;
           	   }else if(value === ""){
           	   	swal({title:'Oops!',button:false,text:'email should not empty',icon:'info',timer:1500});
                     setEmail("");
           	   }else{
           	   	return null;
           	   }
           }

              const onChangePassword=(e)=>{
               let value = e.target.value
               if(value.length > 0 && value.length <= 18){
                  setPassword(value)
               }else if(value.length > 18){
                  return null
               }else if(value === ""){
                     setPassword("");
                     return null
               }else{
                return null;
               }
           }
              const onChangeConfirmP=(e)=>{
               let value = e.target.value
                     if(value.length === 19 && password !== ""){
                      swal({title:'Oops!',button:false,text:'please match your password',icon:'info',timer:1500});
                      return null;
                     }else if(value === ""){
                            return;
                     }else if(value.length > 0 && password === ""){
                        swal({title:'Oops!',button:false,text:'please input password first!', icon:'info',timer:1500});
                     }else{
                      setConfirmed(value)
                     }     
           }
     
   const submits=(e)=>{
   	e.preventDefault()

   	   if(firstname  !== "" && lastname !== "" && image !== "" && address !== "" && contact !== "" && company !== ""
   	      && email !== "" && position !== ""){

         if(password === confirmp && (password !== "" && confirmp !== "")){
                  return Swal.fire({
                      width:'90',
                      showConfirmButton:false,
                      timer:1200,
                      didOpen:(e)=>{
                         Swal.showLoading()
                      }
                   }).then(async(result)=>{
                    const data = { firstname, lastname, address, company, email, contact, position, image, password}
                    await dbClientUser.client.add(data);
                    if(result.dismiss  === Swal.DismissReason.timer){
                         Swal.fire({
                                title:'Completed',
                                icon:'success',
                                timer:1000,
                                text:'Submitted',
                                showConfirmButton:false
                          }).then((result)=>{
                                Swal.fire({title:'Congratulation!',text:'You have successfully Registered with Us!',icon:'info',showConfirmButton:false,timer:1500})
                                setTimeout(()=>{setClientdata(data)},1500)
                                return[
                                   setFirstname(""),
                                   setLastname(""),
                                   setAddress(""),
                                   setContact(""),
                                   setCompany(""),
                                   setEmail(""),
                                   setPosition(""),
                                   setConfirmed(""),
                                   setFileImage(""),
                                 ]
                              
                          })
                       }
                     })     
              
             }else{
               Swal.fire({title:'Password do not match!',showConfirmButton:false,html:'<b>please checked input password!</b>',icon:'question',timer:2000});
             }
           
       }else{
          Swal.fire({title:'Empty field!',showConfirmButton:false,html:'<b>please checked empty field!</b>',icon:'info',timer:2000});            
       }
}    
      function clearField(e){
      	  e.preventDefault();
      	  Swal.fire({
      	  	  title:'CLEAR FIELD!',
      	  	  showDenyButton:true,
      	  	  confirmButtonText:`yes`
      	  }).then((result)=>{
      	  	   if(result.isConfirmed){
      	  	   	   Swal.fire({title:'Field is cleared!',icon:'info', showConfirmButton:false,timer:700});
                    return[
                       setFirstname(""),
                       setLastname(""),
                       setAddress(""),
                       setContact(""),
                       setCompany(""),
                       setEmail(""),
                       setPosition(""),
                       setPassword(""),
                       setConfirmed(""),
                       setFileImage(""),
                     ]
      	  	   }else{
      	  	   	  return;
      	  	   }
      	  })
      }
   
  switch(password){
   case clientdata.password:{
    return <Redirect to="/client-path" /> // this will redirect to CustomerHome after registration succeed
  }
    default:{
      return <div id="html">
              <div id="body">
              <Space />
                <div className="modal-register"></div>   
                   <div className="card-panel modal-content-register z-depth-4">
              <Center>
                  <Row>
                  <Form>                     
                       <i className="material-icons"><VscChromeClose className="right close_register pulse text-darken-4 prefix" onClick={props.hide} /></i>
                         <Img style={{marginTop:'-35px'}} src={vertexLogo} w="70" h="70" className="circle z-depth-2 hoverable" description="vertex-logo" />
                       <h4 style={{marginTop:'-8px'}} className="grey-text">Membership Account</h4>

                     <Cols s12 className="firstName-error">
                        <Inputfield label="Firstname" validateStatus={validateTextF} error={validateF} success={successF} v={firstname} onChange={e=>onChangeFirstname(e)} text s6 m6 l6 icon={null} />
                         <Inputfield label="Lastname" validateStatus={validateTextL} error={validateL} success={successL} v={lastname} onChange={e=>onChangeLastname(e)} text s6 m6 l6 required icon={null} />
                     </Cols>

                     <Cols s12>
                           <Inputfield label="Address" validateStatus={validateTextA} success={successA} error={validateA} v={address} onChange={e=>onChangeAddress(e)} text s6 m6 l6 required icon={null}/>
                           <Inputfield label="Contact" v={contact} onChange={e=>onChangeContact(e)} number s6 m6 l6 required icon={null} />
                    </Cols>

                       <Cols s12>
                           <Inputfield label="Email" v={ email } onChange={e=>onChangeEmail(e)} email s6 m6 l6 required icon={null} />
                           <Inputfield label="Position" validateStatus={validateTextP} v={position } error={validateP} success={successP} onChange={e=>onChangePosition(e)} text s6 m6 l6 required icon={null} />
                       </Cols>

                       <Cols s12>
                           <Inputfield label="Password" v={password } onChange={e=>onChangePassword(e)} password s6 m6 l6 required icon={null}/>
                           <Inputfield label="Confirm Password" v={confirmp } error="not greater than 18 characters" l="18" onChange={e=>onChangeConfirmP(e)}  password s6 m6 l6 required icon={null} />
                       </Cols>
                       <Cols s12>
                             <Inputfield  validateStatus={validateTextC} v={company} error={validateC} success={successC} label="Company name" onChange={e=>onChangeCompany(e)} text s6 m6 l6 required icon={null} />
                             <Inputfield btnType="btn btn-small cyan" name="File" onChange={e=>onChangeFileImage(e.target.files)} file s6 m6 l6 required icon={null} />
                       </Cols>
                     <Row style={{marginTop:'-45px'}}>
                      <Cols s6 m7 l7></Cols>
                       <Cols s2 m2 l2 className="left pull-s1 pull-m1 pull-l1"><ButtonM onClick={e=>submits(e)} submit cyan waves waveslight small btn name="Post" /></Cols>
                       <Cols s4 m3 l3 className="left"><ButtonM onClick={e=>clearField(e)} btn small cyan waves waveslight name="clear" /></Cols>
                     </Row>                   
                  </Form>
               </Row>  
            </Center>
           </div>
         </div>
       </div>
    }
  }
}
