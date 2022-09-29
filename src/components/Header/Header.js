import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css'

function Header() {
  return (
   <header className='header'>
      <div className='logo'>JWR</div>
      <nav>
         <ul className='nav-list'>
            <li className='nav-link'><Link to='/'>Про Нас</Link></li>
            <li className='nav-link'><Link to='/repair'>Ремонт</Link></li>
            <li className='nav-link'><Link to='/change'>Обмін</Link></li>
            <li className='nav-link'><Link to='/price'>Прайс</Link></li>
          </ul>
      </nav>
   </header>
  )
}
export default Header;
