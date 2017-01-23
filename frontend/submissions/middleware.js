import * as API from './api_util';
import * as actions from './actions';
import {router, hashHistory} from 'react-router';

const SubmissionMiddleware = ({dispatch}) => next => action => {

    const success = res => {
        // debugger;
        let submissions = localStorage.getItem('submissions');
        submissions = submissions ? JSON.parse(submissions) : [];
        submissions.push(res.data.id);
        localStorage.setItem('submissions', JSON.stringify(submissions));
        dispatch(actions.receiveSubmission(res.data));
    };
    switch (action.type) {
        case 'GET_SUBMISSIONS':
            API.createSubmission(action.payload, success);        
        case 'MAKE_SUBMISSION':
            API.createSubmission(action.payload, success);
            return next(action);
        default:
            return next(action);
    }
};

export default SubmissionMiddleware;