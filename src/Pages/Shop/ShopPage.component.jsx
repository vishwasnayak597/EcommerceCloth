import React from 'react';
import {Route} from 'react-router-dom';
import CollectionsOverview from '../../Components/collections-overview/collections-overview';
import CategoryPage from '../Category/category'

 const ShopPage =({match}) =>{
    return(
    <div className="shop-page">
     <Route exact path={`${match.path}`} component={CollectionsOverview}/> 
     <Route path={`${match.path}/:collectionId`} component={CategoryPage}/>
  </div>
 )};

export default ShopPage;