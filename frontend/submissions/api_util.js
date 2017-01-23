import axios from 'axios';

export const createSubmission = (data, success) => {
    axios.post(`http://localhost:3000/api/submissions`, data)
    .then(success);
};