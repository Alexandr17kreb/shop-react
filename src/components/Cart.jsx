export const Cart = ({cartItems,onRemove}) => {
    return (
    <div className='p-4 bg-white shadow rounded'>
        <h2 className='text-x-1 font-bolt mb-4'>Корзина</h2>
        {cartItems.length === 0 ? (
                <p>Корзина пустая</p>
            ) : (
                <ul>
                    {cartItems.map(item => (
                        <li 
                            key={item.id}
                            className='flex justify-between item-center mb-2'
                        >
                            <span>{item.title}</span>
                            <button 
                            onClick={() => onRemove(item.id)}
                            className='text-red-500'
                            >
                                Удалить
                                </button>
                        </li>
                    ))}
                </ul>
            )}
    </div>
    )
}