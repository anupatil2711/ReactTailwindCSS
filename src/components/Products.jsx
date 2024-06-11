import { products } from '../constants'
import ProductCart from '../products/ProductCart'

const Products = () => {
  return (
    <div>
        <div className='text-3xl my-5 md:ml-[610px]'>Products</div>
        <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 m-6'>
            {products.map((product, key) =>
            <ProductCart key={key} data={product} />
            )}
        </div>
    </div>
  )
}

export default Products