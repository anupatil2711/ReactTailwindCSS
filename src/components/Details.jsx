import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../constants';
import { useDispatch } from 'react-redux';
import { addToCart } from '../stores/cart';

const Details = () => {
    const { slug } = useParams();
    const [detail, setDetail] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    useEffect(() => {
        const findDetail = products.filter(product => product.slug === slug);
        if(findDetail.length > 0){
            setDetail(findDetail[0]);
        }else{
            window.location.href = '/';
        }
    }, [slug])
    const handleMinusQuantity = () => {
        setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
    }
    const handlePlusQuantity = () => {
        setQuantity(quantity + 1);
    }
    const handleAddToCart = () => {
        dispatch(addToCart({
            productId: detail.id,
            quantity: quantity
        }));
    }
  return (
    <div>
        <h2 className='text-3xl text-center font-semibold font-serif pt-5'>PRODUCT DETAILS</h2>
        <div className='grid grid-cols-2 mt-12'>
            <div>
                <img src={detail.image} alt="" className='w-full'/>
            </div>
            <div className='flex flex-col gap-4 mt-10 pr-28'>
                <h1 className='text-4xl font-semibold'>{detail.name}</h1>
                <p className='font-bold text-3xl'>
                    ${detail.price}
                </p>
                <div className='flex gap-5'>
                    <div className='flex gap-2 justify-center items-center'>
                        <button className='bg-gray-100 h-10 w-10 font-bold text-xl rounded-xl flex justify-center items-center' onClick={handleMinusQuantity}>-</button>
                        <span className='bg-gray-200 h-10 w-10 font-bold text-xl rounded-xl flex justify-center items-center'>{quantity}</span>
                        <button className='bg-gray-100 h-10 w-10 font-bold text-xl rounded-xl flex justify-center items-center' onClick={handlePlusQuantity}>+</button>
                    </div>
                    <button className="rounded-sm relative border-2 border-gray-800 bg-transparent py-3 px-7 font-medium uppercase text-blue-950 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-blue-950 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100 " onClick={handleAddToCart}>Add To Cart</button>
                </div>
                <p className='pr-5 text-justify'>
                    {detail.description}
                </p>
            </div>
        </div>
    </div>
  )
}

export default Details