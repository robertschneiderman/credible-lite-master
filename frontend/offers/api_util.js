import axios from 'axios';

let rootUrl = "https://credible-lite2.herokuapp.com";

export const getOffers = (param, success) => {
    axios.get(`${rootUrl}/api/submissions/${param}/offers.json`)
    .then(success);
};