import React, { useEffect, useState} from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';

function Orders() {

    const [orders, setOrders] = useState([])

    useEffect(() => {
        axios.get('localhost:4000/cupcakes/orders')
        .then( data => {
            console.log('order data',data)
            
        })
        .catch( error => {
            console.log(error)
        })

    }, [])


  return (
    <div className="Orders">
     
      <p>Check your previous orders here !!! </p>
      <p>--------------------------------------------</p>


      
    </div>
  );
}

export default Orders;
