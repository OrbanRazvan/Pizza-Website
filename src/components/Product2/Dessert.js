import React, { useEffect } from 'react';
import { useStateValue } from '../../StateProvider';
import { ProductsContainer, ProductsHeading, ProductsWrapper, ProductCard, ProductImg, ProductInfo, ProductTitle, ProductDesc, ProductPrice, ProductButton } from '../Products/ProductElements';
import "aos/dist/aos.css";
import Aos from 'aos';

const Dessert = ({ data }) => {

  const [{ basket }, dispatch] = useStateValue();

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <ProductsContainer id="dessert">
      <ProductsHeading data-aos="fade-right">Our Desserts</ProductsHeading>
      <ProductsWrapper>
        {data.map((product, index) => {
          return (
            <ProductCard data-aos="fade-up" key={index}>
              <ProductTitle>{product.name}</ProductTitle>
              <ProductImg src={product.img} alt={product.alt} />
              <ProductInfo>
                <ProductDesc>{product.desc}</ProductDesc>
                <ProductPrice>${product.price}</ProductPrice>
                <ProductButton onClick={() =>
                  dispatch({
                    type: 'ADD_TO_BASKET',
                    item: {
                      name: product.name,
                      img: product.img,
                      alt: product.alt,
                      desc: product.desc,
                      price: product.price,
                    }
                  })}>Add Cart</ProductButton>
              </ProductInfo>
            </ProductCard>
          )
        })}
      </ProductsWrapper>
    </ProductsContainer>
  )
}

export default Dessert;