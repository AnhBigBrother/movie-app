import allReducer from '../Reducers/allReducer.js';
import { legacy_createStore as createStore } from 'redux';

const store = createStore(allReducer);

export default store;