import { applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import submissions from './submissions/middleware';
import offers from './offers/middleware';

const RootMiddleware = applyMiddleware(
  logger(),
  thunk,
  submissions,
  offers
);

export default RootMiddleware;
