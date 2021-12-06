import MenuList from './components/app/Menu/MenuList';
import Nav from './components/app/Navigation/Nav';
import Summary from './components/app/Summray/Summary';
import { useState } from 'react';
import Cart from './components/app/Cart/Cart';
import CartProvider from './store/cart-context'
function App() {

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
        <MenuList handleClick={getFromForm} />
      </main>
    </CartProvider>
  );
}

export default App;
