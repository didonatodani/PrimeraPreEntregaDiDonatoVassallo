import { useState , useEffect } from "react";
import { getOneProduct } from "../../asynmock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css"

const ItemDetailContainer = () => {

  const [product, setProduct] = useState(null)
  const {idItem} = useParams();

  useEffect(()=>{
        getOneProduct(idItem)
          .then(response => setProduct(response))
  },[idItem])

  return (
    <div className="itemDetailContainer">
        <ItemDetail {...product}/>
    </div>
  )
  
}

export default ItemDetailContainer