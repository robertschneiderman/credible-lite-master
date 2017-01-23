import axios from 'axios';

export const getOffers = (param, success) => {
    axios.post(`localhost:3000/tasks`, param)
    .then(success);
};