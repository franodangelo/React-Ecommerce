import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar cartItems={0} />
      <Routes>
        <Route exact path="/" element={<ItemListContainer />} />
        <Route exact path='/category/:id' element={<ItemListContainer />} />
        <Route exact path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
