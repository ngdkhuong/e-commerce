import { FaPlus } from 'react-icons/fa';
import { server } from '../redux/store';
import { CartItem } from '../types/types';

type ProductsProps = {
    productId: string;
    image: string;
    name: string;
    price: number;
    stock: number;
    handler: (cartItem: CartItem) => string | undefined;
};

const ProductCard = ({ productId, price, name, image, stock, handler }: ProductsProps) => {
    return (
        <div className="product-card">
            <img src={`${server}/${image}`} alt={name} />
            <p>{name}</p>
            <span>VND {price}</span>

            <div>
                <button onClick={() => handler({ productId, price, name, image, stock, quantity: 1 })}>
                    <FaPlus />
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
