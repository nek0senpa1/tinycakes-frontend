import React, { useEffect, useState} from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';


function OrderNow() {

    const [bases, setBases] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/cupcakes/bases')
        .then( data => {
            console.log(data.data.bases)
            setBases(data.data.bases)
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
                {bases.map(base => {
                    return (
                        <p>{base.name}</p>
                    )
                })}
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
