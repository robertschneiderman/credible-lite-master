import axios from 'axios';
import { getSubmissions } from '../submissions/actions';

let rootUrl = (process.env.NODE_ENV !== "production") ? "http://localhost:3000" : "https://credible-lite2.herokuapp.com";

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