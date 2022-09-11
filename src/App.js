import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar cartItems={0} />
      <ItemListContainer />
    </>
  );
}

export default App;
