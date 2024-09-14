/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import Item from "../Item/Item"
import "./ItemList.css"

const ItemList = ({products}) => {
  return (
    <div className="productsContainer">
      {products.map(item => <Item key={item.id} {...item}/>)}
    </div>

  )
}

export default ItemList