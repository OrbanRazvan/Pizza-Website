import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalStyles } from './globalStyles';
import Hero from './components/Hero/Hero';
import Products from './components/Products/Products';
import { productData, productData2 } from './components/Products/data';
import Dessert from './components/Product2/Dessert';
import Checkout from './components/Checkout/Checkout';
import About from './components/About/About';

function App() {


  return (
    <Router>
      <Switch>
        <Route path="/Checkout">
          <GlobalStyles />
          <Checkout />
        </Route>
        <Route path="/">
          <GlobalStyles />
          <Hero />
          <About />
          <Products data={productData} />
          <Dessert data={productData2} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;