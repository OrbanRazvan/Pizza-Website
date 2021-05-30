import React, { useEffect } from 'react';
import { useStateValue } from '../../StateProvider';
import { TotalCartItem } from '../Data/reducer';
import { CheckoutContainer, CheckoutContainerEmpty, CheckoutContainerImage, CheckoutContainerButton, CheckoutContainerContent, CheckoutItems, LinkHome, CheckoutCard, CheckoutImg, CheckoutInfo, CheckoutTitle, CheckoutButton, CheckoutTotal, CheckoutH1, CheckoutH2 } from './CheckoutStyle';
import "aos/dist/aos.css";
import Aos from 'aos';

const Checkout = () => {

  const [{ basket }, dispatch] = useStateValue();

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);


  return (
    <CheckoutContainer>
      {basket?.length === 0 ? (
        <CheckoutContainerEmpty>
          <CheckoutContainerImage>
            <h1 data-aos="fade-down">MiaPizza</h1>
            <h2 data-aos="fade-down">The greatest pizza is just a click away</h2>
            <CheckoutContainerButton data-aos="fade-up" to="/">Home</CheckoutContainerButton>
          </CheckoutContainerImage>
          <CheckoutContainerContent>
            <h2 data-aos="fade-right">Your shopping cart is empty</h2>
          </CheckoutContainerContent>
        </CheckoutContainerEmpty>
      ) : (
        <CheckoutItems>
          <LinkHome data-aos="fade-down" to="/">Home</LinkHome>
          {basket.map((item, index) => (
            <CheckoutCard data-aos="fade-right" key={index}>
              <CheckoutImg src={item.img} alt={item.alt} />
              <CheckoutButton onClick={() =>
                dispatch({
                  type: 'REMOVE_TO_BASKET',
                  item: {
                    name: item.name,
                    img: item.img,
                    alt: item.alt,
                    desc: item.desc,
                    price: item.price,
                  },
                })}>Remove</CheckoutButton>
              <CheckoutInfo>
                <CheckoutTitle>{item.name}</CheckoutTitle>
              </CheckoutInfo>
            </CheckoutCard>
          ))}
          <CheckoutTotal>
            <CheckoutH1 data-aos="fade-up">Total items in cart {basket.length}</CheckoutH1>
            <CheckoutH2 data-aos="fade-up">Total price {TotalCartItem(basket)}$</CheckoutH2>
          </CheckoutTotal>
        </CheckoutItems>
      )}
    </CheckoutContainer>
  )
}

export default Checkout;