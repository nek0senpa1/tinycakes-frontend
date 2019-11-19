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

        //xhr.js:166 Access to XMLHttpRequest at 'localhost:4000/cupcakes/orders' from origin 'http://localhost:3000' has been blocked by CORS policy: Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, https.
        
        // not sure how to tell if it displays since I have CORS errors all over from a localhost...
        // plus the instructs in the readme don't work anyway, npm install failed several things, and the build-ts command never worked, so perhaps that's why...
        // it all works in postman though... no CORS issues there... so I'll try some other things, but this might be where it ends for now...

        // I could fix it, but I'd have to modify the backend portion of this.
    }, [])


  return (
    <div className="Orders">
     
      <p>Check your previous orders here !!! </p>
      <p>--------------------------------------------</p>


      
    </div>
  );
}

export default Orders;
