import axios from 'axios';


export const getSubmissions = (data, success) => {
    axios.get(`http://localhost:3000/api/submissions.json`)
    .then(success);
};

export const createSubmission = (data, success) => {
    axios.post(`http://localhost:3000/api/submissions`, data)
    .then(success);
};