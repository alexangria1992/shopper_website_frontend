import React, { useContext, useRef, useState } from 'react';
import './Navbar.css';
import nav_dropdown from '../Assets/nav_dropdown.png';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
const Navbar = () => {
  const [menu, setMenu] = useState('shop');
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();
  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  };
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt='' />
        <p>SHOPPER</p>
      </div>
      <img
        src={nav_dropdown}
        className='nav-dropdown'
        onClick={dropdown_toggle}
        alt=''
      />
      <ul ref={menuRef} className='nav-menu'>
        <li onClick={() => setMenu('shop')}>
          <Link to='/' style={{ textDecoration: 'none' }}>
            Shop
          </Link>{' '}
          {menu === 'shop' ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu('mens')}>
          <Link to='/mens' style={{ textDecoration: 'none' }}>
            Men
          </Link>{' '}
          {menu === 'mens' ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu('womens')}>
          <Link to='womens' style={{ textDecoration: 'none' }}>
            Women
          </Link>{' '}
          {menu === 'womens' ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu('kids')}>
          <Link to='/kids' style={{ textDecoration: 'none' }}>
            Kids
          </Link>{' '}
          {menu === 'kids' ? <hr /> : <></>}
        </li>
      </ul>
      <div className='nav-login-cart'>
        <Link to='/login'>
          <button>login</button>
        </Link>
        <Link to='/cart'>
          <img src={cart_icon} alt='' />
        </Link>
        <div className='nav-cart-count'>{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
