import { applyMiddleware } from 'redux';
import logger from 'redux-logger';

import submissions from './submissions/middleware';
import offers from './offers/middleware';

const RootMiddleware = applyMiddleware(
  logger(),
  submissions,
  offers
);

export default RootMiddleware;
