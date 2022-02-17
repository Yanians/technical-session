
import React, { Fragment } from 'react';

import { connect } from 'react-redux';

import { useRouteMatch, useHistory, } from 'react-router-dom';

import { L } from './view-inbox';

import { Space, Cols, Row } from '../../wrapper'
// import parentfour from '../../../images/workshop-parent-four.jpg';
import { HiOutlineMailOpen, HiOutlineMail } from 'react-icons/hi';

import { TiShoppingCart } from 'react-icons/ti';

function  ClientSidebar(props){

       const history = useHistory();

       const { url } = useRouteMatch();

       const { data, itemsLength } = props;

       const handleClick=(e)=>{
           e.preventDefault()
           history.push('/client-path/purchase-history');
       };

       const handleTableOfPurchase=(e)=>{
            e.preventDefault();
            history.push('/client-path/table-of-purchased');    
       };

       const handleInboxView=(e)=>{
            e.preventDefault();
            history.push('/client-path/inbox-view');
       };

          return(
            <Fragment>
                 <Row>
                      <Space />
                     <Cols s4></Cols>
                     <Cols s4 className="center">
                         <img alt="undefined" className="img circle" src={data.image} width="50" height="50" />
                     </Cols>
                     <Cols s4></Cols>
                     <Cols s12>
                        <h6  className="center grey-text">Welcome {data.firstname}</h6>
                     </Cols>
                 </Row>  

                <Space />

                     <Row>
                           <Cols s4>
                               <div className="notification col s12">
                                   {props.invoiceCount ? <span className="badges">{props.invoiceCount}</span> : null}
                                   <div onClick={handleClick} className="btn-div">
                                      <HiOutlineMailOpen className="mdemail yellow-text  text-darken-3" />
                                    </div>
                               </div>
                              
                           </Cols>

                          <Cols s4>
                               <div className="notification col s12">
                                 {props.purchaseItemCount ? <span className="badges">{props.purchaseItemCount}</span> : null}
                                 <div className="btn-div" onClick={handleTableOfPurchase}>
                                    <TiShoppingCart className={"pink-text mdshoppingcart " +props.flag} />
                                 </div>
                               </div>
                                 
                          </Cols>
                        
                          <Cols s4>
                             <div className="notification col s12">
                               {props.messageCount ? <span className="badges">{props.messageCount}</span> : null}
                               <div className="btn-div" onClick={handleInboxView}>
                                  <HiOutlineMail className="pink-text text-accent-4 mddrafts" />
                               </div>
                             </div>
                                
                          </Cols>
                     </Row> 
      
               </Fragment>  
              )
    }


const mapStateToProps=state=>{
    return {
      messageCount:state.RegisterTable.messageCount,
    }
}

export default connect(mapStateToProps)(ClientSidebar);
    
