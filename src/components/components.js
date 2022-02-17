
import PropTypes from 'prop-types';

import React,{ Component, Fragment, } from 'react';

import { Link, } from 'react-router-dom';
//>>>>>>>>>>Materialize <<<<<<<<<<<<<<<<<<<
import {CardPanel, Row, Card, Dropdown, Button, Col } from 'react-materialize';
// import { IconContext } from 'react-icons';

//>>>>>>>>>>>IMAGES<<<<<<<<<<<<<<<<<
import halfIcon from '../images/vertex-half-icon.png';
import imgVFamily from '../images/vertex-family.jpg';
import imgHalfBanner from '../images/vertex-half-banner.png';
import vGear from '../images/vertex-gear.jpg';
import webDesign from '../images/webdesign.png';
import vTransition from '../images/vertex-transition.jpg';
import acControl from '../images/vertex-banner-access-control.png';

//>>>>>>>>>>>>>>FRONT END LIBRARY <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
import { Center, Space, Cols, } from './wrapper';

//>>>>>>>>>>>>>> SWEETALERT <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// import Swal from 'sweetalert2';

//>>>>>>>>>>>>>REACT ICONS <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
import { MdClose, } from "react-icons/md";

// >>>>>>>>>>>>>>>>COMPONENTS<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
import Sdata from './servicedata'; //this would not work when using React.lazy method
// import Cctv, { Biometrics, TurnStyles, CardScanners, Xpassed, FormAdd } from './productcontent/productpage';

// import ServiceNavigation from './services-navigation';


export default class Services extends React.Component{
      
   constructor(props){
      super(props);
      this.ToggleClass = this.ToggleClass.bind(this);
      this.state = {isActive:'string'}
   }

     ToggleClass(e){
          this.setState({isActive:!this.state.isActive});
     }

   render(){
    const {imgOne,imgTwo,title,intro,id,imgThree,description,imgTitleOne,imgTitleTwo,imgTitleThree,imgUrl} = this.props;
    return(
                <CardPanel className="cyan darken-1" style={{backgroundImage:`url(${imgUrl})`}} id="flow_text_demo">
                     <h4 style={{color:'white'}} className="services-intro">{intro}</h4>
                            <Col s={4} m={4} l={4} className="center">
                               <div style={{backgroundImage:`url(${imgOne})`}} className="card" id={id}>{imgTitleOne}</div>
                            </Col>
                            <Col s={4} m={4} l={4} className="center">
                               <div style={{backgroundImage:`url(${imgTwo})`}} className="card white" id={id}>{imgTitleTwo}</div>
                            </Col>
                            <Col s={4} m={4} l={4} className="center">
                               <div style={{backgroundImage:`url(${imgThree})`}} className="card white" id={id}>{imgTitleThree}</div>
                            </Col>
                       <p className="text-u">My plan in the Future</p>
                         <a href="#!" onClick={this.ToggleClass} className="btn btn-small waves-effect waves-ripple cyan left animated infinite shake">Make me Big!</a>
                        <h4 className="center solution-design">{title}</h4>
                        <Space />
                        <p>
                          <span style={{color:'white',textShadow:'1px 1px 2px black'}} className={(this.state.isActive) ? 'isSmall':'isLarge'}>{description}</span>
                        </p>
               </CardPanel>  
       );
     } 
  }  

  export class DropdownLink extends Component{
    render(){
     const { node, name, children, id, className, onClick } = this.props;

      return(
            <Dropdown id={id}
                      trigger={<Button node={node} onClick={onClick} className={className}>{name}</Button>}
                      options={{
                      alignment: 'left',
                      constrainWidth:true,
                      hover:false,
                      coverTrigger:true,
                      inDuration:150,
                      outDuration:200
                   }}>
                   {children}
            </Dropdown>
          );
       }
}

  class DeviceItem extends Component{
       
    render(){

     const {title, viewItem, desc,price,src,children,referenceId, addToCart, bookThis, idValue} = this.props

     return( 
       <div className="col s6 m4 l4 xl3 hide-this"> 
       <div className="play-aria">
         <div className="card" id="card">
                 <div className="card-image waves-effect waves-block waves-ripple waves-light">
                   <img alt="undefined" className="activator"  width="180" height="180" src={src} />
                   <span className="card-title pink-text darken-1 left">{title}</span>
                 </div>  
                     <span className="red-text center">&nbsp;&nbsp;&#x20b1;{price}</span>
                              {children}
                  <div className="card-content card-content-edited-important">            
                       <Row>
                         <Cols s12>
                            <Cols s6 style={{height:'50px',lineHeight:'50px',padding:'0 0 0 16px'}} className="book-me" >
                              <button value={referenceId} onClick={bookThis} className="red-text book-me-edited">Book</button>
                            </Cols>
                         
                            <Cols s6 style={{height:'50px',lineHeight:'50px',padding:'0 0 0 16px'}} className="add-to-cart" >
                              <button value={referenceId} onClick={addToCart} className="red-text btn-edited">Buy</button>
                            </Cols>
                         </Cols>
                       </Row>   
                         <Center className="grey lighten-1">
                            <Space />
                             <button value={idValue} onClick={viewItem} className="preview-edited cyan-text">PREVIEW</button>
                             <Space />  
                         </Center>
                        <div className="card-reveal">
                            <span className="card-title">{title}<i className="material-icons red-text right">close</i></span>
                            <p>{desc}</p>
                        </div>
                  </div>
              </div>      
         </div>
       </div> 
      );
    }
}

