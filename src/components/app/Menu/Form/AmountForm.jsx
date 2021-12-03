import React, { useRef, useState } from 'react'
import classes from "./amount.module.css"
import Input from './../../../UI/Form/Input';

export default function AmountForm(props) {
       const [amountIsValid, setAmountIsValid] = useState(true)
       const mealRef = useRef()
       const submitHandler = (e) => {
              e.preventDefault()
              const enteredAmount = mealRef.current.value;
              const enteredAmountNumber = +enteredAmount
              if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5)
                     return setAmountIsValid(false)
              props.addToCart(enteredAmountNumber)
       }
       return (
              <form onSubmit={submitHandler} className={classes.form}>
                     <Input
                            label='Amount'
                            input={{
                                   id: 'amount_' + props.id,
                                   type: 'number',
                                   min: '1',
                                   max: '5',
                                   step: '1',
                                   defaultValue: '1',
                                   ref: mealRef
                            }}
                     />
                     <button type="submit">+ Add</button>
                     {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
              </form>
       )
}
