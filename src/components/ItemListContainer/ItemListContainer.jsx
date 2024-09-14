import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import { getProducts , getProductsByCat } from "../../asynmock";
import { useParams } from "react-router-dom";


const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const {idCategory} = useParams ()

    useEffect(()=>{

        const showProducts = idCategory ? getProductsByCat : getProducts;

        showProducts(idCategory)
          .then(res => setProducts(res))
          .catch(error => console.log(error))

    }, [idCategory])

  return (
    <>
      <h2 className="productsTitle">BONEES PRODUCTS</h2>
      <ItemList products={products}/>
    </>
  )
}

export default ItemListContainer