import axios from 'axios';
import { getSubmissions } from '../submissions/actions';

export const getSubmissionsThenOffers = payload => {
    return function(dispatch) {
        axios.get(`http://localhost:3000/api/submissions`).then(
            submissions => {
                submissions.data.submissions.forEach(submission => {
                    dispatch(requestOffers(submission.id));
                    // axios.get(`http://localhost:3000/api/submissions/${submission.id}/offers.json`).then((offers) => {
                    //     debugger;
                    // }            
                // submissions = [submissions.data];
                // });
                    // );
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