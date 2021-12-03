import React from 'react'
import classes from './nav.module.css'
import mealsImage from "./meals.jpg"
import CartButton from './CartButton'


export default function Nav(props) {
       
       return (<>
              <header className={classes.header}>
                     <h1>ReactMeals</h1>
                     <CartButton cart={props.cart} onShowCart={props.onShowCart} />
              </header>
              <div className={classes['main-image']}>
                     <img src={mealsImage} alt='A table full of delicious food!' />
              </div>
       </>
       )
}
