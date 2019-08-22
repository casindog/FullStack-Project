import React from 'react';
import {Route} from 'react-router-dom';
import IndexContainer from './index/indexContainer';
import ProductModalContainer from './index/products/productModalContainer'

export default (props) => {

    return (
        <>
            <Route path="/index" component={IndexContainer}/>
            <Route path="/index/:id" component={ProductModalContainer}/>
        </>
    )
}