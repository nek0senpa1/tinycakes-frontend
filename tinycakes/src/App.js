import React, { useEffect, useState} from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import OrderNow from './OrderNow';
import About from './About';
import Orders from './Orders';
import Home from './Home';
import axios from 'axios';
import PlaceOrder from './PlaceOrder';

function App() {

    const [bases, setBases] = useState([]);
    const [frostings, setFrostings] = useState([]);
    const [toppings, setToppings] = useState([]);

    const [cupcake, setCupcake] = useState({base: "peanutButterBase", frosting: "vanillaFrosting", toppings: [] })

    // const cupcake = {
    //     base: "",
    //     frosting: "",
    //     toppings: []
    // }

    useEffect(() => {
        axios.get('http://localhost:4000/cupcakes/bases')
        .then( data => {
            console.log(data.data.bases)
            setBases(data.data.bases)
        })
        .catch( error => {
            console.log(error)
        })

        axios.get('http://localhost:4000/cupcakes/frostings')
        .then( data => {
            console.log(data.data.frostings)
            setFrostings(data.data.frostings)
        })
        .catch( error => {
            console.log(error)
        })

        axios.get('http://localhost:4000/cupcakes/toppings')
        .then( data => {
            console.log(data.data.toppings)
            setToppings(data.data.toppings)
        })
        .catch( error => {
            console.log(error)
        })


    }, [])




  return (
    <div className="App">
      <h1>TinyCakes!</h1>
      
      <button><Link to="/">Home</Link></button>
      <button><Link to="/ordernow">Order Now</Link></button>
      <button><Link to="/orders">Orders Placed</Link></button>
      <button><Link to="/about">About</Link></button>
      
      <Route exact path="/" component={Home}/>
      <Route path="/ordernow" render={ () => <OrderNow cupcake={cupcake} bases={bases} frostings={frostings} toppings={toppings}  /> }/>
      <Route path="/orders" component={Orders}/>
      <Route path="/about" component={About}/>
      <Route path="/placeorder" render={ () => <PlaceOrder cupcake={cupcake} bases={bases} frostings={frostings} toppings={toppings}  /> } />

    </div>
  );
}

export default App;
