import { combineReducers } from 'redux';
import reducers from './reducers';

// this is combining all the reducers we have in the app
// you can access each of them using state.exercise0, state.exercise1, etc...
const rootReducer = combineReducers({ 
    reducers 
});

export default rootReducer;
