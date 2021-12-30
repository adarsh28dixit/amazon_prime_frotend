import thunk from 'redux-thunk'
import { combineReducers, compose, createStore, applyMiddleware } from 'redux';
import { movieDetailReducer, movieListReducer } from './reducers/movieListReducer';

const initialState = {}

const reducer = combineReducers({
    movieReducer: movieListReducer,
    detailReducer: movieDetailReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;