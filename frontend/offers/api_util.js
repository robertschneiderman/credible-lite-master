import axios from 'axios';

let rootUrl = (process.env.NODE_ENV !== "production") ? "http://localhost:3000" : "https://credible-lite2.herokuapp.com";

export const getOffers = (param, success) => {
    axios.get(`${rootUrl}/api/submissions/${param}/offers.json`)
    .then(success);
};