DeviceItem.propTypes = {
   title:PropTypes.string,
   viewItem:PropTypes.func,
 };



export class View extends Component{render(){
    const { image, title, desc, price, change, onClick } = this.props
     return(
             <div className={change}>
              <div className="modal-card">
                <div className="modal-content">
                  <div className="card">
                      <img alt="undefined" className="circle" width="150" height="150" src={image} />
                  </div>
                  <h4>{title}</h4>
                    <MdClose onClick={onClick} className="close" />
                     <p>{price}</p>
                     <span>{desc}</span>
                </div>
              </div> 
             </div>
           )
    }
  }

  export class Devices extends Component{
  render(){
    const { viewItem, clickAddToCart, details, bookThis, } = this.props
    const output = this.props.data.map(({id, title, price, desc, image, index})=>{
     return(
               <Fragment key={id}>
                  <DeviceItem   //parent component
                          key={id} 
                viewItem={viewItem} 
                  attribTitle={title}
                        price={price}
                        title={title} 
                          src={image}
                      idValue={id}
                      bookThis={bookThis}
                      referenceId={id}
                       addToCart={clickAddToCart}
                         desc={desc}>
                             {details}
                  </DeviceItem>
                </Fragment>   
      )
    },[]);

      return (
              output 
        );  
  }  
}

Devices.propTypes = {
  viewItem:PropTypes.func,
};

