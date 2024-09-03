 import ItemList from "../ItemList/ItemList"
import "./ItemListContainer.css"
import { useState, useEffect } from "react"
import { getProducts } from "../../asynmock"

const ItemListContainer = () => {

    const [products, setProducts] = useState([])

    useEffect(()=>{
        getProducts()
        .then(response => setProducts(response))
        .catch(error => console.log(error))
    }, [])

  return (
    <>
      <h2 className="productsTitle">BONEES PRODUCTS</h2>
      <ItemList products={products}/>
    </>
  )
}

export default ItemListContainer