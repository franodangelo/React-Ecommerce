import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar cartItems={0} />
      <ItemListContainer greeting='Hey! I am working in my e-commerce right now' />
    </>
  );
}

export default App;
