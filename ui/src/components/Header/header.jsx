import { useState } from 'react'
import { Button } from '../Button'
import { Link, useNavigate } from 'react-router-dom'
import './header.css'
import logo2 from '../../assets/logo2.png'
import BurgerButton from '../BurgerButton/BurgerButton'

const Header = () => {
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate()
  const handleClick = () => {
    setClicked(!clicked)
  }
  return (
    <header>
      <div className='header_logo'>
        <Link to='/' className='link'><img src={logo2} alt="Logo" /></Link>
        <span>Vive la aventura</span>
      </div>
      <nav>
        <Button type="primary" onClick={() => navigate("/login")}>Iniciar Sesión</Button>
        <Button type="secondary" onClick={() => navigate("/signup")}>Crear Cuenta</Button>
      </nav>
      <div className='burger'>
        <BurgerButton clicked={clicked} handleClick={handleClick} />
      </div>
      <div id="bgDiv" className={`initial ${clicked ? ' active' : ''}`}>
        <div className='bgDiv__content'>
          <p onClick={() => navigate("/login")}>Crear cuenta</p>
          <p onClick={() => navigate("/signup")}>Iniciar sesión</p>
        </div>
      </div>
    </header>
  )
}

export default Header