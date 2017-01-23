import axios from 'axios';

export const getOffers = (param, success) => {
    axios.get(`http://localhost:3000/api/submissions/${param}/offers.json`)
    .then(success);
};