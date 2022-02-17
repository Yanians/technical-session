import React from  'react';

import { dvd } from './data';
import { Img } from '../components/wrapper';
// import { mdAdd } from 'react-icons/md';
import rent from './images/rent.png';

 function Main(props){
  const [data, setData] = React.useState([dvd]);

const ActionRent=(e)=>{

};

const checkRentals=()=>{

};

const readyForAction=()=>{

};
    
      return (
      	<React.Fragment>
      	  <nav className="nav-extended blue-grey darken-4 z-depth-2">
		    <div className="nav-wrapper">
		      <a href="#!" className="brand-logo">BVS</a>
		      <ul className="right hide-on-med-and-down">
		        <li><button className="btn btn-waves-effect waves-ripple pink darken-3">Management</button></li>
		        <li><a>Check rentals</a></li>
		        <li><a>Q&A</a></li>
		      </ul>
		    </div>
          </nav>
                <div className="container">
		      	       <div className="row">

					          <div className="col s12 l8">
		                           {dvd.map((item,index)=>{
		                                    
		                                    return(
		                                    	<React.Fragment key={item.id}>
		                                    	   <div className="col s12">
			                                    	  <div className="card card-small horizontal">
			                                	       	    <div className="card-image">
			                                	              <img className="img-responsive" src={item.image} alt="undefined" />
			                                	            </div>

			                                	              <div className="card-stacked">
			                                	                 <div className="card-content black"  style={{backgroundImage:`url(${item.background})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'}}>
			                                	                    <h5 className="white-text shadow-effect-rent-text">{item.title}</h5>
			                                	                 	<p className="white-text .shadow-effect-rent-title-text">
			                                	                 	{item.description}
			                                	                 	 <div className="card-action card-actions animate swing" onClick={e=>readyForAction()} style={{backgroundImage:`url(${rent})`,backgroundSize:'150px',backgroundRepeat:'no-repeat',backgroundPosition:'center',cursor:'pointer'}}>
	                                                                      <a href="#!" ></a>
		                                    	                     </div>
			                                	                 	</p>
			                                	                 </div>
	                                                          </div>

	                                                        <div className="card-action" onClick={e=>readyForAction()}>
	                                                          <button className="btn btn-waves-effect btn-small waves-ripple blue-grey darken-5">rent this</button>
	                                                             <div className="card-stacked" style={{position:'absolute',top:'15%',left:'0'}}>
	                                                               <div className="card-content">
	                                                                    hoe no matter how fat it is it will still be worked!
	                                                               </div>
	                                                               
	                                                             </div>
		                                    	            </div>
			                                    	  </div>  
			                                    	</div>    
		                                    	 </React.Fragment> 
		                                    	)
		                                 })
		                           }
					          </div>
					          <div className="col s4 l4"></div>

					      </div>
			    </div>
        </React.Fragment>
      )
};

export default Main;