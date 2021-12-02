import React from 'react'
import classes from './modal.module.css'
import Card from './../Card/Card';

export default function Modal() {
       return (
              <div className={classes.modal}>
                     <div className={classes['modal-content']}>
                            <Card title='Hello' style={{ margin: 'auto' }}>
                                   Hello
                            </Card>
                     </div>
              </div>
       )
}
