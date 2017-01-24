import React, {Component} from 'react';
import merge from 'lodash/merge';
import {router, hashHistory} from 'react-router';

let defaultState = [];

const SelectedOffersReducer = (state = defaultState, action) => {
    let newState;
    switch (action.type) {
        case 'SELECT_OFFERS':
            // router.push({
            //     pathname: '/selected-offers'
            // });

            hashHistory.push('/selected-offers');
                
            return merge([], state, action.payload);
        default:
            return state;
    }
};

export default SelectedOffersReducer;