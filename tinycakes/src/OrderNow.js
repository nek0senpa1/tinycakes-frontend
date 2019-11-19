import React, { useEffect, useState} from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';


function OrderNow() {

    const [bases, setBases] = useState([]);
    const [frostings, setFrostings] = useState([]);
    const [toppings, setToppings] = useState([]);

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


    if( bases == []) {
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
                {bases.map(base => {
                    return (
                        <p>{base.name}</p>
                    )
                })}
            </div>
            <div>
                <h1>Frostings</h1>
                {frostings.map(frost => {
                    return (
                        <p>{frost.name}</p>
                    )
                })}
            </div>
            <div>
                <h1>Toppings</h1>
                {toppings.map(topp => {
                    return (
                        <p>{topp.name}</p>
                    )
                })}
            </div>
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
