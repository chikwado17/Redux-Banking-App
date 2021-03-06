import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducers from '../reducers/rootReducers';

export const configureStore = () => {
    const middleware = [];
    const composedEnhancers = composeWithDevTools({});

    const store = createStore(
        rootReducers,
        composedEnhancers(
            applyMiddleware(...middleware)
        )
    );
    return store;
}