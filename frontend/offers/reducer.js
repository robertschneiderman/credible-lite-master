import React, {Component} from 'react';
import merge from 'lodash/merge';
import {router, hashHistory} from 'react-router';

let defaultState = {};

const offerReducer = (state = defaultState, action) => {
    let newState;
    switch (action.type) {
        case 'UPDATE_NAME':
            return newState;
        default:
            return state;
    }
};

export default offerReducer;