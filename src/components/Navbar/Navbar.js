import React, { useState } from 'react';
import { Icons, Nav, NavLogo, NavComponents, NavLink, NavLink2, NavLink3, NavLogoComponents, Bars, NavMenu, NavMenuLink, CloseIcon, Shopping, NumberShopping } from './NavbarElements';
import { animateScroll as scroll } from 'react-scroll';
import { useStateValue } from '../../StateProvider';

const Navbar = () => {

  const [visible, setVisible] = useState(false);
  const [{ basket }] = useStateValue();

  const Visible = () => {
    setVisible(!visible);
  }

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <>
      <Nav>
        <NavLogoComponents>
          <NavLogo to="/" onClick={toggleHome}>MiaPizza</NavLogo>
          <Icons />
        </NavLogoComponents>
        <NavComponents>
          <NavLink to="pizza" smooth={true} duration={1000}>Pizza</NavLink>
          <NavLink to="dessert" smooth={true} duration={1000}>Desserts</NavLink>
          <NavLink2 to="/Checkout">
            <Shopping />
            <NumberShopping>{basket.length}</NumberShopping>
          </NavLink2>
        </NavComponents>
        <Bars onClick={Visible} />
        <NavMenu visible={visible} >
          <CloseIcon onClick={Visible} />
          <NavMenuLink to="pizza" smooth={true} duration={1000}>Pizza</NavMenuLink>
          <NavMenuLink to="dessert" smooth={true} duration={1000}>Desserts</NavMenuLink>
          <NavLink3 to="/Checkout">
            <Shopping />
            <NumberShopping>{basket.length}</NumberShopping>
          </NavLink3>
        </NavMenu>
      </Nav>
    </>
  )
}

export default Navbar;