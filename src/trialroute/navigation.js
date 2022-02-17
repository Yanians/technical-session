
import React from 'react';

import { withRouter } from 'react-router';

import { Link, Route, useRouteMatch, useHistory, useParam, Switch } from 'react-router-dom';

import { MdSearch, MdClose, MdMenu, MdHome } from 'react-icons/md';

import Dashboard from './content';

import  vertexLogo from '../images/vertex-logo-small.png';

import { Cols, Row } from '../components/wrapper';

class Navigation extends React.Component{

	render(){
  const { match } = this.props;
		return (
	         <header>
	            <nav>
	             <div className="nav-wrapper grey darken-2">
	             <Link className="brand-logo hide-on-small-only left"><img style={{position:'relative',top:'3px',left:'20px'}} src={vertexLogo} width="35" height="35" className="img circle z-depth-2" /></Link>
	             <Link className="brand-logo hide-on-med-and-up left"><img style={{position:'relative',top:'3px',left:'0'}} src={vertexLogo} width="30" height="30" className="img circle z-depth-2" /></Link>
	                <Row>

	         		   <Cols s9 m5 l7 className="push-m1 push-l1">
	         		    	  <nav style={{position:'relative',top:'0px',left:'32px'}}>	         		    	  
	         		    	    <div className="nav-wrapper grey darken-1">
			         		       <form>
				         		     <div className="input-field">
				 		  			   <input type="search" id="search" />
				 		  			    <label className="label-icon" htmlFor="search" name="search" placeholder="Search"><i className="material-icons small"><MdSearch /></i></label>
				 		  			   <i className="material-icons"><MdClose /></i>
				         		     </div>  
				         		   </form>
				         		</div>
				         	  </nav>
	         		   </Cols>
	         		   <Cols m7 l5 className="hide-on-small-only push-l1 push-m1">
	         		     <nav style={{position:'relative',top:'0px',left:'10px'}} className="grey darken-3">
	         		      <div className="nav-wrapper">
	         		       <ul id="nav-mobile" className="white-text">
	         		        <li className=" grey darken-3"><Link className=""><i className="material-icons right"><MdHome/></i></Link></li>
		         		  	<li className=" grey darken-3"><Link className="">Services</Link></li>
		         		  	<li className=" grey darken-3"><Link className="">About Us</Link></li>
		         		  	<li className=" grey darken-3"><Link className="">Dash board</Link></li>
		         		   </ul>
		         		  </div>
		         		 </nav>  
	         		   </Cols>
	         		   <Cols s3 className="show-on-small">
	         		     <Link className="brand-logo show-on-small right"><i className="material-icons large"><MdMenu style={{fontSize:'40px',marginTop:'5px'}} /></i></Link>
	         		   </Cols>
	         		   
	         	    </Row> 

	         	  </div>  
	         	</nav>
	         </header>
			)
	}
}

export default props => (<Navigation {...props} match={useRouteMatch()} />)
