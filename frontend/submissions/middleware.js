import * as API from './api_util';
import * as actions from './actions';
import {router, hashHistory} from 'react-router';

const SubmissionMiddleware = ({dispatch}) => next => action => {

    const success = res => {
        dispatch(actions.receiveSubmission(res.data));
    };
    switch (action.type) {
        case 'MAKE_SUBMISSION':
        debugger;
            API.createSubmission(action.payload, success);
            return next(action);
        default:
            return next(action);
    }
};

export default SubmissionMiddleware;