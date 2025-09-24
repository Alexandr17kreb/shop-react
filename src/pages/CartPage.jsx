import { Cart } from '../components/Cart'

export const CartPage = ({cartItem, onRemove}) => {
    return (
        <div className='container mx-auto p-4'>
            <Cart cartItems={cartItem} onRemove={onRemove}/>
        </div>
    )
}
