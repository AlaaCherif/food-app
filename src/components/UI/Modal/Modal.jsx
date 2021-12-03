import React from 'react'
import classes from './modal.module.css'
import { createPortal } from 'react-dom';

export const Backdrop = (props) => {
       return <div onClick={props.onHideCart} className={classes.backdrop} />
};
export function ModalOverlay(props) {
       return (
              <div className={classes.modal}>
                     <div className={classes['modal-content']}>
                            {props.children}
                     </div>
              </div>
       )
}
const portalElement = document.getElementById("overlays")
export default function Modal(props) {
       return (
              <>
                     {createPortal(<Backdrop onHideCart={props.onHideCart} />, portalElement)}
                     {createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
              </>
       )
}
