import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import ProductDetails from "../pages/ProductDetails";
import Checkout from "../pages/Checkout";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import PrivateRoute from "./PrivateRoute";
import AddProducts from "../admin/AddProducts";
import AllProducts from "../admin/AllProducts";
import Dashboard from "../admin/Dashboard";
import Users from "../admin/Users";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="home"></Navigate>}></Route>
      <Route path="home" element={<Home></Home>}></Route>
      <Route path="shop" element={<Shop></Shop>}></Route>
      <Route path="shop/:id" element={<ProductDetails></ProductDetails>}></Route>
      <Route path="cart" element={<Cart></Cart>}></Route>
      <Route path="/*" element={<PrivateRoute></PrivateRoute>}>
        <Route path="checkout" element={<Checkout></Checkout>}></Route>
        <Route path="dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="dashboard/all-products" element={<AllProducts></AllProducts>}></Route>
        <Route path="dashboard/add-products" element={<AddProducts></AddProducts>}></Route>
        <Route path="dashboard/users" element={<Users></Users>}></Route>
      </Route>
      <Route path="login" element={<Login></Login>}></Route>
      <Route path="signup" element={<Registration></Registration>}></Route>
    </Routes>
  );
};

export default Routers;
