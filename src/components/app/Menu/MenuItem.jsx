import React from 'react'
import classes from "./item.module.css"
import AmountForm from './Form/AmountForm';

export default function MenuItem(props) {
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
                            <AmountForm handleClick={props.handleClick} />
                     </div>
              </div>
       )
}
