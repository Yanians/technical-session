import  { combineReducers } from 'redux';

import { CustomerReducer, UpdateTableRowContent } from './index';

const RootReducer = combineReducers({
    CustomerReducer,
    UpdateTableRowContent,
});

export default RootReducer;

