 import { useSelector, useDispatch } from 'react-redux' 
import CartItem from './CartItem';
import { toggleStatusTab } from '../stores/cart';
import { X } from 'lucide-react';

const CartTab = () => {
    const carts = useSelector(store => store.cart.items);
    const statusTab = useSelector(store => store.cart.statusTab);
    const dispatch = useDispatch();
    const handleCloseTabCart = () => {
        dispatch(toggleStatusTab());
    }
  return (
    <div className={`fixed top-0 right-0 bg-white shadow-2xl w-96 h-full grid grid-rows-[60px_1fr_60px]
    transform transition-transform duration-500 
    ${statusTab === false ? "translate-x-full" : ""}
    `}>
        <div className='flex items-center justify-between p-3'>
        <h2 className='p-5 text-black underline text-2xl font-serif'>Shopping Cart</h2>
        <button onClick={handleCloseTabCart}><X /></button>
        </div>
        <div className='p-5 flex flex-wrap h-12 gap-5'>
            {carts.map((item, key) => 
                <CartItem key={key} data={item}/>
            )}
        </div>
        <div className='justify-between items-center ml-8'>
        <button className="w-80 h-12 relative rounded-sm border-2 border-gray-800 bg-transparent py-2.5 px-5 font-medium uppercase text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-y-0 before:bg-gray-800 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-y-100">CHECKOUT</button>
        </div>
    </div>
  )
}

export default CartTab