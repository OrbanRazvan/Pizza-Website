import styled from 'styled-components';

export const ProductsContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem 5rem;
  background: #150f0f;
  color: #fff;
  overflow: hidden;
`;

export const ProductsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const ProductCard = styled.div`
  margin: 1.5rem 1.8rem;
  line-height: 2;
  width: 300px;
`;

export const ProductImg = styled.img`
  height: 200px;
  min-width: 250px;
  max-width: 100%;
  box-shadow: 3px 6px #fdc500;
  object-fit: cover;

  &:hover{
    box-shadow: 3px 6px #DC793E;
    opacity: .7;
  }
`;

export const ProductsHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 4rem;
`;

export const ProductTitle = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: 400;
  font-size: 1.5rem;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 .3rem;
`;

export const ProductDesc = styled.p`
  font-size: .8rem;
`;

export const ProductPrice = styled.p`
  margin-bottom: .5rem;
  font-size: 1.5rem;
`;

export const ProductButton = styled.button`
  color: #fff;
  font-size: 1.2rem;
  background-color: orange;
  border: none;
  outline: none;
  padding: .6rem;
  cursor: pointer;
`;
