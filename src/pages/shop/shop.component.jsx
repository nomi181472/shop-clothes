import React from 'react'
import {Route} from "react-router-dom"
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import CollectionsOverView from '../../components/collections-overview/collection-overview.component'
import { selectCollection } from '../../redux/shop/shop.selector'
import CategoryPage from '../category/category.component'
 const ShopPage =({match})=>(
    
        <div className="shop-page">
            <Route  exact path={`${match.path}`} component={CollectionsOverView} />
            <Route   path={`${match.path}/:categoryId`} component={CategoryPage} />
        </div>
 )

 const mapStateToProps=createStructuredSelector(
    {collections:selectCollection   }
 )

 export default connect(mapStateToProps) (ShopPage) 