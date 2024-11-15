import { combineReducers } from 'redux';
import accountReducer from './accountReducer'

import counterReducer from './counterReducer';


const rootReducer = combineReducers({

    counter: counterReducer,
    account: accountReducer

});

export default rootReducer;