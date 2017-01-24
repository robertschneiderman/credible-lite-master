import { applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

import submissions from './submissions/middleware';
import offers from './offers/middleware';

const logger = createLogger();

const RootMiddleware = applyMiddleware(
  thunk,
  submissions,
  offers,
  logger
);

export default RootMiddleware;
