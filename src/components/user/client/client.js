
import React, { useState, useEffect } from 'react';

import { useRouteMatch, Switch, Route } from 'react-router-dom';

import { useSelector } from 'react-redux';

import M from 'materialize-css';

import { Routing } from './route';

import ClientNav  from './clientnav';

import { dbClientUser } from '../../../dexie';

import RequestMaintenance from './request-maintenance';

import ReportAnIssue from './report-an-issue';

import { GiGears } from 'react-icons/gi';

import { CctvDevice, BiometricDevice, TurnstyleDevice, XpassDevice, CardScannerDevice } from './route';

import{ ItemStore } from './itemstore';

import ViewInbox from './view-inbox';

import { Purchasedhistory } from './purchase-history';

import { SiMicroDotBlog } from 'react-icons/si';

import { GrTroubleshoot } from 'react-icons/gr';

import { IoStorefrontSharp } from 'react-icons/io5';

import { VscIssues } from 'react-icons/vsc';

import ClientSidebar from './clientsidebar';

import  BlogReview  from './blogreview';

import parentfour from '../../../images/workshop-parent-four.jpg';

import { getTimeAgoString, Row, Card, Img, Space, Cols, Panel, Center, Collection, ColItem, TargetLinks, RelatedTopic,Colheader } from '../../wrapper';

