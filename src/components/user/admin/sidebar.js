import React from 'react';
// import { Card } from 'react-materialize';
import {TargetLink } from '../../wrapper';
import { useRouteMatch } from 'react-router-dom';
import M from 'materialize-css';
import {MdSearch, MdClose, MdComment, MdSettingsApplications } from "react-icons/md";
// import { TiShoppingCart } from 'react-icons/ti';
import { RiFilePpt2Fill } from 'react-icons/ri';
import { FcCustomerSupport } from 'react-icons/fc';
import { VscOrganization } from 'react-icons/vsc';
// import { Gi3DGlasses } from 'react-icons/gi';
// import { HiOutlineMail } from 'react-icons/hi';
import { DiApple, DiAtlassian } from 'react-icons/di';

class Sidebar extends React.Component{

    componentDidMount(){
      M.AutoInit();
    }

  render(){
    const  { match }  = this.props;
       return (
    <React.Fragment>

       <ul id="slide-out" className="sidenav blue">
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
                 <TargetLink name="Create User" link={`${match.url}/create-user`} icon={<MdComment className="black-text small"/>} />
                 <TargetLink name="View record" link={`${match.url}/se-chart`} icon={<RiFilePpt2Fill className="black-text small"/>} />
                 <TargetLink name="Thread" link="/thread" icon={<MdSettingsApplications className="black-text small"/>} />     
                 <TargetLink name="Unknown" link="/" icon={<DiAtlassian className="black-text small"/>} />     
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
}

const SideBar = (props)=>(<Sidebar {...props} match={useRouteMatch()} />)

export default SideBar;
