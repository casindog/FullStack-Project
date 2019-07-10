import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root'

import configureStore from './store/store';

import { logout } from './actions/session_action';
import { getProducts } from './utils/products_util';
import { requestProducts } from './actions/products_action';

document.addEventListener('DOMContentLoaded', () => {
    let store;
    
    // bootstrapping user to window

    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: {id: window.currentUser.id }
        }
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    
    // react
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
    window.getState = store.getState;


    window.dispatch = store.dispatch;
    window.logout = logout;
    window.getProducts = getProducts;
    window.requestProducts = requestProducts;
})