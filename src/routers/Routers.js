import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Shop from '../pages/Shop';
import Cart from '../pages/Cart';
import ProductDetails from '../pages/ProductDetails';
import Checkout from '../pages/Checkout';
import Login from '../pages/Login';
import Registration from '../pages/Registration';

const Routers = () => {
    return <Routes>
        <Route path='/' element={<Navigate to='home'></Navigate>}></Route>
        <Route path='home' element={<Home></Home>}></Route>
        <Route path='shop' element={<Shop></Shop>}></Route>
        <Route path='shop/:id' element={<ProductDetails></ProductDetails>}></Route>
        <Route path='cart' element={<Cart></Cart>}></Route>
        <Route path='checkout' element={<Checkout></Checkout>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='signup' element={<Registration></Registration>}></Route>
    </Routes>
};

export default Routers;