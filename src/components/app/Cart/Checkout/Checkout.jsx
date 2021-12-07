import React, { useRef, useState } from 'react'
import classes from './checkout.module.css'

const isEmpty = (value) => value.trim().length === 0
const codeIsValid = (value) => value.trim().length === 4

export default function Checkout(props) {
       const [formValid, setFormValid] = useState({
              name: true,
              street: true,
              code: true,
              city: true
       })
       const nameRef = useRef()
       const stRef = useRef()
       const codeRef = useRef()
       const cityRef = useRef()

       const handleSubmit = (e) => {
              e.preventDefault();
              const nameInput = nameRef.current.value;
              const stInput = stRef.current.value;
              const codeInput = codeRef.current.value;
              const cityInput = cityRef.current.value;

              const nameValid = !isEmpty(nameInput)
              const stValid = !isEmpty(stInput)
              const codeValid = codeIsValid(codeInput)
              const cityValid = !isEmpty(cityInput)
              setFormValid({
                     name: true,
                     street: stValid,
                     code: codeValid,
                     city: cityValid
              })
              const formIsValid = nameValid && stValid && codeValid && cityValid
              if (!formIsValid)
                     return

              props.handleSubmit({
                     name: nameInput,
                     street: stInput,
                     code: codeInput,
                     city: cityInput
              })
       }

       return (
              <form className={classes.form} onSubmit={handleSubmit}>
                     <div className={`${classes.control} ${formValid.name ? '' : classes.invalid}`}>
                            <label htmlFor="">Name</label>
                            <input type="text" id='name' ref={nameRef} />
                            {!formValid.name && <p>Please enter a valid name!</p>}
                     </div>
                     <div className={`${classes.control} ${formValid.city ? '' : classes.invalid}`}>
                            <label htmlFor="street">Street</label>
                            <input type="text" id='street' ref={stRef} />
                            {!formValid.street && <p>Please enter a valid street!</p>}
                     </div>
                     <div className={`${classes.control} ${formValid.code ? '' : classes.invalid}`}>
                            <label htmlFor="postal">Postal Code</label>
                            <input type="text" id='postal' ref={codeRef} />
                            {!formValid.code && <p>Please enter a valid postal code!</p>}
                     </div>
                     <div className={`${classes.control} ${formValid.city ? '' : classes.invalid}`}>
                            <label htmlFor="city">City</label>
                            <input type="text" id='city' ref={cityRef} />
                            {!formValid.city && <p>Please enter a valid city name!</p>}
                     </div>
                     <div className={classes.actions}>
                            <button type="button" onClick={props.handleCancel} >Cancel</button>
                            <button className={classes.submit} onClick={handleSubmit}>Confirm</button>
                     </div>

              </form>
       )
}
