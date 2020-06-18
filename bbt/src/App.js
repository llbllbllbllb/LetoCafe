import React from 'react';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css';

import Navbar from './components/Navbar';
import OrderCake from './components/OrderCake';
import ProductList from './components/ProductList';
import Contact from './components/Contact';
import Catering from './components/Catering';
import CustomCakes from './components/CustomCakes';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      {/* <OrderCake/> */}
      
        <Switch>
          <Route path="/order-cakes" exact component={ProductList}/>
          <Route path="/catering" exact component={Catering}/>
          <Route path="/custom-cakes" exact component={CustomCakes}/>
          <Route path="/contact" exact component={Contact}/>
        </Switch>
      

    </div>
    </Router>
  );
}

export default App;
