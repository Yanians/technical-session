
import React,{ Fragment } from 'react';

import { DropdownLink } from './components';

import leftLogo from '../images/vertex-logo.png';

import rightLogo from '../images/vertex-logo-small.png';

import { Dropdown } from 'react-materialize';

import { connect } from 'react-redux';

import M from 'materialize-css';

import { Link } from 'react-router-dom';

import Swal from 'sweetalert2';

import { MdDashboard } from 'react-icons/md';

import  { MdMenu } from 'react-icons/md';

import { MdNotificationsNone } from 'react-icons/md';

import { MdArrowDropDown }  from 'react-icons/md';

import { MdSearch } from 'react-icons/md';

import { RegisterUser } from './user/credential/registerpage';

import  Login  from './user/credential/loginpage';

import { UserLink, getTimeAgoString, } from './wrapper';

class ServiceNavigation extends React.Component{

        constructor(props){
          super(props)
          this.show = this.show.bind(this);
          this.fromRedirect = this.fromRedirect.bind(this);
          this.redirectLogin = this.redirectLogin.bind(this);
          this.hide = this.hide.bind(this);
          this.showlogin = this.showlogin.bind(this)
          this.hidelogin = this.hidelogin.bind(this);
          this.showRegisterForm = this.showRegisterForm.bind(this);
          this.state = {
            toggle:["default-none"],
            showLogin:["default-none"],
            notifyLength:this.props.tableStore.length,
            timeAgo:'',
          }  
          this.notification = [
              {
               text:'A new order has been completed',
               icon:<MdNotificationsNone />,
               link:'/',
               time:'2 hours ago',
              },
              {
               text:'New item updated',
               icon: <MdNotificationsNone />,
               link:'/productpage',
               time:'3 weeks ago',
              },
              {
               text:'Settings updated',
               icon:<MdNotificationsNone />,
               link:'/',
               time:'3 days ago',
              },
              {
               text:'Director meeting started',
               icon:<MdNotificationsNone />,
               link:'/',
               time:' a week ago',
              },
              {
               text:'generate montly report',
               icon:<MdNotificationsNone />,
               link:'/',
               time:'5 days ago',
              },
          ];
        }

    show(){
      let concat = this.state.toggle.concat(["display-block"])
       this.setState({toggle:concat});
    }

    fromRedirect(e){
      console.log(e)
      let concat = this.state.toggle.concat([e])
       this.setState({toggle:concat});
      // let slice = this.state.toggle.slice();
      //     slice.splice(1,1)
      const slice = "default-none";
       this.setState({showLogin:slice});
       console.log('from redirect '," "+slice);
    };

    hide(){
      const slice = this.state.toggle.slice();
            slice.splice(1,1)
            this.setState({toggle:slice});
    };

    redirectLogin(e){
      const concat = this.state.showLogin.concat([e])
      this.setState({showLogin:concat})
    };

    showlogin(){
      let concat = this.state.toggle.concat(["display-block"])
       this.setState({showLogin:concat});
    };

