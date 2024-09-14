import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget"
import { Link , NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <header>
      <Link to={"/"}>
          <img className="logo" src="../logo.png" alt="logo Bonees" />
      </Link>
      <nav>
        <ul>
          <li>
              <NavLink to={"/"}>HOME</NavLink>
          </li>
          <li>
              <NavLink to={"/category/tees"}>TEES</NavLink>
          </li>
          <li>
             <NavLink to={"/category/bags"}>BAGS</NavLink>
          </li>
          <li>
            <NavLink to={"/category/sweatshirts"}>SWEATSHIRTS</NavLink>
          </li>
        </ul>
      </nav>
      <CartWidget/>
    </header>
  )
}

export default NavBar