import axios from 'axios';

export const getOffers = (param, success) => {
    axios.get(`localhost:3000/offers`)
    .then(success);
};