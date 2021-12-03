import React from 'react'
import Modal from '../../UI/Modal/Modal'
import classes from './cart.module.css'

export default function Cart(props) {
       const cartItems = (
              <ul>
                     {[{ id: 1, name: 'sushi', amount: 2, price: 12.99 }].map((item) => {
                            return <li key={item.id}>{item.name}</li>
                     })}
              </ul>
       )
       return (
              <Modal onHideCart={props.onHideCart}>
                     {cartItems}
                     <div className={classes.total}>
                            <span>Total Amount</span>
                            <span>35.62</span>
                     </div>
                     <div className={classes.actions}>
                            <button onClick={props.onHideCart} className={classes['button--alt']}>Close</button>
                            <button className={classes.button}>Order</button>
                     </div>
              </Modal>
       )
}
