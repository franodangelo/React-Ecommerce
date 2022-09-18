import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContextProvider from "./components/Context";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Footer from "./components/Footer";

export default function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Navbar cartItems={0} />
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route exact path="/category/:id" element={<ItemListContainer />} />
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ContextProvider>
  );
}
