import React from 'react'
import classes from './nav.module.css'
import mealsImage from "./meals.jpg"
import CardButton from './CartButton'

export default function Nav() {
       return (<>
              <header className={classes.header}>
                     <h1>ReactMeals</h1>
                     <CardButton />
              </header>
              <div className={classes['main-image']}>
                     <img src={mealsImage} alt='A table full of delicious food!' />
              </div>
       </>
       )
}
