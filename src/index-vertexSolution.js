import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
// import ReactDOMServer from 'react-dom/server';
import { BrowserRouter  as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Swal from 'sweetalert2';
import 'materialize-css/dist/css/materialize.min.css';
// import './css/materialize.min.css';
import './css/vertex-home.css';
import './css/custom.css';
import { Application } from './components';
// import Main from './video rentals/main';
// import Main from './trialroute/main';
const el = document.getElementById('root');

ReactDOM.render(
     <Provider store={store}>
      <Suspense fallback={Swal.fire(
      	   {
	            title:'LOADING CONTENT',
	             html:'<b>Please wait...</b>',
	            timer:2000,
	showConfirmButton:false,
	 timerProgressBar:true,
	             icon:'info',
	          didOpen:(e)=>Swal.showLoading(),
      	   }
      	 )
      }>
        <Router>
          <Application />
        </Router>
      </Suspense>
     </Provider>       
,el);
