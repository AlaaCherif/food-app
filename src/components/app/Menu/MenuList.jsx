import React, { useState, useEffect } from 'react'
import LoadingWheel from '../../UI/LoadingWheel/LoadingWheel';
import Card from './../../UI/Card/Card';
import MenuItem from './MenuItem'


export default function MenuList(props) {
       const [loading, setLoading] = useState(true)
       const [meals, setMeals] = useState([])
       const [error, setError] = useState(null)
       useEffect(() => {
              const loadedData = [];
              fetch('https://food-udemy-default-rtdb.firebaseio.com/meals.json')
                     .then((Response) => {
                            if (!Response.ok) {
                                   throw new Error('Failed loading data!')
                            }
                            Response.json()
                                   .then(data => {
                                          for (const key in data) {
                                                 loadedData.push({
                                                        id: key,
                                                        title: data[key].title,
                                                        description: data[key].description,
                                                        price: data[key].price
                                                 })
                                          }
                                          setMeals(loadedData)
                                          setLoading(false)
                                   })
                     })
                     .catch((error => {
                            setError(error.message)
                            setLoading(false)
                            console.log(error.message)
                     }))
              return () => {

              }
       }, [])
       if (loading)
              return <LoadingWheel />
       else if (error) {
              return (<Card style={{ backgroundColor: 'white', color: 'black', minWidth: "80%" }} title="Error">{error}</ Card>)
       }
       else return (
              <Card style={{ backgroundColor: 'white', color: 'black', minWidth: "80%" }} title="Choose what makes your tastebuds sting!">
                     {meals.map((item) => {
                            return <MenuItem handleClick={props.handleClick} item={item} key={item.id} />
                     })}
              </Card>
       )
}
