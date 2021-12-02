import React from 'react'
import Card from './../../UI/Card/Card';
import MenuItem from './MenuItem';
const items = [
       {
              id: '1',
              title: 'Sushi',
              description: 'Finest fish and veggies',
              price: '21.99'
       },
       {
              id: '2',
              title: 'Schnitzel',
              description: 'A german specialty!',
              price: '16.50'
       },
       {
              id: '3',
              title: 'Barbecue Burger',
              description: 'American, raw ,juicy',
              price: '12.99'
       }

]

export default function MenuList(props) {

       return (
              <Card style={{ backgroundColor: 'white', color: 'black', minWidth: "80%" }} title="Choose what makes your tastebuds sting!">
                     {items.map((item) => {
                            return <MenuItem handleClick={props.handleClick} item={item} key={item.id} />
                     })}
              </Card>
       )
}
