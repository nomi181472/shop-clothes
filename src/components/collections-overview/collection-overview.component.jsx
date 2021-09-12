import "./collection-overview.component"
import PreviewCollection from "../preview-collection/preview-collection.component"
import { createStructuredSelector } from "reselect"
import { connect } from "react-redux"
import {selectCollectionsForPreview} from "../../redux/shop/shop.selector.js"
const CollectionsOverView=({collections})=>(
    <div className="collections-overview">
    {
        collections.map(({id,...otherPropsSection})=>(
            <PreviewCollection key={id} {...otherPropsSection}/>
        ))
    }
    </div>
)

const mapStateToProps=createStructuredSelector(
    {
collections:selectCollectionsForPreview
    }
)

export default connect(mapStateToProps)(CollectionsOverView)