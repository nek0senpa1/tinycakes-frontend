import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import OrderNow from './OrderNow';
import About from './About';
import Orders from './Orders';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <h1>TinyCakes!</h1>
      
      <button><Link to="/">Home</Link></button>
      <button><Link to="/ordernow">Order Now</Link></button>
      <button><Link to="/orders">Orders Placed</Link></button>
      <button><Link to="/about">About</Link></button>
      
      <Route exact path="/" component={Home}/>
      <Route path="/ordernow" component={OrderNow}/>
      <Route path="/orders" component={Orders}/>
      <Route path="/about" component={About}/>

    </div>
  );
}

export default App;
