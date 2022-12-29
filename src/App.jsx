import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import BagContextProvider from "./components/Bag/BagContext";

const ItemListContainer = lazy(() => import("./components/Catalog/ItemListContainer"));
const ItemDetailContainer = lazy(() => import("./components/Catalog/ItemDetailContainer"));
const Bag = lazy(() => import("./components/Bag/Bag"));

export default function App() {
  return (
    <BagContextProvider>
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route exact path="/" element={<ItemListContainer />} />
            <Route exact path="/:category" element={<ItemListContainer />} />
            <Route exact path="/:category/:id" element={<ItemDetailContainer />} />
            <Route path='/bag' element={<Bag />} />
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </BagContextProvider>
  )
}
