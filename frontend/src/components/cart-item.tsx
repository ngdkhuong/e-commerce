import { Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import { server } from '../redux/store';
import { CartItem } from '../types/types';

type CartItemProps = {
    cartItem: CartItem;
    // chinh tang giam so luong san pham
    incrementHandler: (cartItem: CartItem) => void;
    decrementHandler: (cartItem: CartItem) => void;
    removeHandler: (id: string) => void;
};

const CartItemComponent = ({ cartItem, incrementHandler, decrementHandler, removeHandler }: CartItemProps) => {
    const { image, productId, name, price, quantity } = cartItem;

    return (
        <div className="cart-item">
            <img src={`${server}/${image}`} alt={name} />

            <article>
                <Link to={`/product/${productId}`}>{name}</Link>
                <span>VND {price}</span>
            </article>

            <div>
                <button onClick={() => decrementHandler(cartItem)}>-</button>
                <p>{quantity}</p>
                <button onClick={() => incrementHandler(cartItem)}>+</button>
            </div>

            <button onClick={() => removeHandler(productId)}>
                <FaTrash />
            </button>
        </div>
    );
};

export default CartItemComponent;
