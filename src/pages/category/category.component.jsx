import { connect } from "react-redux"
import { selectOneCollection } from "../../redux/shop/shop.selector"
import "./collection.styles.scss"

import CollectionItem from "../../components/collection-item/collection-item.component"

const CategoryPage=({collection})=>{
    console.log(collection)
    const {title,items}=collection
    return (
    <div className="category">
    <h2 className="title">{title}</h2>
    <div className="item">
    {
        items.map(
            item=>(
                <CollectionItem key={item.id} 
                                item={item}/>
            )
        )
    }
    </div>

    </div>) 
}
const mapStateToProps=(state,ownProps)=>({
    collection:selectOneCollection(ownProps.match.params.categoryId)(state)
})
export default connect(mapStateToProps)( CategoryPage)