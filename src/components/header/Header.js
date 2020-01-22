import React from 'react';
import logo from '../../assets/images/logo.png'
import './header.scss'
import Button from '../../common/button/Button';

function Header() {
  return (
    <div className='App'>
      <div className='header card'>
         <a href="/">
            <img alt='logo' src={logo} className='header__logo'/>
        </a>
        <Button className='header__cart__btn'>Cart</Button>
      </div>
    </div>
  );
}

export default Header;
