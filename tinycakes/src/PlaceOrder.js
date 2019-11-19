import React, { useEffect, useState} from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';

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
                console.log(cupcaketotal)
            } else {
                console.log('base not found', orderinfo.bases[i].name)
            }
        }

        for (let i=0; i < orderinfo.frostings.length; i++) {
            if (orderinfo.cupcake.frosting === orderinfo.frostings[i].key) {
                console.log('found', orderinfo.cupcake.frosting)
                cupcaketotal = cupcaketotal + orderinfo.frostings[i].price
                console.log(cupcaketotal)
            } else {
                console.log('frosting not found', orderinfo.frostings[i].name)
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
                        console.log(cupcaketotal)
                    } else {
                        console.log('topping not found', orderinfo.toppings[i].name)
                    }

                }
            }

        }
        

    }

    const delivery = 150;

    baseprice()
    
    let pretax = cupcaketotal + delivery

    let truepretax = (cupcaketotal/100).toFixed(2)

    let truedelivery = (delivery/100).toFixed(2)

    let tax = (8.75/100) * truepretax;

    let grandtotal = (parseFloat(tax) + parseFloat(truedelivery) + parseFloat(truepretax)).toFixed(2)

    // unsure if there is tax on delivery fees?  So I didn't factor that in.  Tax only on cuppy cake.


    return (
        <div className="PlaceOrder">
            <p>Place Your Order Here!</p>

            <div>
                <p>------------------</p>
                <p>Order Pricing Breakdown</p>
                <p>------------------</p>
            </div>

            <div>
            - cupcake price based on pricing of selected cupcake components
            - delivery charge of $1.50 per order
            - sales tax for the state of IL (8.75%)
            - total without tax
            - total with tax
            </div>
            
            <div>
                <p> Cupcake Total: {(cupcaketotal/100).toFixed(2)}</p>
                <p> Delivery Charge: {truedelivery}</p>
                <p> Pre-Tax Total: {(pretax/100).toFixed(2)} </p>
                <p> Tax IL (8.75%): {tax}</p>
                <p> Grand Total: {grandtotal}</p>
            </div>

            <div>
                <button>Submit Order!</button>
            </div>

        </div>
    );
}

export default PlaceOrder;