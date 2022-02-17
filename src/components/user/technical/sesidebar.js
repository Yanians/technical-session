import React from 'react';
import {TargetLink } from '../../wrapper';
import { useRouteMatch } from 'react-router-dom';
import {MdSearch, MdClose, MdComment, MdSettingsApplications, } from "react-icons/md";
import M from 'materialize-css';
import { RiFilePpt2Fill } from 'react-icons/ri';
import { FcCustomerSupport } from 'react-icons/fc';
import { VscOrganization } from 'react-icons/vsc';
// import { Gi3DGlasses } from 'react-icons/gi';
import { DiApple, DiAtlassian } from 'react-icons/di';

export const SeSidebar = ()=>{
 React.useEffect(()=>{
  M.AutoInit()
 });
const { url } = useRouteMatch();
return (
    <React.Fragment>
       <ul id="slide-out-tech" className="sidenav blue">
            <li><a href="#!">First Sidebar Link</a></li>
            <li><a href="#!">Second Sidebar Link</a></li>
            <li className="no-padding">
              <ul className="collapsible collapsible-accordion">
                 <li>
                   <a href="#!" className="collapsible-header">Dropdown<i className="material-icons">arrow_drop_down</i></a>
                     <div className="collapsible-body">
                      <ul>
                        <li><a href="#!">First</a></li>
                        <li><a href="#!">Second</a></li>
                        <li><a href="#!">Third</a></li>
                        <li><a href="#!">Fourth</a></li>
                      </ul>
                     </div>
                 </li>
              </ul>
            </li>
       </ul>
              <ul className="collection sidenav-fixed-se-left hide-on-small-only">
                <li className="collection-item z-depth-4">
                    <nav style={{marginTop:'-5px', width:'100%', height:'36px', lineHeight:'26px'}}>
                        <div className="nav-wrapper white z-depth-1">
                          <form>
                            <div className="input-field">
                              <input id="search" type="search" required className="se-search"/>
                              <label className="label-icon" htmlFor="search"><i style={{marginLeft:'-6px',marginTop:'-8px'}} className="material-icons black-text tiny"><MdSearch className=""/></i></label>
                              <i style={{marginTop:'-15px'}} className="material-icons"><MdClose className="tiny" /></i>
                            </div>
                          </form>
                        </div>
                    </nav>
                </li>
                 <TargetLink name="Write a blog" link={`${url}/se-blog`} icon={<MdComment className="black-text small"/>} />
                 <TargetLink name="View record" link={`${url}/se-chart`} icon={<RiFilePpt2Fill className="black-text small"/>} />
                 <TargetLink name="Maintenance" link="/" icon={<MdSettingsApplications className="black-text small"/>} />  
                 <TargetLink name="Thread" link={`${url}/se-thread`} icon={<DiAtlassian className="black-text small"/>} />
                 <li style={{cursor:'pointer'}} className="collection-item z-depth-1">
                     <FcCustomerSupport className=" black-text text-darken-4 small"/>
                       <b style={{position:'relative',top:'-6px',left:'30px',cursor:'pointer'}} className="black-text">Support</b>
                    <ul className="collapsible">
                      <li>
                        <div className="collapsible-header"><RiFilePpt2Fill className=" red-text tiny" /></div>
                        <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                      </li>
                      <li>
                        <div className="collapsible-header"><RiFilePpt2Fill className=" red-text tiny" /></div>
                        <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                      </li>
                      <li>
                        <div className="collapsible-header"><RiFilePpt2Fill className=" red-text tiny" /></div>
                        <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                      </li>
                    </ul>
                </li>
                <TargetLink name="Organization" link="/" icon={<VscOrganization className="black-text small"/>} />
                <TargetLink name="Community" link="/" icon={<DiApple className="black-text small"/>} />     
               </ul> 
      </React.Fragment>     
    )
}

