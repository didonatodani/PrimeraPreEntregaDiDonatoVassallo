import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
  return (
    <header>
      <h1>Bonees</h1>
      <nav>
        <ul>
          <li>
            <a href="#tees">TEES</a>
          </li>
          <li>
            <a href="#caps">CAPS</a>
          </li>
          <li>
            <a href="#sweatshirts">SWEATSHIRTS</a>
          </li>
        </ul>
      </nav>
      <CartWidget/>
    </header>
  )
}

export default NavBar