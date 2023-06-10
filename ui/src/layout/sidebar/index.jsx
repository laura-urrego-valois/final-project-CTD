import './SidebarLayout.css'
export const SidebarLayout = ({ children }) => {
  return (
    <div className="admin-layout">
      <nav className="admin-menu">
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="/product-list">Producto</a></li>
          <li><a href="/category-list">Categoria</a></li>
        </ul>
      </nav>
      <main className="admin-content">
        {children}
      </main>
    </div>
  )
}
