import React, { useState } from 'react'
import { Button } from '../Button'
import { Link } from 'react-router-dom'
import './header.css'
import logo2 from '../../assets/logo2.png'
import BurgerButton from '../BurgerButton/BurgerButton'

const header = () => {
  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    setClicked(!clicked)
  }
  return (
   <header>
    <Link to = '/' className='link'><img src={logo2} alt="Logo" /></Link>
    <nav>
        <Button type="secondary">Iniciar Sesión</Button>
        <Button type="secondary">Crear Cuenta</Button>
    </nav>
    <div className='burger'>
      <BurgerButton clicked={clicked} handleClick={handleClick} />
    </div>
    <div id="bgDiv" className={`initial ${clicked ? ' active' : ''}`}></div> 
  </header>
  )
}

export default header