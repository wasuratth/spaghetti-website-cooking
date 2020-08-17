import actionTypes from '../actions/actionTypes';

// Each reducer must define the initial state it works on.
const initialState = {
    picture: null ,
};

const changeProfilePicture = (state, action) => {
    return Object.assign({}, state, {
        picture : action.payload.newValue,
    });
};

const profileReducers = (state = initialState, action) => {
    // usually reducer core is just a switch on action.type
    // if you need to perform operations on values, create an external function and use it
    switch (action.type) {
        case actionTypes.CHANGE_PROFILE_PICTURE :
            return changeProfilePicture(state, action);
        default:
            return state;
    }
};

export default profileReducers;
