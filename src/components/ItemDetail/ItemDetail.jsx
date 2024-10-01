import "./ItemDetail.css"
import Counter from "../Counter/Counter"
import { useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from '../../context/CartContext'
import { useContext } from "react";

const ItemDetail = ({id, name, price, size, img, detail, stock}) => {

  const [addQuantity, setAddQuantity] = useState(0)

  const {addToCart} = useContext(CartContext)

  const quantityHandler = (quantity) =>{
    setAddQuantity(quantity)
    console.log("Productos agregador:" + quantity)
    const item = {id, name, price}
    addToCart(item, quantity)
  }
 
  return (
    <div className="itemDetail">
        <img src={img} alt={name}/>
        <div className="detailText">
          <h2>{name}</h2>
          <p>ID: {id}</p>
          <p>price: {price} €</p>
          <p>size: {size}</p>
          <p>{detail}</p>
          {
            addQuantity > 0 ? (<Link to="/cart">Finish shopping</Link>) : (<Counter initial={1} stock={stock} addToCart={quantityHandler}/>)
          }
          <Link to={-1}>go back</Link>
        </div>
    </div>
  )
}

export default ItemDetail