import Navbar from './Navbar'
import { useCart } from './CartContext'
import { useNavigate } from 'react-router-dom'

const ShoppingCartPage = () => {
    const { cartItems, incrementQuantity, decrementQuantity, removeFromCart, getCartTotal } = useCart()
    const navigate = useNavigate()

    // Handle continue shopping
    const handleContinueShopping = () => {
        navigate('/products')
    }

    // Handle checkout
    const handleCheckout = () => {
        alert(`Proceeding to checkout with total: ₹${getCartTotal()}`)
        // In real app, navigate to checkout page
    }

    return (
        <div className='min-h-screen bg-gray-100'>
            <Navbar />

            <div className='container mx-auto px-4 py-8'>
                {/* Cart Header */}
                <div className='text-center mb-8'>
                    <h1 className='text-4xl font-bold text-gray-800 mb-2'>
                        Total Cart Amount: ₹{getCartTotal()}
                    </h1>
                </div>

                {/* Cart Items */}
                {cartItems.length === 0 ? (
                    <div className='text-center py-12'>
                        <p className='text-2xl text-gray-600 mb-6'>Your cart is empty</p>
                        <button
                            onClick={handleContinueShopping}
                            className='bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-colors duration-200'
                        >
                            Continue Shopping
                        </button>
                    </div>
                ) : (
                    <>
                        <div className='space-y-6 mb-8'>
                            {cartItems.map(item => (
                                <div key={item.id} className='bg-white rounded-lg shadow-md p-6'>
                                    <div className='flex items-center gap-6'>
                                        {/* Product Image */}
                                        <div className='w-48 h-48 flex-shrink-0 bg-gray-50 rounded-lg overflow-hidden'>
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className='w-full h-full object-cover'
                                            />
                                        </div>

                                        {/* Product Details */}
                                        <div className='flex-grow'>
                                            <h2 className='text-3xl font-bold text-gray-800 mb-2'>
                                                {item.name}
                                            </h2>
                                            <p className='text-2xl text-gray-700 mb-4'>
                                                ₹{item.price}
                                            </p>

                                            {/* Quantity Controls */}
                                            <div className='flex items-center gap-3 mb-4'>
                                                <button
                                                    onClick={() => decrementQuantity(item.id)}
                                                    className='w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded flex items-center justify-center text-xl font-bold transition-colors duration-200'
                                                    disabled={item.quantity <= 1}
                                                >
                                                    -
                                                </button>
                                                <span className='text-xl font-semibold w-12 text-center'>
                                                    {item.quantity}
                                                </span>
                                                <button
                                                    onClick={() => incrementQuantity(item.id)}
                                                    className='w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded flex items-center justify-center text-xl font-bold transition-colors duration-200'
                                                >
                                                    +
                                                </button>
                                            </div>

                                            {/* Item Total */}
                                            <p className='text-xl font-semibold text-gray-800 mb-4'>
                                                Total: ₹{item.price * item.quantity}
                                            </p>

                                            {/* Delete Button */}
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className='bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded transition-colors duration-200'
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Action Buttons */}
                        <div className='flex flex-col items-center gap-4'>
                            <button
                                onClick={handleContinueShopping}
                                className='bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-12 rounded-lg text-xl transition-colors duration-200 min-w-[300px]'
                            >
                                Continue Shopping
                            </button>

                            <button
                                onClick={handleCheckout}
                                className='bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-12 rounded-lg text-xl transition-colors duration-200 min-w-[300px]'
                            >
                                Checkout
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default ShoppingCartPage