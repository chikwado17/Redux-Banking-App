import { combineReducers } from 'redux';
import { bankingReducers } from '../components/bankingReducers';

const rootReducers = combineReducers({
   bank:bankingReducers
});

export default rootReducers;