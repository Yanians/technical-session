
import React,{ useState } from 'react';

import { OnetimeLogin, OnetimeSave, dbClientUser, } from '../../../dexie';

import { MdArrowDropDown, MdSearch, MdClose, MdMenu} from 'react-icons/md';

import { Link, Redirect, useLocation, useHistory } from 'react-router-dom';

import { Space, Divider, Row, Cols } from '../../wrapper';

import  Swal  from 'sweetalert2';

export default function ClienNav(props){

const history = useHistory();

const { image, firstname } = props.data;

const [ logout, setLogout ] = useState(false);

const { key } = useLocation();

const LoggingOut = React.useCallback(()=>{
           Swal.fire({
            title:"Logging out...",
            width:'280',
           showConfirmButton:false,
            timer:500,
             icon:'info',
             didOpen:(e)=>{
              Swal.showLoading()
             }
           }).then(async(result)=>{
               if(result.dismiss === Swal.DismissReason.timer){
                             setLogout(true);
                     try{
                              await OnetimeSave.items.toArray().then((user)=>{

                                  if(user.length === 1){
                                     OnetimeSave.delete().then(()=>{
                                          console.log('Deleted!')  
                                     }).catch(err=>{

                                     }).finally(async()=>{
                                      OnetimeSave.open();
                                      await dbClientUser.message.toArray().then((result)=>{
                                        result.map(item=>{
                                            dbClientUser.message.update(item.messageCount,{messageCount:0});      
                                        });
                                      })  
                                           console.log('database OnetimeSave created')   
                                                   history.push('/'); 
                                     });
                                    
                                  }else{
                                    async function Run(){
                                      await OnetimeLogin.items.toArray().then((user)=>{
                                           if(user.length === 1){
                                              OnetimeLogin.delete().then(()=>{
                                                 console.log('Deleted!')        
                                              }).catch(err=>{

                                              }).finally(async()=>{
                                                OnetimeLogin.open();
                                                  await dbClientUser.message.toArray().then((result)=>{
                                                    result.map(item=>{
                                                        dbClientUser.message.update(item.messageCount,{messageCount:0});      
                                                    })
                                                  });  
                                                       console.log('database OnetimeLogin created')    
                                                               history.push('/');
                                              })
                                           }else{
                                             console.error('Oops! render status in app.js is shaking please check useEffect behavior! or check your logic status')
                                           }
                                      })
                                   }Run();       
                                 }

                              }).catch((err)=>{
                                console.error('could not delete!')
                              }).finally(()=>{
                                  
                              });
                              
                        }catch(err){
                            console.error('logical error!  Line 54 clientnav.js',err)
                        }
               }
           })
})

React.useEffect(()=>{
   if(logout === true){
     props.Logout(key); //this will destruct the password in the local state so that it will return to default render
   }else{
    return null;
   }
});

try{
  return logout ? <Redirect to="/" /> : ( //redirect to homepage
  <>
      <div className="fixed-sidenav-client">
         <nav className="cyan darken-4">
          <div className="nav-wrapper cyan darken-4">
            <Row>
              <Cols s9 m7 l9>
                     <nav style={{position:'relative',top:'4.5px',left:'55px',height:'54px',lineHeight:'36px'}} className="cyan darken-4">
                       <div className="nav-wrapper grey lighten-1 right">
                        <form>
                          <div className="input-field">
                           <input type="search" id="search" required/>
                           <label className="label-icon" htmlFor="search"><i className="material-icons tiny"><MdSearch className="small" /></i></label>
                             <i className="material-icons"><MdClose className="small" /></i>
                          </div> 
                        </form> 
                       </div>
                     </nav>
              </Cols>

              <Cols s3 m5 l3> 
                 <nav className="cyan darken-4">
                  <div className="nav-wrapper right cyan darken-4">
                   <ul id="nav-mobile" className="right hide-on-small-only">   
                     <li><img style={{position:'relative',top:'7px'}} alt="undefined" width="25" height="25" src={image} className="img" /></li>
                     <li><Space /></li>
                     <li><Space /></li>
                     <li>{firstname}</li>
                     <li>
                     <a href="#!" data-target="dropdown1" className="grey-text dropdown-trigger">Profile<i className="material-icons tiny cyan-text right"><MdArrowDropDown style={{position:'relative',top:'5px'}} /></i></a>
                        <ul id='dropdown1' className='dropdown-content'>
                          <li><a href={null}>Settings</a></li>
                          <li><a href={null}> Profile</a></li>
                          <li className="divider" tabIndex="-1"></li>
                          <li><a href={null} onClick={LoggingOut}>Logout</a></li>
                        </ul>
                     </li>
                   </ul>
                 <Link className="hide-on-med-and-up right"><i className="material-icons large right"><MdMenu style={{fontSize:'40px',marginTop:'5px'}} /></i></Link>
                  </div>
                 </nav>  
              </Cols>
              </Row>
            </div>
          </nav>
         </div> 
         </> 
        )
    }catch{
    }
}

