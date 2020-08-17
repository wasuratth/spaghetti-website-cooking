import { combineReducers } from 'redux';
import profileReducers from './profileReducers';

// this is combining all the reducers we have in the app
// you can access each of them using state.exercise0, state.exercise1, etc...
const rootReducer = combineReducers({ 
    profileReducers 
});

export default rootReducer;
