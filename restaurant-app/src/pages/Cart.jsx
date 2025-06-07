import React, { use, useEffect,useState } from 'react';
import styling from '../pages/cart.module.css'
import CartItems from '../components/cartItems';
import { v4 as uuidv4 } from 'uuid';
import Total from '../components/Total';
const Cart = () => {
    const [cart, setCart] = useState([]);
    const removeFromCart=(id)=>{
      const updatedCart=cart.filter((i)=>i["id"]!=id)
      localStorage.setItem("cart",JSON.stringify(updatedCart))
      setCart(updatedCart)
    }
    useEffect(() => {
      const storedCart=localStorage.getItem("cart")
      const storedOrders = localStorage.getItem("orders");
      if(storedCart){
        if(storedOrders){
          const parsedOrder=JSON.parse(storedOrders)
          parsedOrder[0]["id"]=uuidv4()
          const newCart=[...JSON.parse(storedCart),...parsedOrder]
          setCart(newCart)
          localStorage.removeItem("cart")
          localStorage.removeItem("orders")
          localStorage.setItem("cart",JSON.stringify(newCart))
        }
        else{
          setCart([...JSON.parse(storedCart)])
        }
      }
      else{ 
        if (storedOrders) {
          const parsedOrder=JSON.parse(storedOrders)
          parsedOrder[0]["id"]=uuidv4()
          const cart=[...parsedOrder]
          setCart([...cart]); 
          localStorage.setItem("cart",JSON.stringify(cart))
          localStorage.removeItem("orders")
        } 
      }

    }, []);
    const total = cart.reduce((sum, item) => sum + item.totalPrice, 0);
    return (
        <div className={styling.fluid}>
            <div className={styling.fluidWrapper}>
                <h1 className={styling.header}>YOUR CART</h1>
                {
                  cart.map((i)=>{
                    return <CartItems id={i["id"]}  key={i["id"]} remove={removeFromCart} itemIng={i["ingredients"]} quantity={i["quantity"]} itemPrice={i["totalPrice"]} ></CartItems>
                  })

                }
               
            </div>
            <Total finalPrice={total}></Total>
        </div>
    );
}

export default Cart;
