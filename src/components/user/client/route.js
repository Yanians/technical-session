import React from 'react';
import { Routed } from './routed';
// import { withRouter } from 'react-router';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
// import{ PropTypes } from 'prop-types';
import { Source } from '../../productcontent/minimal';
// import { Provider } from 'react-redux';
  import { useSelector } from 'react-redux';
// import store from '../../../redux/store';
// import { cctvdb, biometricdb, turnstyledb, cardscannerdb, xpassdb } from '../../../dexie';
// import { ServicesContent } from '../../components';
// import { ItemStore } from './itemstore';

export const CctvDevice=()=>{
	const cctv = useSelector(state=>({
                items:state.Cctv,
            }));
	  	return(
	  		 <Routed defaultDb={cctv.items} />    
	  		)
}

export const BiometricDevice=()=>{
		const bio = useSelector(state=>({
                items:state.Biometrics,
            }));
	  	return(
	  		 <Routed defaultDb={bio.items} />
	  		)
}

export const XpassDevice=()=>{
		const xpass = useSelector(state=>({
                items:state.Xpass,
            }));
	  	return(
	  		 <Routed defaultDb={xpass.items} />
	  		)
}

 export const CardScannerDevice=()=>{
 	const scanners = useSelector(state=>({
                items:state.Cardscanners,
            }));
	  	return(
	  		 <Routed defaultDb={scanners.items} />
	  		)
}

 export const TurnstyleDevice=()=>{
 	const turnstyles = useSelector(state=>({
                items:state.Turnstyles,
            }));
	  	return(
	  		 <Routed defaultDb={turnstyles.items} />
	  		)
}

/***********************************************VIEW LINK*******************************************************/

const CctvRecord=()=>{
	const { url } = useRouteMatch();
	const cctv = useSelector(state=>({
                items:state.Cctv,
            }));
	  	return(
	  		 <Source data={cctv.items} link={`${url}/cctv-cards/:nd`} />
	  		)
}

const BiometricRecord=()=>{
	const { url } = useRouteMatch()
	const bio = useSelector(state=>({
                items:state.Biometrics,
            }));
	
	  	return(
	  		<Source data={bio.items} link={`${url}/biometric-cards`} />
	  		)
}

const TurnstileRecord=()=>{
	const { url } = useRouteMatch()
	const turnstyles = useSelector(state=>({
                items:state.Turnstyles,
            }));
	  	return(
	  		<Source data={turnstyles.items} link={`${url}/turnstyle-cards`} />
	  		)
}

const XpassRecord=()=>{
	const { url } = useRouteMatch()
	const xpass = useSelector(state=>({
                items:state.Xpass,
            }));
	  	return(
	  		<Source data={xpass.items} link={`${url}/xpass-cards`} />
	  		)
}

const CardscannerRecord=()=>{
	const { url } = useRouteMatch()
	const scanners = useSelector(state=>({
                items:state.Cardscanners,
            }));
	  	return(
	  		 <Source data={scanners.items} link={`${url}/cardscanner-cards`} />
	  		)
}

const AllItemRecord=()=>{
  
       return(
              <React.Fragment>
	      	 	<div className="col s6 m4 l3">
	          	   	<CctvRecord />
	          	</div>   	
	          	<div className="col s6 m4 l3">
	          	   	<BiometricRecord />
	          	</div>
	          	<div className="col s6 m4 l3">   	
	          	   	<CardscannerRecord />
	          	</div>
	          	<div className="col s6 m4 l3">   	
	          	   	<XpassRecord />
	          	</div>
	          	<div className="col s6 m4 l3">   	
	          	   	<TurnstileRecord />
	          	</div>
              </React.Fragment>
       	)
   }

export const Routing=()=>{

const { path } = useRouteMatch() //client-path
  return(
  	     <div>
          <Switch>
	        <Route exact path={`${path}`} component={AllItemRecord} />
          </Switch>
        </div>  
    )
  
}
 

