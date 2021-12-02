import React from 'react'
import classes from "./amount.module.css"
import Input from './../../../UI/Form/Input';

export default function AmountForm(props) {
       return (
              <form className={classes.form}>
                     <Input
                            label='Amount'
                            input={{
                                   id: 'amount_' + props.id,
                                   type: 'number',
                                   min: '1',
                                   max: '5',
                                   step: '1',
                                   defaultValue: '1'
                            }}
                     />
                     <button onClick={props.handleClick}>+ Add</button>
              </form>
       )
}
