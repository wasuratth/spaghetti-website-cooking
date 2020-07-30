export const changeValue = (event) => {
    return {
        type: actionTypes.CHANGE_VALUE,
        payload: {
            newValue: event.target.value,
        },
    };
};

// TODO: IMPLEMENT ME
// I work with /reducers/exercise1.js
export const buttonClicked = (event) => {
     console.log(event.target.innerHTML) ; 
    return {
        type: actionTypes.BUTTON_CLICKED ,
        payload: {
            newValue: event.target.innerHTML  ,
        },
    };
};

export const boxTicked = (event) => {
    return {
        type: actionTypes.BOX_TICKED,
        payload: {
            hasTickedBox: event.target.checked,
        },
    };
};
