import React, { useEffect, useState } from 'react';
import styling from'../components/total.module.css'
const Total = ({finalPrice}) => {
    const [order,setOrder]=useState([])
    const[totalPrice,setTotalPrice]=useState(0)
    return (
       <div className={styling.mainTotal}>
            <div>
            <p>price: 300</p>
            <p>Taxs: 30%</p>
            <p>service: 10%</p>
            <p>Totla price:{finalPrice}</p>
            </div>
            <div className={styling.buttonWrapper}>
                <button>Confirm payment</button>
                <button>Add Coupon</button>
            </div>
        </div>
    );
}

export default Total;
