import "./App.css";
import Dashboard from "./Dashboard/Dashboard.jsx";
import AllBills from "./pages/AllBills";
// import Bill from "./pages/Bill";
import BillSystem from "./pages/BillSystem";
import { Route, Routes } from "react-router-dom";
import Navbar from "./pages/Navbar";
import AddProduct from "./pages/AddProduct";
import AllProducts from "./pages/AllProducts";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/bill-system" element={<BillSystem />} />
        <Route path="/bill" element={<AllBills />} />
        <Route path="/all-products" element={<AllProducts />} />
      </Routes>
    </>
  );
}

export default App;
