import * as API from './api_util';
import * as actions from './actions';
import {router, hashHistory} from 'react-router';

const offersMiddleware = ({dispatch}) => next => action => {

    const success = res => {
        debugger;        
        dispatch(actions.receiveOffers(res.data.offers));
    };
    switch (action.type) {
        case 'REQUEST_OFFERS':
            API.getOffers(action.payload, success);
            return next(action);
        default:
            return next(action);
    }
};

export default offersMiddleware;