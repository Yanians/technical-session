// import React, { useContext } from 'react';
// import RoutedContext from './routercontext';

function ContextPropsProvider(props){
	const [state] = useContext(RoutedContext)
	console.log(state)
   return {
   	  state,
   }
}
export default ContextPropsProvider;	

