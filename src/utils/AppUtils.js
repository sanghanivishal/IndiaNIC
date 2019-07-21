import React from "react";

const createAction = (type, action = () => {
}) => {
    return (...args) => ({type, payload: action.apply(null, args)});
};


export {createAction};
