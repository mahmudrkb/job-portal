import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../common/Footer';
import Navbar from '../common/Navbar';

const MainLayout = () => {
    return (
        <div className='container mx-auto my-5'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default MainLayout;