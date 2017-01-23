import { combineReducers } from 'redux';

import submissions from './submissions/reducer';
import offers from './offers/reducer';

export default combineReducers({
    submissions,
    offers
});