export const Links=(props)=> {
   const { children } = props;
    return(
         <Row className="adjust-top">
             <Col s={12} m={9} l={10} xl={10} className="adjust-col-top lighten-2">
                 {children}
             </Col>
              <Col m={3} l={2} xl={2}>
                     <Card className="adjust-sidenav-to-left hide-on-small-only">
                           <ul className="collapsible collapsible-edited">
                             <li>
                              <div className="collapsible-header">
                                 <Col s={12} className="center">
                                   {/*<MdDonutLarge className="prefix left tiny"/>*/}
                                  <Link to="cctv-cards">Surveilance</Link>
                                 </Col>  
                              </div> 
                             </li> 

                             <li> 
                               <div className="collapsible-header"> 
                                  <Col s={12} className="center">
                                   {/*<DiApple className="prefix left tiny"/>)*/}
                                    <Link to="/biometric-cards">Biometrics</Link>
                                  </Col>
                              </div> 
                             </li>  

                              <li>  
                              <div className="collapsible-header">
                                 <Col s={12} className="center">
                                     {/*<VscTelescope className="prefix left tiny" />*/}
                                  <Link to="/turnstyle-cards">Turn style</Link>
                                 </Col> 
                              </div> 
                             </li>  

                              <li>  
                               <div className="collapsible-header">
                                 <Col s={12} className="center">
                                   {/*<DiAtlassian className="prefix left tiny"/>*/}
                                   <Link to="/cardscanner-cards">Card Scanner</Link>
                                 </Col>   
                               </div> 
                             </li>  
                               <li>  
                               <div className="collapsible-header">
                                 <Col s={12} className="center">
                                   {/*<DiLinux className="prefix left tiny"/>*/}
                                    <Link to="/xpass-cards">Xpass Card</Link>
                                 </Col>   
                               </div>  
                             </li>

                               <li>  
                               {/*<div className="collapsible-header">
                                 <Col s={12} className="center">
                                   <DiApple className="prefix left tiny"/>
                                    <Link to="/add-form">Add Item</Link>
                                 </Col>   
                               </div>  */}
                             </li>
                                   
                           </ul>
                           <div className="card-panel small">
                               <h5>Register with 30% Discount</h5>
                           </div>
                     </Card>
             </Col>  
         </Row>
    );
}

export class ServiceData extends Component{
  render(){
      const serviceData = Sdata.map((item, index)=>{
     return(
          <Services key={item.id}      
                  imgUrl={item.image}
                   title={item.title}
             description={item.description}
                      id={item.nameId}
                   intro={item.intro}
                  imgOne={item.imgOne}
             imgTitleOne={item.imgTitleOne}
                  imgTwo={item.imgTwo}
             imgTitleTwo={item.imgTitleTwo}
                imgThree={item.imgThree}
           imgTitleThree={item.imgTitleThree}
          />
         );
       })  
     return serviceData;
    } 
  }

export class ServicesContent extends React.Component{

render(){
  return(
        <div className="adjust-second-row">
           <div className="col s12">
             
                      <div className="col s12 m6 l6 cyan" id="services">
                          <ServiceData />
                      </div>

                       <div className="col s12 m6 l6">
                           <div id="servicegrid">
                             <ServiceGrid />
                           </div>   
                       </div>
           </div>
        </div>    
      );
  }
}

export class ServiceGrid extends React.Component{

  render(){
    return(
         <>
                     <div className="col s6 m6 l6">
                        <div style={{backgroundImage:`url(${vTransition})`}} className="card" id="second-row-right-grid-gear">Card nothing</div>
             </div>

                   <div className="col s6 m6 l6">

                        <div style={{backgroundImage:`url(${imgHalfBanner})`}} className="card col s12 center" id="second-row-right-grid">
                                  <img src={halfIcon} className="circle half-banner-icon" alt="rediculus"/>
                        </div>
                   </div>

                     <div  className="col s12" id="background-right-grid-full">
                        <div style={{backgroundImage:`url(${webDesign})`}} className="card cyan darken-4" id="second-row-right-grid-full">Card 3 full</div>
                   </div>

                    <div className="col s6 m6 l6">

                      <div className="col s12 center">
                        <div style={{backgroundImage:`url(${imgVFamily})`}} className="card" id="second-row-left-grid-vertex-family">Vertex-family</div>
                      </div>  
                   </div>

                   <div className="col s6 m6 l6">
                        <div style={{backgroundImage:`url(${vGear})`}} className="card" id="second-row-right-grid-transition">Card 5</div>
                   </div>

                       <div className="col s12">
                        <div style={{backgroundImage:`url(${acControl})`}} className="card" id="second-row-right-grid-full-access-control">Card 3 full</div>
                      </div>
       </>               
      );
  }
}

export class SeFooterContent extends React.Component{
  render(){
           
           return <footer className="teal z-depth-2 page-footer footer-adjust">
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
  }
}



