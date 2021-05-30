import styled from 'styled-components';
import { Link } from 'react-scroll';
import { Link as Link2 } from 'react-router-dom';
import { FaPizzaSlice } from 'react-icons/fa';
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "@react-icons/all-files/io/IoMdClose";
import { AiOutlineShoppingCart } from 'react-icons/ai';

export const Nav = styled.div`
  background: transparent;
  height: 60px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  font-weight: 700;
  z-index: 1;
`;

export const NavLogoComponents = styled.div`
  display: flex;
  margin-left: 100px;
  position: fixed;
  z-index: 100;

  @media screen and (max-width: 400px){
    margin-left: 20px;
  }

  @media screen and (max-width: 720px){
    margin-left: 20px;
  }
`;

export const NavLogo = styled(Link)`
  color: #fff;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;

  @media screen and (max-width: 415px){
    font-size: 1.1rem;
  }

  @media screen and (max-width: 720px){
    font-size: 1.3rem;
  }
`;

export const Icons = styled(FaPizzaSlice)`
  font-size: 1.6rem;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-left: 10px;

  @media screen and (max-width: 415px){
    font-size: 1.2rem;
  }

  @media screen and (max-width: 720px){
    font-size: 1.4rem;
  }
`;

export const NavComponents = styled.div`
  display: flex;
  position: absolute;
  right: 12%;
`;

export const NavLink = styled(Link)`
  margin-right: 100px;
  text-decoration: none;
  color: #fff;
  font-size: 1.3rem;
  cursor: pointer;

  @media screen and (max-width: 415px){
    display: none;
  }

  @media screen and (max-width: 812px){
    font-size: .8rem;
    margin-right: 20px;
  }
`;


export const NavLink2 = styled(Link2)`
  display: flex;
  text-decoration: none;

  @media screen and (max-width: 415px){
    margin-right: 35px;
  }
`;

export const Shopping = styled(AiOutlineShoppingCart)`
  color: #fff;
  font-size: 1.7rem;
`;

export const NumberShopping = styled.span`
  color: #fff;
`;



export const Bars = styled(FaBars)`
  display: none;

  @media screen and (max-width: 415px){
    display: flex;
    color: #fff;
    position: absolute;
    top: 22px;
    right: 20px;
    font-size: 1.3rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  height: 350px;
  width: 180px;
  background-color: orange;
  position: fixed;
  top: 0;
  right: ${({ visible }) => (visible ? '0' : '-250px')};
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  transition: 0.5s ease-out;
  z-index: 99;
`;

export const NavMenuLink = styled(Link)`
  color: #fff;
  display: flex;
  text-decoration: none;
  margin: 1rem 0;
`;

export const CloseIcon = styled(IoMdClose)`
  position: absolute;
  top: 20px;
  right: 18px;
  color: #fff;
  font-size: 1.6rem;
`;

export const NavLink3 = styled(Link2)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;