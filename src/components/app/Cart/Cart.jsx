import React from 'react'
import Modal from '../../UI/Modal/Modal'
import classes from './cart.module.css'
import { useContext } from 'react'
import { CartContext } from './../../../store/cart-context';
import CartItem from './CartItem/CartItem';

export default function Cart(props) {
       const ctx = useContext(CartContext)
       const cartItemRemoveHandler = (id) => {
              ctx.removeItem(id)
       }
       const cartItemAddHandler = (item) => {
              ctx.addItem(
                     {
                            ...item,
                            amount: 1
                     }
              )
       }

       const cartItems = (
              <ul>
                     {ctx.items.map((item) => {
                            return <CartItem
                                   key={item.id}
                                   name={item.name}
                                   amount={item.amount}
                                   price={item.price}
                                   onRemove={cartItemRemoveHandler.bind(null, item.id)}
                                   onAdd={cartItemAddHandler.bind(null, item)}
                            />
                     })}
              </ul>
       )
       const totalAmount = `$${ctx.totalAmount.toFixed(2)}`
       const hasItems = ctx.items.length > 0
       return (
              <Modal onHideCart={props.onHideCart}>
                     {cartItems}
                     <div className={classes.total}>
                            <span>Total Amount</span>
                            <span>{totalAmount}</span>
                     </div>
                     <div className={classes.actions}>
                            <button onClick={props.onHideCart} className={classes['button--alt']}>Close</button>
                            {hasItems && <button className={classes.button}>Order</button>}
                     </div>
              </Modal>
       )
}
