import MenuList from './components/app/Menu/MenuList';
import Nav from './components/app/Navigation/Nav';
import Summary from './components/app/Summray/Summary';
import { useState } from 'react';
import Cart from './components/app/Cart/Cart';
import CartProvider from './store/cart-context'
function App() {
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
  const getFromForm = (amount, id) => {
    console.log(id, amount)
  }
  const [showCart, setShowCart] = useState(false)
  const showCartHandler = () => {
    setShowCart(true)
  }
  const hideCartHandler = () => {
    setShowCart(false)
  }
  return (
    <CartProvider>
      {showCart && <Cart onHideCart={hideCartHandler} />}
      <Nav onShowCart={showCartHandler} />
      <main className="flex">
        <Summary />
        <MenuList items={items} handleClick={getFromForm} />
      </main>
    </CartProvider>
  );
}

export default App;
