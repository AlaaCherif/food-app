import React from 'react'
import Card from './../../UI/Card/Card';
import MenuItem from './MenuItem';


export default function MenuList(props) {

       return (
              <Card style={{ backgroundColor: 'white', color: 'black', minWidth: "80%" }} title="Choose what makes your tastebuds sting!">
                     {props.items.map((item) => {
                            return <MenuItem handleClick={props.handleClick} item={item} key={item.id} />
                     })}
              </Card>
       )
}
