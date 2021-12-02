import MenuList from './components/app/Menu/MenuList';
import Nav from './components/app/Navigation/Nav';
import Summary from './components/app/Summray/Summary';
function App() {
  const addToCart = () => {
    e.preventDefualt()
    console.log('testing function passing');
  }
  return (
    <>
      <Nav />
      <main className="flex">
        <Summary />
        <MenuList handleClick={addToCart} />
      </main>
    </>
  );
}

export default App;
