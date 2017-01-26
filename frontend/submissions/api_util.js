import axios from 'axios';

let rootUrl = "https://credible-lite2.herokuapp.com";

export const getSubmissions = (data, success) => {
    axios.get(`${rootUrl}/api/submissions.json`)
    .then(success);
};

export const createSubmission = (data, success) => {
    axios.post(`${rootUrl}/api/submissions`, data)
    .then(success);
};