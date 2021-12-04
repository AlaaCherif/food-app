import React from 'react'
import classes from "./item.module.css"
import AmountForm from './Form/AmountForm';
import { useContext } from 'react';
import { CartContext } from '../../../store/cart-context';

export default function MenuItem(props) {
       const ctx = useContext(CartContext)
       const addToCartHandler = (amount) => {
              ctx.addItem({
                     id: props.item.id,
                     name: props.item.title,
                     amount: amount,
                     price: props.item.price
              })
       }
       return (
              <div className={classes.item}>
                     <div>
                            {/* items on the left */}
                            <h3>
                                   {props.item.title}
                            </h3>
                            <p>
                                   {props.item.description}
                            </p>
                            <p className={classes.price}>
                                   ${props.item.price}
                            </p>
                     </div>
                     <div>
                            <AmountForm addToCart={addToCartHandler} id={props.item.id} />
                     </div>
              </div>
       )
}
