import React, { use, useEffect,useState } from 'react';
import styling from '../pages/cart.module.css'
import CartItems from '../components/cartItems';
import { v4 as uuidv4 } from 'uuid';
import Total from '../components/Total';
const Cart = () => {
  let sum = 0;
    const [cart, setCart] = useState([]);
    const[totalPrice,setTotalPrice]=useState(0)
    useEffect(() => {
      let sum=0
      const storedCart=localStorage.getItem("cart")
      const storedOrders = localStorage.getItem("orders");
      if(storedCart){
        if(storedOrders){
          const newCart=[...JSON.parse(storedCart),...JSON.parse(storedOrders)]
          for(let i of newCart){
            sum+=i.totalPrice*i.quantity
          }
          setTotalPrice(sum)
          setCart(newCart)
          localStorage.removeItem("cart")
          localStorage.removeItem("orders")
          localStorage.setItem("cart",JSON.stringify(newCart))
        }
        else{
          const parsedCart=JSON.parse(storedCart)
          for(let i of parsedCart){
            sum+=i.totalPrice*i.quantity
          }
          setCart([...JSON.parse(storedCart)])
          setTotalPrice(sum)
        }
      }
      else{ 
        if (storedOrders) {
          const parsedOrder=JSON.parse(storedOrders)
          for(let i of parsedOrder){
            sum+=i.quantity*i.totalPrice
          }
          const cart=[...JSON.parse(storedOrders)]
          setCart([...JSON.parse(storedOrders)]); 
          setTotalPrice(sum)
          localStorage.setItem("cart",JSON.stringify(cart))
          localStorage.removeItem("orders")
        } 
      }

    }, []);
    return (
        <div className={styling.fluid}>
            <div className={styling.fluidWrapper}>
                <h1 className={styling.header}>YOUR CART</h1>
                {
                  cart.map((i)=>{
                    return <CartItems key={uuidv4()} itemIng={i["ingredients"]} quantity={i["quantity"]} itemPrice={i["totalPrice"]} ></CartItems>
                  })
                }
               
            </div>
            <Total finalPrice={totalPrice}></Total>
        </div>
    );
}

export default Cart;
