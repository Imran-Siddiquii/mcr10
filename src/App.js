import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Department from "./Department";
import Products from "./Products";
import Sidebar from "./components/Sidebar";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getData } from "./Reducer/InventorySlice";
import ProductDetails from "./ProductDetails";
import AddProducts from "./AddProducts";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, []);
  return (
    <div>
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/products" exact element={<Products />} />
          <Route path="/department" exact element={<Department />} />
          <Route path="/product/:id" exact element={<ProductDetails />} />
          <Route path ='/add-product' exact element ={<AddProducts/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
