import React from 'react';
import Navbar from '../Navbar/Navbar';
import { HeroContainer, HeroContent, HeroLink } from './HeroElements';
import { motion } from 'framer-motion';

const Hero = () => {

  const ContainerMotion = {
    hidden: {
      opacity: 0,
      y: -100
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'tween',
        delay: .5,
        duration: 1
      }
    },
    hidden2: {
      opacity: 0,
      y: 100
    },
    visible2: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'tween',
        delay: .5,
        duration: 1
      }
    }
  }

  return (
    <HeroContainer>
      <Navbar />
      <HeroContent>
        <motion.h1
          variants={ContainerMotion}
          initial="hidden"
          animate="visible">The best pizza in the Univers</motion.h1>
        <HeroLink to="discover" smooth={true} duration={1000}><motion.button
          variants={ContainerMotion}
          initial="hidden2"
          animate="visible2">Discover Now</motion.button></HeroLink>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero;
