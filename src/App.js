import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Bag from "./components/Bag/Bag";
import Footer from "./components/Footer";
import BagContextProvider from "./components/Bag/BagContext";

export default function App() {
  return (
    <BagContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route exact path="/:category" element={<ItemListContainer />} />
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />
          <Route path='/bag' element={<Bag />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </BagContextProvider>
  );
}
