import React from 'react'
import Modal from '../../UI/Modal/Modal'
import classes from './cart.module.css'
import { useContext, useState } from 'react'
import { CartContext } from './../../../store/cart-context';
import CartItem from './CartItem/CartItem';
import Checkout from './Checkout/Checkout';
import LoadingWheel from './../../UI/LoadingWheel/LoadingWheel';

export default function Cart(props) {
       const [order, setOrder] = useState(false)
       const ctx = useContext(CartContext)
       const [submitting, setSubmitting] = useState(false)
       const [submitted, setSubmitted] = useState(false)
       const submitOrder = async (userData) => {
              setSubmitting(true)
              await fetch('https://food-udemy-default-rtdb.firebaseio.com/orders.json', {
                     method: 'POST',
                     body: JSON.stringify({
                            user: userData,
                            orderedItems: ctx.items
                     })
              })
              setSubmitting(false)
              setSubmitted(true)
              ctx.clearCart()
       }
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
       const handleOrder = () => {
              setOrder(true)
       }
       const cartItems = (
              <ul className={classes['cart-items']}>
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
       const buttons = <div className={classes.actions}>
              <button onClick={props.onHideCart} className={classes['button--alt']}>Close</button>
              {hasItems && <button onClick={handleOrder} className={classes.button}>Order</button>}
       </div>
       const cartContent = <>
              {cartItems}
              <div className={classes.total}>
                     <span>Total Amount</span>
                     <span>{totalAmount}</span>
              </div>
              {order && <Checkout handleSubmit={submitOrder} handleCancel={props.onHideCart} />}
              {!order && buttons}
       </>
       return (
              <Modal onHideCart={props.onHideCart}>
                     {submitting && !submitted ? <LoadingWheel /> : cartContent}
                     {submitted ? <p>Successfully sent order !</p> : ''}

              </Modal>
       )
}
