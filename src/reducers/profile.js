import actionTypes from '../actions/actionTypes';
import jwtDecode from 'jwt-decode';

// Each reducer must define the initial state it works on.
// console.log(localStorage.getItem('token')) ; 
const jwt = localStorage.getItem('token') ? jwtDecode(localStorage.getItem('token')) : { id: false };
const initialState = {
    picture:  (process.env.REACT_APP_API_SERVER || "https://spaghetti-api.topwork.asia/api/") + 'profile/picture/' + jwt.id + '/' + new Date().getTime(),
};

const changeProfilePicture = (state, action) => {
    return Object.assign({}, state, {
        picture: action.payload.newValue,
    });
};

const profile = (state = initialState, action) => {
    // usually reducer core is just a switch on action.type
    // if you need to perform operations on values, create an external function and use it
    switch (action.type) {
        case actionTypes.CHANGE_PROFILE_PICTURE:
            return changeProfilePicture(state, action);
        default:
            return state;
    }
};

export default profile;
