import React, { memo, useState } from 'react';
import styling from'../components/cartItems.module.css'
import { v4 as uuidv4 } from 'uuid';
const CartItems = ({name,paths,itemIng,itemPrice ,quantity}) => {
    return (
        <div className={styling.containerDiv} >
            <div>
                <img src="../src/assets/burger.png" alt="" />
            </div>
            <div className={styling.contentDiv}>
                <h1 className={styling.lexend}>Best burger</h1>
                <div className={styling.ingImgWrapper}>
                <button className={styling.ingButton}>
                    <img className={styling.ingImg} src="../src/assets/burger.png" alt="" />
                </button>
                <button className={styling.ingButton}>
                    <img className={styling.ingImg} src="../src/assets/burger.png" alt="" />
                </button>
                <button className={styling.ingButton}>
                    <img className={styling.ingImg} src="../src/assets/burger.png" alt="" />
                </button>
                </div>
                <div className={styling.ingWrapper} >
                    {
                        itemIng.map((ing)=>{
                            return <p key={uuidv4()} className={styling.ingParagraph}>{ing["name"]}</p>
                        })
                    }
                </div>
                <div className={styling.quantityPriceWrapper}>
                    <p  className={styling.paragraph} style={{color:"white",marginTop:"4.2px"}}>{quantity}x</p>
                <div>
                    <p>price : {itemPrice} EGP</p>
                </div>
                </div>
            </div>
        </div>
    );
}

export default CartItems;
