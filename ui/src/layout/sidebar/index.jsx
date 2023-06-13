import { Link } from "react-router-dom"
import "./SidebarLayout.css"

export const SidebarLayout = ({ children }) => {
  return (
    <div className="admin-layout">
      <nav className="admin-menu">
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/user-list">Usuarios</Link>
          </li>
          <li>
            <Link to="/product-list">Productos</Link>
          </li>
          <li>
            <Link to="/category-list">Categorias</Link>
          </li>
          <li>
            <Link to="/country-list">Paises</Link>
          </li>
        </ul>
      </nav>
      <main className="admin-content">{children}</main>
    </div>
  )
}
