import axios from 'axios';

let rootUrl = (process.env.HEROKU_ENV !== "production") ? "http://localhost:3000" : "https://credible-lite2.herokuapp.com";

export const getSubmissions = (data, success) => {
    axios.get(`${rootUrl}/api/submissions.json`)
    .then(success);
};

export const createSubmission = (data, success) => {
    axios.post(`${rootUrl}/api/submissions`, data)
    .then(success);
};