    hidelogin(){
      const slice = this.state.toggle.slice();
            slice.splice(1,1)
            this.setState({showLogin:slice});
    }
    showRegisterForm(){
       const dis = this.props.showRegister
       this.state.toggle.concat([dis])
    }


componentDidMount(){
   const dropdownTrigger = document.querySelectorAll('.dropdown-triggered')
   const btndevice = document.querySelectorAll('.btn-device')
   const btnproducts = document.querySelectorAll('.btn-products')
   M.Dropdown.init(dropdownTrigger,{
                hover:false,
            alignment:'center',
       constrainWidth:false,
           inDuration:150,
          outDuration:250,
          autoTrigger:false,
          closeOnClick:true,
   });
   M.Dropdown.init(btnproducts,{
                hover:true,
            alignment:'center',
       constrainWidth:false,
           inDuration:150,
          outDuration:250,
          autoTrigger:false,
          closeOnClick:true,
   });
   M.Dropdown.init(btndevice,{
                hover:false,
            alignment:'right',
       constrainWidth:false,
           inDuration:150,
          outDuration:250,
          autoTrigger:false,
          closeOnClick:true,
   })

   // const time = Math.floor(new Date())
   //  setInterval(()=>{
   //    const timer = getTimeAgoString(time)
   //      this.setState({timeAgo:timer})
   //  },1000)
};
    render(){
return(
<Fragment> 
   <nav className="fixed">
        { this.state.timeAgo === '' ?    
          <div className={this.state.toggle}>
              <RegisterUser clientInfo={this.props.clientInfo}
                            isPassword={this.props.passValue}
                                  hide={this.hide}
                                  hideRegister={e=>this.hide(e)}
                                  showRegister={e=>this.fromRedirect(e)}
              />
          </div>
          : null 
        }
          <div className={this.state.showLogin}>
              <Login loginPassword={this.props.loginPassword}
                         hidelogin={this.hidelogin}
                         showRegister={e=>this.fromRedirect(e)}
                         showLogin={e=>this.redirectLogin(e)}
                         adminPass={this.props.adminPass}
                        clientPass={this.props.clientPass}
                          techPass={this.props.techPass}
                        managePass={this.props.managePass}
              />
          </div>
          
       <div className="nav-wrapper cyan darken-4" id="nav-wrapper-background">
          <a href="#services" data-target="home-slide-out" className="hide-on-med-and-up sidenav-trigger right"><MdMenu style={{fontSize:'45px',marginTop:'5px'}}/></a>
                <div className="col center vertex-tag-nav">   
  {/************************************************** LEFT DROPDWON *************************************************************/}
                  <Dropdown className="" options={{hover:true}} trigger={<img node="a" src={leftLogo} alt="ay pag buot..." className="btn-floating cyan pulse responsive_img circle vertex-tag hide-on-med-only"/>}>
                        <a href={null} onClick={this.show}>Register</a>
                        <a href={null} onClick={this.showlogin}>Login</a>
                  </Dropdown> 
                </div>

             <div className="col s12 m12 l12" style={{marginTop:'-50px'}}>
                 <ul id="nav-mobile" className="right hide-on-small-only">
                   <li className="search cyan darken-2" style={{width:'auto'}}>
                     <div className="search-wrapper" style={{width:'auto'}}>
                       <input id="search" type="search" className="item-search browser-default cyan" placeholder="Search here"/><MdSearch style={{fontSize:'25px'}} className="search-icon left" />
                     </div>   
                   </li>
{/************************************************** NOTIFICATION *************************************************************/}                   
                    <li className="cyan darken-2">
                        <div className="notification-home">
                                  {this.props.tableStore.length ?
                                       <span className="badges-home">
                                          <div className="notify-content">
                                             {this.props.tableStore.length}
                                          </div>
                                       </span> : null}
                        </div> 
                        <Link data-target="notifications-dropdown" className="remove-hover dropdown-triggered" to="/">
                                   <i className="material-icons small">
                                     <MdNotificationsNone className={this.props.tableStore.length > 0 ? "animated swing" :"animated hinge"} style={{marginTop:'10px'}} />
                                  </i>
                            </Link>

                             <ul id="notifications-dropdown" className="dropdown-content">
                                <li>
                                  <h5>NOTIFICATIONS <span className="new badge">{this.props.tableStore.length} {this.props.tableStore.length > 1 ? 'items':'item'}</span></h5>
                                </li>
                                <li className="divider"></li>
                                {
                                 
                                 this.notification.map((item,index)=>(
                                    <li key={item.name}>   
 {/****************************************************************** NOTIFICATION LINK ****************************************************************************/}                                   
                                     <Link className="" to={
                                         (this.props.tableStore.length > 0 && item.link === '/productpage') ? '/booking-item'  : item.link
                                       }>
                                     {
                                        (this.props.tableStore.length > 0 && item.link === '/productpage') ?
                                          <div className="notification-inside">
                                              {this.props.tableStore.length ?
                                                   <span className="badges-inside">
                                                      <div className="notify-inside">
                                                         {this.props.tableStore.length}
                                                      </div>
                                                   </span> : null}
                                          </div> : null
                                      } 
                                      <i className={(this.props.tableStore.length > 0 && item.link === '/productpage') ? "animated swing red-text" :" "}>
                                         {item.icon}
                                      </i>
                                        {(this.props.tableStore.length > 0 && item.link === '/productpage') ? <strong className="red-text darken-4 z-depth-2">
                                           You have <strong className="teal-text">{this.props.tableStore.length}</strong> booking check Now !</strong> : item.text}
                                     </Link>
                                     <time className="media-meta" dateTime="2015-06-12T20:50:48+08:00">
                                       {(this.props.tableStore.length > 0 && item.link === '/productpage') ? this.state.timeAgo : item.time}
                                     </time>
                                    </li>
                                   ))  
                                 }
                              </ul>
                    </li>

                    <li className="cyan darken-2">
                      <div style={{zIndex:'999',width:'10%'}}> 
                        <Link className="remove-hover" to="/"><i className="material-icons small"><MdDashboard style={{marginTop:'10px'}} /></i></Link>
                      </div>    
                    </li>
                          
{/************************************************** RIGHT DROPDOWN *************************************************************/}

                    <li className="hide-on-small-only ldevice cyan darken-2">
                       <button data-target="target-link-device" node="a" className="btn waves-effect waves-ripple btn-products cyan" >Devices</button>
                        <ul id="target-link-device" className="dropdown-content">
                         <li>
                           <Link to="/productpage" >Devices</Link>  
                         </li>
                         <li>
                           <Link to="/servicescontent" >Services</Link>
                         </li>
                        </ul>                         
                    </li>
                    <li className="hide-on-small-only  lsecurity cyan darken-2">
                    <button data-target="dropdown-signup" node="button" className="btn waves-effect waves-riffle btn-device cyan" name="Sign in">Signup</button>
                      <ul id="dropdown-signup" className="dropdown-content">
                        <li>
                           <a href={null} onClick={this.show}>Register</a>  
                        </li>
                        <li>
                           <a href={null} onClick={this.showlogin}>Login</a>  
                        </li>
                      </ul>
                    </li>
               {/*     <li className="cyan darken-2">
                         <i className="material-icons tiny"><img alt="ay pag buot" id="right-logo" src={rightLogo} className="circle right-logo-icon" width="30" height="30" /><MdArrowDropDown /></i>
                    </li>*/}
                 </ul>
             </div>

             <div className=" col s6 m3 l3 hide-on-med-and-up" style={{backgroundColor:'transparent'}}> {/*show-on-small*/}
                <h6 className="our-services">Vertex Solution</h6>
             </div>

            <div className=" col s12" style={{backgroundColor:'transparent'}}> {/*show-on-medium-only */}

                   <div className="col m6 l6 hide-on-small-only">
                       <h5 className="our-services">Vertex Solution</h5>
                   </div>

                   <div className="col s12 m6 l6">
                      <div className="col s12 center show-on-large" style={{marginTop:'-5px'}}>{/*show-on-large*/}
                         <h4 className="our-services">Our Services</h4>
                      </div>
                   </div>

            </div> 
            
       </div>

  </nav>
                  <ul id="dropdown-target-list" className="dropdown-content hide-on-large-only">
                       <li><a href="#!" className="dropdown-trigger" data-target="dropdown-link"><i className="material-icons right drop-down-icon-sub-device">arrow_drop_down</i>Devices</a></li>
                       <li className="divider"></li>
                       <li><a href="#!" className="dropdown-trigger" data-target="drop-down-target-sub-security-link"><i className="material-icons right drop-down-icon-sub-device">arrow_drop_down</i>Security</a></li>
                       <li className="divider"></li>
                       <li><a href="#!" className=""><i className="material-icons right drop-down-icon-sub-device">arrow_drop_down</i>Survelance</a></li>
                       <li className="divider"></li>
                       <li><a href="#!" className=""><i className="material-icons right drop-down-icon-sub-device">arrow_drop_down</i>Scalability</a></li>
                  </ul>
             
                   <ul id="dropdown-link" className="dropdown-content">
                    <li className="divider"></li>
                    <li><a href="#!" id="sub-biometric">Biometrics</a></li>
                    <li className="divider"></li>
                    <li><a href="#!">IP CAM</a></li>
                    <li className="divider"></li>
                    <li><a href="#!">turns style</a></li>
                    <li className="divider"></li>
                    <li><a href="#!">Parktron</a></li>
                     <li className="divider"></li>
                    <li><a href="#!">Aboites</a></li>
                     <li className="divider"></li>
                    <li><a href="#!">Concentrix</a></li>
                     <li className="divider"></li>
                    <li><a href="#!">Face Rrecognition</a></li>
                    <li className="divider"></li>
                    <li><a href="#!">360 degress</a></li>
                    <li className="divider"></li>
                    <li><a href="#!">Parktron</a></li>
                    <li className="divider"></li>
                    <li><a href="#!">Globe</a></li>
                    <li className="divider"></li>
                    <li><a href="#!">AXA</a></li>
                    <li className="divider"></li>
                    <li><a href="#!">Tata Consultancy</a></li>
                  </ul>
                
                  <ul id="drop-down-target-sub-security-link" className="dropdown-content">
                    <li className="divider"></li>
                    <li><a href="#!">Bio Star</a></li>
                    <li className="divider"></li>
                    <li><a href="#!">Lenel</a></li>
                    <li className="divider"></li>
                    <li><a href="#!">Genetic</a></li>
                    <li className="divider"></li>
                    <li><a href="#!">ICT</a></li>
                    <li className="divider"></li>
                    <li><a href="#!">Fascility Commander</a></li>
                    <li className="divider"></li>
                    <li><a href="#!">turns style</a></li>
                  </ul>
                
                  <ul id="dropdown-target-devices" className="dropdown-content">
                    <li className="divider"></li>
                    <li><a href="#biometrics" id="biometrics">Biometrics</a></li>
                    <li className="divider"></li>
                    <li><a href="#!">IP CAM</a></li>
                    <li className="divider"></li>
                    <li><a href="#!">turns style</a></li>
                    <li className="divider"></li>
                    <li><a href="#!">Biometrics</a></li>
                    <li className="divider"></li>
                    <li><a href="#!">IP CAM</a></li>
                    <li className="divider"></li>
                    <li><a href="#!">turns style</a></li>
                  </ul>
              
                 <ul id="home-slide-out" className="collapsible sidenav">
                    <li><a href="#!" className="collapsible-header waves-effect waves-ripple cyan"><i className="material-icons">pages</i>Devices</a>
                        <div className="collapsible-body">
                            <ul>                                        
                                <li>
                                  <a href="#biometrics" id="sidenav-link-biometrics">Biometrics</a>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li><a href="#!" className="collapsible-header  waves-effect waves-ripple cyan darken-4"><i className="material-icons pages"></i>Security</a>
                        <div className="collapsible-body">
                            <ul>                                        
                                <li><a href="page-contact.html">Contact Page</a>
                                </li>
                            </ul>
                        </div>
                    </li>

                  </ul>
               
                  <ul id="dropdown-register-from-services" className="dropdown-content cyan accent-3">
                  <div className="popup-banner">
                    <h3 className="register-with-us">Register with Us!</h3>
                    <h5 className="are-you-a-company">Be a Vertex Family serv</h5>
                    <a href="#!" className="btn waves-effect waves-ripple cyan" id="btn_register">Register</a>
                  </div>      
                  </ul>             
   </Fragment>
 );
 }
}

const mapStateToProps = state => {
   return {
     tableStore:state.TableStore,
   }
};

export default connect(mapStateToProps)(ServiceNavigation);