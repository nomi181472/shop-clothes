import "./collection-preview.styles.scss"

import CollectionItem from "../collection-item/collection-item.component"
const PreviewCollection=({title,items})=>{
console.log(items)
    return (<div className="collection-preview">
    <h1 className="title"> {title}</h1>
       <div className="preview">
       {items
        .filter((item,idx)=>idx<4)
        .map(({id,...otherPropsItems})=>(
           <CollectionItem key={id} {...otherPropsItems}/>
       ))}
       </div>
        </div>)
}

export default PreviewCollection