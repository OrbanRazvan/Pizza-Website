import React, { useEffect } from 'react';
import { AboutContainer, AboutTitle, AboutContent, AboutContent__Left, AboutContent__Right, AboutImages, AboutImage } from './AboutElements';
import "aos/dist/aos.css";
import Aos from 'aos';

const About = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <AboutContainer id="discover">
      <AboutTitle>
        <h1 data-aos="fade-down">A short history</h1>
      </AboutTitle>
      <AboutContent>
        <AboutContent__Left data-aos="fade-down">
          <p>
            Foods similar to pizza have been made since the Neolithic Age. Records of people adding other ingredients to bread to make it more flavorful can be found throughout ancient history. In the 6th century BC, the Persian soldiers of the Achaemenid Empire during the rule of Darius the Great baked flatbreads with cheese and dates on top of their battle shields[19][20] and the ancient Greeks supplemented their bread with oils, herbs, and cheese.
          </p>
        </AboutContent__Left>
        <AboutContent__Right data-aos="fade-down">
          <p>
            A popular contemporary legend holds that the archetypal pizza, pizza Margherita, was invented in 1889, when the Royal Palace of Capodimonte commissioned the Neapolitan pizzaiolo (pizza maker) Raffaele Esposito to create a pizza in honor of the visiting Queen Margherita. Of the three different pizzas he created, the Queen strongly preferred a pizza swathed in the colors of the Italian flag — red (tomato), green (basil), and white (mozzarella).
          </p>
        </AboutContent__Right>
      </AboutContent>
      <AboutImages>
        <AboutImage data-aos="fade-right" src="https://i.pinimg.com/474x/99/df/f7/99dff7c21ec5ea2eae97a4c2ca18f25b.jpg" alt="Historical1" />
        <AboutImage data-aos="fade-down" src="https://artisanpizzakitchen.com/wp-content/uploads/2019/07/anchent-Rome.jpg" alt="Historical2" />
        <AboutImage data-aos="fade-left" src="https://s3.amazonaws.com/s3.timetoast.com/public/uploads/photo/7656512/image/2edf7f6d846746d7c1954ad3f980ef4c" alt="Historical9" />
      </AboutImages>
    </AboutContainer>
  )
}

export default About;
