import React, { useState } from 'react';
import { Link, useLocation, Redirect } from 'react-router-dom';
import { Divider } from '../../wrapper';
import { MdArrowDropDown, MdMenu  } from 'react-icons/md';
import Swal from 'sweetalert2';
// import swal from 'sweetalert';
import { Dropdown } from 'react-materialize';
import vertexLogo from '../../../images/vertex-logo-small.png';
export const AdminHeader=(props)=> {

  const [ logout, setLogout ] = useState(false)

  const { key } = useLocation()

  const userData = props.userData;

const LoggingOut = React.useCallback(()=>{
             Swal.fire({
                  title:"Logging out...",
                  width:'250',
                 button:false,
                  timer:1500,
                   icon:'info',
                   didOpen:(e)=>{
                    Swal.showLoading()
                   }
              }).then((result)=>{
                 if(result.dismiss === Swal.DismissReason.timer){
                     setLogout(true)  
                 }
                  
              });
},[setLogout])

     React.useEffect(()=>{
       if(logout === true){
         props.Logout(key)
       }else{
        return null;
       }
     },[LoggingOut, logout, props, key])

  return logout ?  (<Redirect to="/" />) : (
    <React.Fragment> 
      <div className="fixed-navbar-se">
        <nav className="white">
          <ul>
              <li>
                  <img style={{marginLeft:'25px',marginTop:'12px'}} src={vertexLogo}  className="img pulse circle z-depth-1" width="35" height="35" alt="undefined" />
              </li>
          </ul> 
          <div className="nav-wrapper white  z-depth-1 right">
            <a href="!#" data-target="slide-out-tech" className="sidenav-trigger right hide-on-med-and-up"><MdMenu style={{marginTop:'14px'}} className="grey-text small"/></a>

            <ul className="right hide-on-small-only">
              <li>
                <img style={{marginLeft:'35px',marginTop:'18px'}} src={userData.image}  className="img pulse  z-depth-1" width="25" height="25" alt="undefined" />               
              </li>               
               <li>
                  <Dropdown id="ul-dropdown-tech" style={{zIndex:'9999'}}
                      trigger={<a href="#!" onClick={null} className="grey-text">Profile<i className="material-icons tiny cyan-text right"><MdArrowDropDown style={{position:'relative',top:'5px'}} /></i></a>}
                      options={{
                       alignment: 'left',
                      constrainWidth:true,
                      hover:false,
                      coverTrigger:true,
                      inDuration:150,
                      outDuration:200
                   }}>
                         <Divider />
                           <Link to="/">Setting</Link>
                         <Divider />
                           <Link to="/">Note</Link>
                         <Divider />
                           <button onClick={e=>LoggingOut()}>Logout</button>
                         <Divider />
                   </Dropdown>
               </li>
            </ul> 
          </div>
         </nav>
       </div>  
     </React.Fragment>
    )  
}