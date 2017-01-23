import * as API from './api_util';
import * as actions from './actions';
import {router, hashHistory} from 'react-router';

const offersMiddleware = ({dispatch}) => next => action => {

    const success = res => {
        dispatch(actions.receiveOffers(res));
    };
    switch (action.type) {
        case 'getOffers':
            API.get(action.payload, success);
            return next(action);
        default:
            return next(action);
    }
};

export default offersMiddleware;