import React, { memo, useState } from 'react';
import styling from '../pages/menu.module.css'
import Category from '../components/category';
import { v4 as uuidv4 } from 'uuid';
const Menu = () => {
    const [category,setCategory]=useState([
        {name:"Burger",path:"../src/assets/burger.png"}
        ,{name:"Wraps",path:"../src/assets/wraps.png"}
        ,{name:"Fries",path:"../src/assets/fries.png"}
        ,{name:"Sides",path:"../src/assets/sides.png"}
        ,{name:"Salads",path:"../src/assets/salad.png"}
        ,{name:"New in the club",path:"../src/assets/new in the club.png"}
        ,{name:"Launch offers",path:"../src/assets/offer.png"}
        ,{name:"Deserts and Beverages",path:"../src/assets/deserts.png"}
    ])
    return (
        <div className={styling.main}>
           <div className={styling.firstB}><img src="../src/assets/b1.png" alt="" /></div>
           <div className={styling.secondB} ><img src="../src/assets/b2.png" alt="" /></div>
           <div className={styling.sixthB} ><img src="../src/assets/b6.png" alt="" /></div>
           <div className={styling.thirdB} ><img src="../src/assets/b3.png" alt="" /></div>
           <div className={styling.fourthB}><img src="../src/assets/b4.png" alt="" /></div>
           <div className={styling.fifthB}><img src="../src/assets/b5.png" alt="" /></div>
           <div className={styling.fluidWrapper}>
            <h1 className={styling.header}>MENU</h1>
            <div className={`${styling.fluid} ${styling.lexend}`} >
                {category.map((m)=><Category key={uuidv4()} name={m.name} path={m.path}></Category>)}
            </div>
           </div>
        </div>
    );
}

export default memo(Menu) ;
