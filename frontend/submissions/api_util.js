import axios from 'axios';

export const createSubmission = (data, success) => {
    debugger;
    axios.post(`http://localhost:3000/api/submissions`, data)
    .then(success);
};