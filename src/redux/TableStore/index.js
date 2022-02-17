import {

 TableStore, 

 Record, 

 RegisterTable, 

 Biometrics, 

 Cctv, 

 Cardscanners, 

 Turnstyles, 

 Xpass } from './reducers';
 
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	  TableStore,
	  Biometrics,
	  Cctv,
	  Turnstyles,
	  Xpass,
	  Cardscanners,
	  Record,
	  RegisterTable,
});

export default rootReducer;