import "./Item.css"

/* eslint-disable react/prop-types */
const Item = ({name, price, img}) => {
  return (
    <div className="cardProducts">
        <img src={img} alt="{name}" />
        <h3>{name}</h3>
        <p>Price: {price}</p>
        <button>See more...</button>
    </div>
  )
}

export default Item