import React from 'react'
import classes from "./card.module.css"

export default function Card(props) {
       return (
              <div style={props.style} className={`${classes.card} ${classes.black}`}>
                     <h3 style={{ textAlign: "center" }}>{props.title}</h3>
                     {props.children}
              </div>
       )
}
