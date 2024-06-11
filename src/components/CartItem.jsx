import {useState, useEffect} from 'react' 
import { products } from '../constants';
import { useDispatch } from 'react-redux';
import { changeQuantity } from '../stores/cart';

const CartItem = (props) => {
    const {productId, quantity} = props.data;
    const [detail, setDetail] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        const findDetail = products.filter(product => product.id === productId)[0];
        setDetail(findDetail);
    }, [productId])
    const handleMinusQuantity = () => {
        dispatch(changeQuantity({
            productId: productId,
            quantity: quantity - 1
        }));
    }
    const handlePlusQuantity = () => {
        dispatch(changeQuantity({
            productId: productId,
            quantity: quantity + 1
        }));
    }
  return (
    <div className='flex justify-between items-center bg-gray-100 text-white p-2 shadow-md gap-3 rounded-md'>
        <img src={detail.image} alt="" className='w-12'/>
        <h3 className='text-black'>{detail.name}</h3>
        <p className='text-black'>${detail.price * quantity}</p>
        <div className='w-20 flex justify-between gap-2'>
            <button className='bg-gray-200 rounded-full w-6 h-6 text-black' onClick={handleMinusQuantity}>-</button>
            <span className='text-black'>{quantity}</span>
            <button className='bg-gray-200 rounded-full w-6 h-6 text-black' onClick={handlePlusQuantity}>+</button>
        </div>
    </div>
  )
}

export default CartItem