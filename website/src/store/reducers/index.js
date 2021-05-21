import {combineReducers} from 'redux';
import auth from './authReducers';
import admin from './adminReducers';
import site from './siteReducers';

export default combineReducers({
    auth,
    admin,
    site
})