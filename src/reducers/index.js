import { combineReducers } from 'redux';
import profile from './profile';

// this is combining all the reducers we have in the app
// you can access each of them using state.exercise0, state.exercise1, etc...
const rootReducer = combineReducers({ 
    profile 
});

export default rootReducer;
