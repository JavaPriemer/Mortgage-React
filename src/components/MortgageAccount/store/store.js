import {createStore , applyMiddleware} from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

import thunk from 'redux-thunk';
import rootReducer from '../reducer/index';

const configureStore = (initialState) => {
    return createStore(rootReducer, initialState, applyMiddleware(thunk, reduxImmutableStateInvariant()));
}
export default configureStore;