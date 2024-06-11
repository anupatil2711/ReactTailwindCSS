import strip from "../assets/strip.jpg";
import logo from "../assets/logo.png";
import helpline from "../assets/helpline.png";
import cart from "../assets/cart.png";
import user from "../assets/user.png";
import { navItems } from "../constants";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux' 
import { toggleStatusTab } from '../stores/cart'


const Navbar = () => {
    const [totalQuantity, setTotalQuantity] = useState(0);
    const carts = useSelector(store => store.cart.items);
    const dispatch = useDispatch();
    useEffect(() => {
        let total = 0;
        carts.forEach(item => total += item.quantity);
        setTotalQuantity(total);
    }, [carts])
    const handleOpenTabCart = () => {
        dispatch(toggleStatusTab());
    }

    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };
    return (
        <div className="border-b border-neutral-100 ">
            <img className="h-5 w-full hidden sm:block md:hidden lg:block" src={strip}></img>
            <div className=" md:h-20 bg-blue-950 grid md:grid-cols-3 grid-row-2 justify-between items-center">
                <div className="p-5 flex justify-between">
                    <div className=" md:static lg:hidden md:flex flex-col justify-start items-start">
                        <button onClick={toggleNavbar}>
                            {mobileDrawerOpen ? <X /> : <Menu />}
                        </button>

                        {mobileDrawerOpen && (
                            <div className="top-0 left-0 fixed z-20 bg-white w-[320px] flex flex-col justify-start items-start lg:hidden py-5">
                                <div className="flex h-12 w-80 bg-black -mt-6 items-center">
                                    <h5 className="text-white pl-8 text-md font-semibold">Menu</h5>
                                    <button className="ml-[210px] text-white mr-3 " onClick={toggleNavbar}>
                                        {mobileDrawerOpen ? <X /> : <Menu />}
                                    </button>
                                </div>
                                <ul>
                                    {navItems.map((item, index) => (
                                        <li key={index} className="py-4 pl-8  border-b border-neutral-300 ">
                                            <a href={item.href}>{item.label}</a>
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex space-x-3 mt-5 ml-5">
                                    <button className="text-xs font-semibold text-blue-950 mt-3 rounded-3xl w-32 h-8 bg-lime-300">PERSONALISED</button>
                                    <button className="text-xs font-semibold text-white mt-3 rounded-3xl  w-32 h-8 bg-pink-700">FOR TRADE</button>
                                </div>
                            </div>
                        )}
                    </div>
                    <input type="text" name="q" className="w-full h-12 shadow p-4 rounded-full grid sm:w-full" placeholder="I'm looking for..."></input>
                </div>
                <div className="ml-28">
                        <img className="h-16 w-30" src={logo} alt="logo" ></img>
                    </div>
                <div className="pb-2 flex space-x-3 items-center ml-10">
                    <img className="h-8 w-8" src={helpline} alt="helpline" ></img>
                    <h4 className="text-white">
                        <span className="text-gray-300">Need help</span>
                        <br />023 9265 2865
                    </h4>

                    <img className="h-8 w-8 " src={user} alt="user" ></img>
                    <h4 className="text-white">
                        <span className="text-gray-300">Login</span>
                        <br />Account
                    </h4>

                    <img className="h-8 w-8 " src={cart} alt="cart" onClick={handleOpenTabCart}></img>
                    <h4 className="text-white">
                        <span className="text-gray-300">Cart</span>
                        <br />{totalQuantity}
                    </h4>
                </div>
            </div>
            <div className="h-15 flex justify-start">
                <ul className="hidden lg:flex ml-4 space-x-8 font-semibold ">
                    {navItems.map((item, index) => (
                        <li key={index} className="py-4">
                            <a href={item.href} className="hover:underline">{item.label}</a>
                        </li>
                    ))}
                </ul>
                <div className="space-x-3 ml-16 hidden md:hidden lg:block">
                    <button className="text-sm font-semibold text-blue-950 mt-3 rounded-3xl w-40 h-8 bg-lime-300">PERSONALISED</button>
                    <button className="text-sm font-semibold text-white mt-3 rounded-3xl  w-40 h-8 bg-pink-700">FOR TRADE</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar