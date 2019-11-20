import React, { useEffect, useState} from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';

import PlaceOrder from './PlaceOrder';


function OrderNow(props) {


    function selectBase() {
        var x = document.getElementById("thebases").value;
        props.cupcake.base = x;
        console.log(props.cupcake)
    }

    function selectFrost() {
        var x = document.getElementById("thefrost").value;
        props.cupcake.frosting = x;
        console.log(props.cupcake)
    }

    function selectTopp(stuff) {
        console.log('stuff', stuff)
        let n = props.cupcake.toppings.includes(stuff)
        console.log(n)
        if (n) {
            for( var i = 0; i < props.cupcake.toppings.length; i++){ 
                if ( props.cupcake.toppings[i] === stuff) {
                    props.cupcake.toppings.splice(i, 1); 
                }
             }
        } else {
            props.cupcake.toppings.push(stuff)
        }
        
        console.log(props.cupcake)
    }

    

    if( props.bases == []) {
        return (
            <div className="OrderNow">
                <p>Welcome to TinyCakes Online Order System :)</p>
            </div>
        );
    } else {
        return (
            <div>
                <div>
                    <h1>Bases</h1>
                    <select id="thebases" onChange={selectBase} name="base">
                        
                        {props.bases.map(base => {
                            return (
                                // <p>{base.name}</p>
                                <option value={base.key}>{base.name}</option>
                            )
                        })}
                        
                    </select>
                    
                </div>
                <div>
                    <h1>Frostings</h1>
                    <select id="thefrost" onChange={selectFrost} name="frost">
                        
                        {props.frostings.map(frost => {
                            return (
                                // <p>{frost.name}</p>
                                <option value={frost.key}>{frost.name}</option>
                            )
                        })}
                        
                    </select>

                </div>
                <div>
                    <h1>Toppings</h1>
                    
                    <form id="thetoppings"  name="topp">
                        {props.toppings.map(topp => {
                            return (
                                // <p>{topp.name}</p>
                                <label>
                                <input name={topp.name} type="checkbox" value={topp.key} onClick={ event => {selectTopp(topp.key)} } /> {topp.name} <br></br>
                                </label>
                            )
                        })}
                        
                    </form>
                </div>

                <div>
                    <p>-----------------------</p>
                    
                    <button><Link to="/placeorder">Place Order</Link></button>

                    
                    

                </div>

                {/* <Route path="/placeorder" component={PlaceOrder}/> */}
                {/* <Route path="ordernow/placeorder" render={ () => <PlaceOrder cupcake={cupcake} /> } /> */}

            </div>
            

        )
    }

    // return (
    //     <div className="OrderNow">
    //         <p>Welcome to TinyCakes Online Order System :)</p>
    //     </div>
    // );
}

export default OrderNow;
