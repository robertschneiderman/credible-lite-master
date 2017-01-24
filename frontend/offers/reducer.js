import React, {Component} from 'react';
import merge from 'lodash/merge';
import {router, hashHistory} from 'react-router';

let defaultState = [];

const offerReducer = (state = defaultState, action) => {
    let newState;
    switch (action.type) {
        case 'RECEIVE_OFFERS':
            newState = [];
            return merge([], state, action.payload);
        default:
            return state;
    }
};

export default offerReducer;