import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CheckoutContainer = styled.div`
  height: 100vh;
  width: 100%;
  background: #150f0f;
`;

export const CheckoutContainerEmpty = styled.div`
  position: relative;
`;

export const CheckoutContainerImage = styled.div`

  background: linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.1)), url("https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  height: 40vh;
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1{
    color: #fff;
    margin-bottom: .5rem;
    font-family: 'Rockwell', sans-serif;
  }

  h2{
    color: #fff;
    font-family: 'Tahoma', sans-serif;
    margin-bottom: 1rem;
  }


  @media screen and (max-width: 415px){
    font-size: .6rem;
  }

  @media screen and (max-width: 736px){
    font-size: .8rem;
  }
`;

export const CheckoutContainerButton = styled(Link)`
  color: #fff;
  font-size: 1.2rem;
  background-color: orange;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 5px;
  text-decoration: none;
`;

export const CheckoutContainerContent = styled.div`
  width: 95%;
  margin-left: auto;
  margin-right: auto;

  h2{
    font-family: 'Rockwell', sans-serif;
    color: #fff;
    margin-top: 2rem;
    margin-left: 2rem;
  }

  @media screen and (max-width: 736px){
    font-size: .8rem;
    h2{
      margin-left: 1rem;
    }
  }
`;

export const CheckoutItems = styled.div`
  padding: 7rem 2rem;
  height: auto;
  background: #150f0f;
  display: flex;
  flex-direction: column;
`;


export const LinkHome = styled(Link)`
  position: absolute;
  top: 5%;
  color: #fff;
  font-size: 1rem;
  background-color: orange;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  text-decoration: none;
`;

export const CheckoutCard = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

export const CheckoutImg = styled.img`
  height: 150px;
  width: 150px;
  box-shadow: 1.5px 6px #fdc500;
  object-fit: cover;
`;

export const CheckoutInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: .5rem;
`;

export const CheckoutTitle = styled.h2`
  margin-bottom: 1rem;
  color: #fff;
  font-size: 1.2rem;
`;

export const CheckoutButton = styled.button`
  color: #fff;
  font-size: 1rem;
  background-color: orange;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0.3rem;
`;

export const CheckoutTotal = styled.div`
  color: #fff;
  position: absolute;
  top: 10%;
  left: 35%;

  @media screen and (max-width: 1200px){
    position: relative;
    left: 0;
    display: flex;
    flex-direction: column;
  }
`;

export const CheckoutH1 = styled.h1`
  font-family: 'Copperplate Gothic', sans-serif;
  margin-bottom: 1rem;

  @media screen and (max-width: 720px){
    margin-top: 1rem;
    font-size: 1.2rem;
    margin-bottom: .3rem;
  }
`;

export const CheckoutH2 = styled.h2`
  font-family: 'Courier New', sans-serif;

  @media screen and (max-width: 720px){
    font-size: .8rem;
  }
`;