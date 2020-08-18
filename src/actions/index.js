import actionTypes from './actionTypes';
import jwtDecode from 'jwt-decode';

export const changeProfilePicture = (event) => {
    const jwt = jwtDecode(localStorage.getItem('token')) ; 
    return {
        type: actionTypes.CHANGE_PROFILE_PICTURE,
        payload: {
            newValue : process.env.REACT_APP_API_SERVER + 'profile/picture/' + jwt.id + '/' + new Date().getTime() ,
        },
    };
};
 