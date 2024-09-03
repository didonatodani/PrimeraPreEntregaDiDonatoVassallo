import { useState } from "react"
import "./ItemCount.css"


useState

// eslint-disable-next-line react/prop-types
const ItemCount = ({stock, teeName}) => {

  const [count, setContador] = useState(1)

    const addItem = () => {
      if (count < stock){ 
        setContador (count + 1)
      }
    }

    const substractItem = () => {
      if (count > 1){
        setContador (count - 1)
      }
    }
  
  return (
    <div className="itemCard">
        <h3>{teeName}</h3>
        <div className="countButtons">
          <button onClick={substractItem}> - </button>
          <strong>{count}</strong>
          <button onClick={addItem}> + </button>
        </div>
    </div>
  )
}