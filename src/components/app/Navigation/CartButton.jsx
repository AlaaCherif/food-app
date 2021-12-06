import React from 'react'
import CartIcon from './../../Cart/CartIcon';
import classes from "./header.module.css"
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../../store/cart-context'

export default function CardButton(props) {
       const cartctx = useContext(CartContext);
       const [highligt, setHighligt] = useState(false)
       const nbr = cartctx.items.reduce((currNumber, item) => {
              return currNumber = currNumber + item.amount
       }, 0)
       const btnClasses = `${classes.button} ${highligt ? classes.bump : ''}`
       const { items } = cartctx
       useEffect(() => {
              if (items.length === 0)
                     return
              setHighligt(true)
              const timer = setTimeout(() => {
                     setHighligt(false)
              }, 300)
              return () => {
                     clearTimeout(timer)
              }
       }, [items])
       return (
              <button onClick={props.onShowCart} className={btnClasses}>
                     <span className={classes.icon}>
                            <CartIcon />
                     </span>
                     <span>Your Cart</span>
                     <span className={classes.badge}>{nbr}</span>
              </button>
       )
}
