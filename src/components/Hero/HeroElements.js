import styled from 'styled-components';
import { Link } from 'react-scroll';

export const HeroContainer = styled.div`
  background: linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.1)), url("https://images.pexels.com/photos/3762075/pexels-photo-3762075.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  height: 100vh;
  background-position: center;
  background-size: cover;
  position: relative;
`;

export const HeroContent = styled.div`
  position: absolute;
  top: 35%;
  left: 12%;

  h1{
    color: #fff;
    font-family: 'Lucida Console', sans-serif;
    font-size: 3.2rem;
    margin-bottom: 2rem;

    @media screen and (max-width: 812px){
      width: 80%;
      font-size: 2rem;
      margin-bottom: 1.5rem;
    }

    @media screen and (max-width: 400px){
      width: 90%;
      letter-spacing: 1px;
      font-size: 1.8rem;
      margin-bottom: 1.5rem;
    }
  }

  @media screen and (max-width: 720px){
      left: 6%;
  }
`;

export const HeroLink = styled(Link)`
  
  button{
    color: #fff;
    background-color: orange;
    font-family: 'Courier New', sans-serif;
    padding: .8rem;
    font-weight: 700;
    border: none;
    outline: none;
    cursor: pointer;
  }

  @media screen and (max-width: 812px){
      padding: .6rem;
      font-size: .8rem;
  }

  @media screen and (max-width: 400px){
      padding: .4rem;
      font-size: .8rem;
    }
`;