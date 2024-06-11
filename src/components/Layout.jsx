// src/components/Layout.js
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Additional from './Additional';
import Products from "./Products"
import CartTab from './CartTab';
import { useSelector } from 'react-redux';

const Layout = () => {
  const statusTabCart = useSelector(store => store.cart.statusTab);
  return (
    <>
    <main className={`transform transition-transform duration-500
        ${statusTabCart === false ? "" : "-translate-x-56" }`}>
      <Navbar />
      <Outlet />
      <Additional />
    </main>
    <Products />
    <CartTab />
    </>
  );
};

export default Layout;
