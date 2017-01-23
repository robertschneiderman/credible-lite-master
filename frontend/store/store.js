import { createStore } from 'react-redux';
import RootReducer from '../root_reducer.js';
import RootMiddleware from '../root_middleware.js';

const configureStore = (preloadedState = {}) => (
    createStore(
        RootReducer,
        preloadedState,
        RootMiddleware
    )
);

export default configureStore;