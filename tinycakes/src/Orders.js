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
            setOrders(data.orders)
        })
        .catch( error => {
            console.log(error)
        })

        //xhr.js:166 Access to XMLHttpRequest at 'localhost:4000/cupcakes/orders' from origin 'http://localhost:3000' has been blocked 
        //by CORS policy: Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, https.
        
        // not sure how to tell if it displays since I have CORS errors all over from a localhost...
        // plus the instructs in the readme don't work anyway, npm install failed several things, and the build-ts command really never worked completely either, so perhaps that's why...
        // it all works in postman though... no CORS issues there... so I'll try some other things, but this might be where it ends for now...

        // I could fix it, but I'd have to modify the backend portion of this.
    }, [])


    if( orders.length < 1 ) {
        return (
            <div className="Orders">
                <p>Looks like you don't have any orders with us yet... :( </p>
            </div>
        );
    } else {

        return (
            <div className="Orders">
             
                <p>Check your previous orders here !!! </p>
                <p>--------------------------------------------</p>
        
                {/* While I can't see any output due to CORS problems, this is close to what it would be for the working version with no sorting
                as I have no way to see it  */}
        
                {orders.map( info => {
                    return (
                        <div>
                        <p>Delivery Data: {info.delivery_date}</p>
                        <p>Cupcake Info: {info.cupcakes[0].base}, {info.cupcakes[0].frosting}</p>
                        <p>Order ID: {info.id}</p>
                        </div>
                    )
                })}
        
              
            </div>
          );

    }
    
}

export default Orders;
