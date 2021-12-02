import React from 'react'
import classes from './input.module.css'

export default function Input(props) {
       return (
              <div className={classes.input}>
                     <label htmlFor={props.input.id}>{props.label}</label>
                     <input {...props.input} />
              </div >
       )
}
