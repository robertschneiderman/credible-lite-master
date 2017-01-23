import axios from 'axios';

export const getOffers = (param, success) => {
    axios.post(`ROOT_URL/tasks`, param)
    .then(success);
};