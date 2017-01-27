import axios from 'axios';
import { getSubmissions } from '../submissions/actions';

let rootUrl = "https://credible-lite2.herokuapp.com";

export const getSubmissionsThenOffers = payload => {
    return function(dispatch) {
        axios.get(`${rootUrl}/api/submissions`).then(
            submissions => {
                submissions.data.submissions.forEach(submission => {
                    dispatch(requestOffers(submission.id));
                });
            }
        );

    };
};

export const requestOffers = payload => ({
    type: 'REQUEST_OFFERS',
    payload
});

export const receiveOffers = payload => ({
    type: 'RECEIVE_OFFERS',
    payload
});

export const clearOffers = payload => ({
    type: 'CLEAR_OFFERS',
    payload
});