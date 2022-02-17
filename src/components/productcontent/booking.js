

import PropTypes from 'prop-types';

import { Component } from 'react';

class Booking extends Component{

	  constructor(props){
	  	  super(props);
	  	  this.showBooking = this.showBooking.bind(this);
	  	  this.state={
	  	  	toggleShow:["animated "]
	  	  }
	  }

	  showBooking(){
	  	  	
      }
   
   render(){

   	  return(
	   	  	<div className={toggleShow ? '':''}>
	   	  		 
	   	  	</div>
   	  	)
   }
}