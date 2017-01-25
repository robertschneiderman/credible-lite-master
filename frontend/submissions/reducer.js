import React, {Component} from 'react';
import merge from 'lodash/merge';
import {router, hashHistory} from 'react-router';

let defaultState = [];

const SubmissionReducer = (state = defaultState, action) => {
    let newState;
    switch (action.type) {
        case 'RECEIVE_SUBMISSION':
            hashHistory.push('/offers');
            return merge(state, {}, action.payload);
        default:
            return state;
    }
};

export default SubmissionReducer;