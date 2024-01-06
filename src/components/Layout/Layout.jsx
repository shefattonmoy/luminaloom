import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Routers from '../../routers/Routers';
import AdminNavbar from '../../admin/AdminNavbar';
import { useLocation } from 'react-router-dom';

const Layout = () => {
    const location = useLocation();

    return <>
    {
        location.pathname.startsWith('/dashboard') ? <AdminNavbar></AdminNavbar> : 
        <Header></Header>
    }
        <div>
            <Routers></Routers>
        </div>
        <Footer></Footer>
    </>
};

export default Layout;