export function CustomerHome (props){

const purchase = useSelector((state)=>state.TableStore)

const invoices = useSelector((state)=>state.RegisterTable.purchase)

const CCTV = useSelector((state)=>state.Cctv);

const [flag, setFlag] = useState("");

const items = purchase.map((state)=>state.id)

const { url, path } = useRouteMatch();

const [state, setState ] = useState({
    commentRef:0,
    purchaseRef:0,
    messageCount:0,
    // timesince:'',
});

const { timesince, commentRef, purchaseRef, messageCount, } = state;

const invoicesLength = invoices !== undefined ? invoices.filter(state=>state.password === props.data.password ? state : '') :'';

const data = props.data;

useEffect(()=>{

  items.length > 0 ? setFlag("swing") : setFlag("hinge");
},[setFlag, items.length]);

const handleRefId=(e)=>{
     setState({...state,commentRef:e});
}

const handleRefPurchaseId=(e)=>{
     setState({...state,purchaseRef:e})
}

const handleMessageCount=(e)=>{
      setState({...state,messageCount:e})
}

// const TimeAgo=(timer,callback)=>{
//       return callback = getTimeAgoString(timer)
// }

useEffect(()=>{
  // const time = Math.floor(new Date());
  //     setInterval(()=>{
  //         const timer = TimeAgo(time);
  //            // setState((state)=>({...state,timesince:timer}));
  //     },1000)    

   const slider = document.querySelector('.slider')  
   M.Slider.init(slider,{
     height:170,
     duration:250,
     interval:4000,
     indicators:false,
   })

   const dropdownUser = document.querySelector('.dropdown-trigger')
   M.Dropdown.init(dropdownUser,{
     hover:true,
     constrainWidth:false,
     inDuration:150,
     outDuration:250,
     autoTrigger:false,
   });

},[]);

try{
	return (
          <>
          <ClientNav Logout={props.Logout} data={data} name={data.firstname}/>
            <Row className="white darken-4 row-clientnav-adjust" s12> 
            	   <Cols m4 l3 className="hide-on-small-only">
            	      <Collection> 
                        <ColItem>
            	            <ClientSidebar data={data} messageCount={messageCount} flag={flag} purchaseItemCount={items.length} invoiceCount={invoicesLength.length} />
                        </ColItem>
            	        <ColItem className="table-of-contents-edited">
                        <ul className="table-of-contents">
                          <li style={{position:'relative',top:'-35px'}}><h4 className="center black-text">Management</h4></li>
                          <TargetLinks link={`${url}/request-maintenance`} name="Request Maintenance" icon={<GiGears className="cyan-text tiny" />} />
                          <TargetLinks link={`${url}`} name="Store" icon={<IoStorefrontSharp className="cyan-text tiny" /> } />
                          <TargetLinks link={`${url}/blog-review`} name="Trouble Shooting Discussion" icon={<GrTroubleshoot className="cyan-text tiny"/>} />
                          <TargetLinks link={`${url}/trouble-discussion`}  name="Blog Review" icon={<SiMicroDotBlog className="cyan-text tiny" /> } />
                          <TargetLinks link={`${url}/report-an-issuee`} name="Report an Issue" icon={<VscIssues className="cyan-text tiny" />} />
                        </ul>
                         <Card className="z-depth-4">
                            <Collection className="with-header">
                              <Colheader>
                                <div style={{display:'flex',justifyContent:'center',alignContent:'center', width:'100%',flexDirection:'row',flexGrow:1}}>
                                   <div style={{alignSelf:'center'}}>
                                        {`<<Transaction Record>>`}
                                   </div>
                                </div>
                              </Colheader>
                               { invoices !== undefined ? invoices.map(item=>{
                                   if(data.password === item.password){
                                 return <ColItem key={item.id}>
                                           <span className="black-text">{item.isConfirmedPurchase ? `Your purchased were delivered on ${item.date}` :<div>You have <i className="red-text">pending</i> purchase</div>}</span>
                                        </ColItem>
                                  }      
                                  }) : null
                               }
                             </Collection>  
                         </Card>    
                        </ColItem>
            	      </Collection>
                   </Cols>

                      <Cols s12 m8 l7 className="allow-scroll">
                             <Collection>
                                <ColItem>
                                <div>
                                  <Switch>
                                    <Route exact path={`${path}`}>
                                        <Routing />
                                    </Route>
                                    <Route path={`${path}/blog-review`} >
                                      <BlogReview users={data} commentRefId={commentRef} />
                                    </Route>
                                    <Route path={`${path}/request-maintenance`} >
                                      <RequestMaintenance user={ data }/>
                                    </Route>
                                    <Route path={`${path}/cctv-cards`} >
                                      <CctvDevice />  
                                    </Route>
                                    <Route path={`${path}/biometric-cards`} >  
                                        <BiometricDevice /> 
                                    </Route>
                                    <Route path={`${path}/report-an-issuee`} >  
                                        <ReportAnIssue /> 
                                    </Route>
                                    <Route path={`${path}/xpass-cards`} >  
                                        <XpassDevice />
                                    </Route>
                                    <Route path={`${path}/cardscanner-cards`} >  
                                        <CardScannerDevice />
                                    </Route>
                                    <Route path={`${path}/turnstyle-cards`} >  
                                        <TurnstyleDevice />
                                    </Route>
                                    <Route path={`${path}/purchase-history`}>
                                          <Purchasedhistory userId={data} refId={e=>handleRefPurchaseId(e)} />
                                    </Route>  
                                    <Route path={`${path}/table-of-purchased`}>
                                      <ItemStore purchaseInfo={data} />
                                    </Route>
                                    <Route path={`${path}/inbox-view`}>
                                      <ViewInbox timeago={null} user={data} purchaseRef={purchaseRef} messageCount={handleMessageCount} commentRefId={handleRefId} />
                                    </Route>
                                  </Switch>
                                </div>
                              </ColItem>
                          </Collection>
                      </Cols>
                        
                   <Cols l2 className="hide-on-med-and-down">
                     <Card>
	                     <Center>
	                          <div className="slider">
                              <ul className="slides">
                              {
                                 CCTV !== undefined ? CCTV.map((item,index)=>{
                                    return <li key={item.id}>
                                            <Img src={item.image} w="40" h="40" description={item.id}/>   
                                            <div className="caption center-align">
                                              <h6 className="green-text darken-2" style={{textShow:'1px 1px 2px black'}}>{item.title}</h6>
                                              <h5 className="red-text darken-3" style={{textShadow:'1px 2px 3px white'}}>{item.desc}</h5>
                                            </div>
                                          </li>
                                 }) : null
                              }
                              </ul>
                            </div>
	                     </Center>  
                     </Card> 

                     <Panel>
                       <h4>Trending News</h4>
                     </Panel> 
                     
                        <Collection className="with-header" style={{height:'180px',overflow:'auto',overflowX:'hidden'}}>
                        	<Colheader className="center cyan-text text-darken-2">
                        	   Related Topic
                        	</Colheader>
                        	<RelatedTopic comments="Offline Viewing" src={parentfour}/>
                        	<RelatedTopic comments="Reliable Network" src={parentfour}/>
                        	<RelatedTopic comments="Scalable Solution" src={parentfour}/>
                        	<RelatedTopic comments="Security Solution" src={parentfour}/>
                        	<RelatedTopic comments="Power Down & power up Solution" src={parentfour}/>
                        	<RelatedTopic comments="Prevention of Recording" src={parentfour}/>
                        	<RelatedTopic comments="No Monitoring on previous recording" src={parentfour}/>
                        </Collection>
                
                   </Cols>
             </Row> 
                <footer className="page-footer cyan darken-4">
                  <div className="container">
                    <div className="row">
                      <div className="col l6 s12">
                        <h5 className="white-text">Footer Content</h5>
                        <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
                      </div>
                      <div className="col l4 offset-l2 s12">
                        <h5 className="white-text">Links</h5>
                        <ul>
                          <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
                          <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
                          <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
                          <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="footer-copyright">
                    <div className="container">
                    © 2014 Copyright Text
                    <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
                    </div>
                  </div>
                </footer>
         </> 
	    ); 
   }catch{
   console.error('Error rendering client.js');
   }
	}
