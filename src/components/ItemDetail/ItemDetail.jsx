import "./ItemDetail.css"

import { Link } from "react-router-dom"

const ItemDetail = ({id, name, price, size, img, detail}) => {

  return (
    <div className="itemDetail">
        <img src={img} alt={name}/>
        <div className="detailText">
          <h2>{name}</h2>
          <p>ID: {id}</p>
          <p>price: {price} €</p>
          <p>size: {size}</p>
          <p>{detail}</p>
          <Link to={-1}>go back</Link>
        </div>
    </div>
  )
}

export default ItemDetail