import styled from 'styled-components';

export const AboutContainer = styled.div`
  background: #150f0f;
  max-height: auto;
  width: 100%;
  background-position: center;
  background-size: cover;
  overflow: hidden;
`;

export const AboutTitle = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  h1{
    color: #fff;
    margin-top: 1rem;
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  @media screen and (max-width: 415px){
    h1{
      font-size: 1.3rem;
    }
  }
`;

export const AboutContent = styled.div`
  display: flex;
  padding: 1.2rem;
  color: #fff;

  @media screen and (max-width: 812px){
    padding: .9rem;
  }
`;

export const AboutContent__Left = styled.div`
  flex: 65%;
  margin-right: 10rem;
  margin-top: 3rem;
  p{
    font-family: 'Copperplate Gothic', sans-serif;
    letter-spacing: .2rem;
  }

  @media screen and (max-width: 1000px){
    margin-right: 5rem;
    font-size: .8rem;
  }

  @media screen and (max-width: 720px){
    font-size: .9rem;
  }

  @media screen and (max-width: 415px){
    p{
      font-size: .6rem;
    }
  }
`;

export const AboutContent__Right = styled.div`
  flex: 35%;
  margin-right: 3rem;
  p{
    font-family: 'Copperplate Gothic', sans-serif;
    letter-spacing: .1rem;
  }

  @media screen and (max-width: 1000px){
    margin-right: 1rem;
    font-size: .9rem;
    margin-top: 3rem;
  }

  @media screen and (max-width: 720px){
    font-size: .7rem;
  }

  @media screen and (max-width: 415px){
    p{
      font-size: .5rem;
    }
  }
`;

export const AboutImages = styled.div`
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 3rem;
  margin-bottom: 3rem;
`;

export const AboutImage = styled.img`
  height: 200px;
  min-width: 80px;
  max-width: 100%;
  object-fit: contain;
  margin-right: 1rem;
  margin-top: 1rem;

  @media screen and (max-width: 415px){
    height: 100px;
  }
`;
