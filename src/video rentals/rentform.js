import React from 'react';

function RentalForm(props){

	  return (
			  	  <div id="html">
		              <div id="body">
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
	  	)
}