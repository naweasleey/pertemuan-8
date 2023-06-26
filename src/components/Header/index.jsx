import React from 'react'
import { BsFillHandbagFill } from 'react-icons/bs'
import { NavLink} from 'react-router-dom'
import './header.css'

const Header = () => {
  return (
    <header className='wrapper-header'>
      <div className='wrapper-logo'>
        <BsFillHandbagFill size={30} color='black' /> Minerva Store
      </div>
      <nav className='wrapper-nav'>
        <ul className='list-nav'>
          <li className='nav-item'>
            <NavLink to='/'>Dashboard</NavLink></li>
          <li className='nav-item'>
            <NavLink to='/shop'>Shop</NavLink></li>
          <li className='nav-item'>
            <NavLink to='/about'>About</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header