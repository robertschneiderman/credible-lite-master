import { combineReducers } from 'redux';

import submissions from './submissions/reducer';
import offers from './offers/reducer';
import selectedOffers from './selected_offers/reducer';

export default combineReducers({
    submissions,
    offers,
    selectedOffers
});