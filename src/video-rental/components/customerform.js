
import React from 'react';

import Grid from '@mui/material/Grid';

import Box from '@mui/material/Box';

import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

import *as W from '../../lib';

function UserForm (props){
    
  const {

    fname,

    lname,

    email,

    address,

    contact,

    age,

    gender, 

    dis, 

    dos,

    handleFirstname,

    handleLastname,

    handleEmail,

    handleAddress, 

    handleContact,

    handleAge,

    handleGender,

    handleUpdate,

    handleCreate,

    ref,

    handleCancel,

     } = props;

     const isIdEmty = props.userId;

     const breakpoints = isWidthUp('sm', props.width);

     const idRef = <Grid item xs={12}>
                     <W.Inputfield v={props.userId} outlined required number disabled label="ID" fullWidth small id="outlined-disabled" />
                   </Grid>

     const tinyRef = <Grid item xs={12}>
                     <W.Inputfield v={props.userId} outlined required number disabled label="ID" fullWidth tiny id="outlined-disabled" />
                   </Grid>
return <React.Fragment>
  { breakpoints ? <W.ToggleShow toggle={dis} className={dos ? " animated zoomOut " :" "}>
                   <W.Wrapper width="100%" color="inherit" height="100%" left="2px"  className={dis ? " animated zoomIn " :" "}>
                   <W.Typographyui noWrap sx={{flexGrow:1,my:3,}} whatsapp h6 div sansseriff shadowlightgrey uppercase bold textContent={isIdEmty ? "Update Customer" :"Create User"} />
                      <Box component="form"
                            sx={{
                              '& .MuiTextField-root': { width: '25ch' }
                            }}
                               noValidate
                               autoComplete="off"
                        >
                      <Grid item container spacing={3}>

                      { isIdEmty === 0 ? null : breakpoints ? idRef : null } 

                         <Grid item xs={12} sm={6}>
                          <W.Inputfield v={fname} fullWidth label="First Name" id="outlined-error-helper-text" text small onChange={handleFirstname} outlined/>
                         </Grid>

                         <Grid item xs={12} sm={6}>
                          <W.Inputfield v={lname} text small fullWidth label="Last Name" onChange={handleLastname} outlined/> 
                         </Grid>

                         <Grid item xs={12} sm={6}>
                          <W.Inputfield v={email} text ref={ref} small fullWidth label="Email" onChange={handleEmail} outlined/> 
                         </Grid>

                         <Grid item xs={12} sm={6}>
                          <W.Inputfield v={address} text small fullWidth label="Address" onChange={handleAddress} outlined/> 
                         </Grid>

                         <Grid item xs={12} sm={6}>
                          <W.Inputfield v={contact} number small fullWidth label="Contact" onChange={handleContact} outlined/> 
                         </Grid>

                         <Grid item xs={12} sm={6}>
                          <W.Inputfield v={age} text small fullWidth label="Age" onChange={handleAge} outlined/> 
                         </Grid>

                         <Grid item xs={12} sm={6}>
                          <W.Inputfield v={gender} text fullWidth small label="Gender" onChange={handleGender} outlined/> 
                         </Grid>

                         <Grid item xs={12} sm={6}>

                            <Grid item container spacing={2} justifyContent="evenly" alignContent="center">
                              <W.Col item auto>
                               <W.Buttonui maxWidth medium contained primary whatsapp name={isIdEmty === 0 ? "create":"update"} onClick={ props.onClick} />
                              </W.Col>

                              <W.Col item auto acenter>
                                <W.Buttonui maxWidth medium contained color="tertiary" name="cancel" onClick={handleCancel} />
                              </W.Col>    
                            </Grid>   

                         </Grid>
                       </Grid>  
                     </Box>  
                   </W.Wrapper>
           </W.ToggleShow> :

            <W.ToggleShow toggle={dis} className={dos ? " animated zoomOut " :" "}>
                   <W.Wrapper width="100%" color="inherit" height="100%" left="2px"  className={dis ? " animated zoomIn " :" "}>
                   <W.Typographyui noWrap sx={{flexGrow:1,my:3,}} whatsapp h6 div sansseriff shadowlightgrey uppercase bold textContent={isIdEmty ? "Update Customer" :"Create User"} />
                      <Box component="form"
                            sx={{
                              '& .MuiTextField-root': { width: '25ch' }
                            }}
                               noValidate
                               autoComplete="off"
                        >
                      <Grid item container spacing={3}>

                       { isIdEmty === 0 ? null : breakpoints ? null : tinyRef } 

                         <Grid item xs={12} sm={6}>
                          <W.Inputfield v={fname} fullWidth InputLabelProps={{
                                                                                    shrink: true,
                          }} label="First Name" id="outlined-error-helper-text" text tiny onChange={handleFirstname} outlined/>
                         </Grid>

                         <Grid item xs={12} sm={6}>
                          <W.Inputfield v={lname} text tiny fullWidth InputLabelProps={{
                                                                                    shrink: true,
                          }} label="Last Name" onChange={handleLastname} outlined/> 
                         </Grid>

                         <Grid item xs={12} sm={6}>
                          <W.Inputfield v={email} text tiny fullWidth InputLabelProps={{
                                                                                    shrink: true,
                          }} label="Email" onChange={handleEmail} outlined/> 
                         </Grid>

                         <Grid item xs={12} sm={6}>
                          <W.Inputfield v={address} text tiny fullWidth InputLabelProps={{
                                                                                    shrink: true,
                          }} label="Address" onChange={handleAddress} outlined/> 
                         </Grid>

                         <Grid item xs={12} sm={6}>
                          <W.Inputfield v={contact} number tiny fullWidth InputLabelProps={{
                                                                                    shrink: true,
                          }} label="Contact" onChange={handleContact} outlined/> 
                         </Grid>

                         <Grid item xs={12} sm={6}>
                          <W.Inputfield v={age} text tiny fullWidth InputLabelProps={{
                                                                                    shrink: true,
                          }} label="Age" onChange={handleAge} outlined/> 
                         </Grid>

                         <Grid item xs={12} sm={6}>
                          <W.Inputfield v={gender} text tiny fullWidth InputLabelProps={{
                                                                                    shrink: true,
                          }} label="Gender" onChange={handleGender} outlined/> 
                         </Grid>

                         <Grid item xs={12} sm={6}>

                            <W.Row container item s1 even acenter>
                              <W.Col item auto>
                               <W.Buttonui maxWidth tiny contained primary whatsapp name={isIdEmty === 0 ? "create":"update"} onClick={ props.onClick} />
                              </W.Col>

                              <W.Col item auto >
                                <W.Buttonui maxWidth tiny contained color="tertiary" name="cancel" onClick={handleCancel} />
                              </W.Col>    
                            </W.Row>   

                         </Grid>
                       </Grid>  
                     </Box>  
                   </W.Wrapper>
           </W.ToggleShow>
         };
      </React.Fragment>
};
 
 export default withWidth()(UserForm);
