import React from 'react'
import SHOP_DATA from './shopdata';
import PreviewCollection from "../../components/preview-collection/preview-collection.component"
export class ShopPage extends React.Component{
constructor(){
    super()
    this.state={collections:SHOP_DATA}

}
render() {
    const {collections}=this.state
    return (
        <div className="shop-page">
            {
                collections.map(({id,...otherPropsSection})=>(
                    <PreviewCollection key={id} {...otherPropsSection}/>
                ))
            }
        </div>
    );
}
}