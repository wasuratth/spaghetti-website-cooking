import actionTypes from './actionTypes';

export const changeProfilePicture = (event) => {
    return {
        type: actionTypes.CHANGE_PROFILE_PICTURE,
        payload: {
            newValue: event.target.value,
        },
    };
};
 