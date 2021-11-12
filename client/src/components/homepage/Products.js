import React from 'react';
import TopHeader from '../TopHeader'
import NavBar from './NavBar'
import {useParams} from 'react-router-dom';
import { Route, useRouteMatch } from 'react-router-dom';
import ProductDetails from './ProductDetails'
function Products(){
    const match= useRouteMatch()
    // const params = useParams();
    // console.log(params)
    return <div>
        <TopHeader />
        <NavBar />
        <Route path={`${match.url}/:id`}>
            <ProductDetails />

        </Route>
    </div>
}


export default Products