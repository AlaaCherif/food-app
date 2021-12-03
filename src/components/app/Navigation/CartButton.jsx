import React from 'react'
import CartIcon from './../../Cart/CartIcon';
import classes from "./header.module.css"
import { useContext } from 'react'
import { CartContext } from '../../../store/cart-context'

export default function CardButton(props) {
       const cartctx = useContext(CartContext);
       const nbr = cartctx.items.reduce((currNumber, item) => {
              return currNumber = currNumber + item.amount
       }, 0)
       return (
              <button onClick={props.onShowCart} className={classes.button}>
                     <span className={classes.icon}>
                            <CartIcon />
                     </span>
                     <span>Your Cart</span>
                     <span className={classes.badge}>{nbr}</span>
              </button>
       )
}
