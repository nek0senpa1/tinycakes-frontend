import React, { useEffect, useState} from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function PlaceOrder(orderinfo) {

    console.log('order', orderinfo.cupcake.base);
    console.log('len', orderinfo.bases.length)
    console.log('toppings', orderinfo.cupcake.toppings)

    let cupcaketotal = 0;

    const baseprice = function baseprice() {

        for (let i=0; i < orderinfo.bases.length; i++) {
            if (orderinfo.cupcake.base === orderinfo.bases[i].key) {
                console.log('found', orderinfo.cupcake.base)
                cupcaketotal = cupcaketotal + orderinfo.bases[i].price
                // console.log(cupcaketotal)
            } else {
                //console.log('base not found', orderinfo.bases[i].name)
            }
        }

        for (let i=0; i < orderinfo.frostings.length; i++) {
            if (orderinfo.cupcake.frosting === orderinfo.frostings[i].key) {
                console.log('found', orderinfo.cupcake.frosting)
                cupcaketotal = cupcaketotal + orderinfo.frostings[i].price
                // console.log(cupcaketotal)
            } else {
                //console.log('frosting not found', orderinfo.frostings[i].name)
            }
        }

        if (orderinfo.cupcake.toppings.length < 1 ) {
            console.log('NO TOPPINGS ADDED !!!')
        } else {

            for (let i=0; i < orderinfo.toppings.length; i++) {
                for (let j=0; j <orderinfo.cupcake.toppings.length; j++) {

                    if (orderinfo.cupcake.toppings[j] === orderinfo.toppings[i].key) {
                        console.log('found', orderinfo.cupcake.toppings[j])
                        cupcaketotal = cupcaketotal + orderinfo.toppings[i].price
                        // console.log(cupcaketotal)
                    } else {
                        //console.log('topping not found', orderinfo.toppings[i].name)
                    }

                }
            }

        }
        

    }

    let curDate = Date.now()

    const delivery = 150;

    baseprice()
    
    let pretax = cupcaketotal + delivery

    let truepretax = (cupcaketotal/100).toFixed(2)

    let truedelivery = (delivery/100).toFixed(2)

    let tax = (8.75/100) * truepretax;

    let grandtotal = (parseFloat(tax) + parseFloat(truedelivery) + parseFloat(truepretax)).toFixed(2)

    // unsure if there is tax on delivery fees?  So I didn't factor that in.  Tax only on cuppy cake.

    const [dategood, setDategood] = useState(false)

    const [deldate, setDeldate] = useState(Date.now())

    let ordertosend = {
        "order": {
            "cupcakes": [{
            "base": orderinfo.cupcake.base,
            "frosting": orderinfo.cupcake.frosting,
            "toppings": orderinfo.cupcake.toppings
            }],
            "delivery_date": deldate
      }
    }

    const handleChange = date => {
        if (date > Date.now(+1) ) {
            console.log('is later')
            console.log(date)
            setDeldate(date);
            setDategood(true)
         console.log('deldate',deldate)
        } else {
            console.log('is NOT later')
            setDategood(false)
        }
        
      };

    function submitOrder() {
        // xhr.js:166 Access to XMLHttpRequest at 'localhost:4000/cupcakes/orders' from origin 'http://localhost:3000' has been blocked by CORS policy: Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, https.
        // this backend has been a bit rough, especially considering I can't change it during this to make it work against CORS errors for local dev...
        // works fine in PostMan though...

        console.log(ordertosend)

        axios.post('localhost:4000/cupcakes/orders', ordertosend)
        .then( order => {
            console.log(order)
        })
        .catch( error => {
            console.log(error)
        })
    }

    

    return (
        <div className="PlaceOrder">
            <p>Place Your Order Here!</p>

            <div>
                <p>------------------</p>
                <p>Order Pricing Breakdown</p>
                <p>------------------</p>
            </div>
            
            <div>
                <p> Cupcake Total: {(cupcaketotal/100).toFixed(2)}</p>
                <p> Delivery Charge: {truedelivery}</p>
                <p> Pre-Tax Total: {(pretax/100).toFixed(2)} </p>
                <p> Tax IL (8.75%): {tax}</p>
                <p> Grand Total: {grandtotal}</p>
            </div>

            <div>
                <br></br>
                <p>Pick a Delivery Date:</p>
                <DatePicker
                    selected={deldate}
                    onChange={handleChange}
                />
            </div>
            <div>
                {!dategood ?
                <p>Please pick a Delivery Date After Today...</p>
                : <div><p>Delivery Date Good, you may place your Order</p>
                <button onClick={submitOrder}>Submit Order!</button></div>
                }
            </div>

            <br></br><br></br>
            

        </div>
    );
}

export default PlaceOrder;