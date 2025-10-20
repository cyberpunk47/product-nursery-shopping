import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'

// Define the CartItem interface
export interface CartItem {
    id: string
    name: string
    price: number
    quantity: number
    image: string
}

// Define the context type
interface CartContextType {
    cartItems: CartItem[]
    addToCart: (item: Omit<CartItem, 'quantity'>) => void
    removeFromCart: (id: string) => void
    incrementQuantity: (id: string) => void
    decrementQuantity: (id: string) => void
    getCartCount: () => number
    getCartTotal: () => number
    isInCart: (id: string) => boolean
}

// Create the context
const CartContext = createContext<CartContextType | undefined>(undefined)

// Custom hook to use the cart context
export const useCart = () => {
    const context = useContext(CartContext)
    if (!context) {
        throw new Error('useCart must be used within a CartProvider')
    }
    return context
}

// Provider component
export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([])

    // Add item to cart
    const addToCart = (item: Omit<CartItem, 'quantity'>) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(cartItem => cartItem.id === item.id)

            if (existingItem) {
                // If item already exists, increment quantity
                return prevItems.map(cartItem =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                )
            } else {
                // Add new item with quantity 1
                return [...prevItems, { ...item, quantity: 1 }]
            }
        })
    }

    // Remove item from cart
    const removeFromCart = (id: string) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id))
    }

    // Increment quantity
    const incrementQuantity = (id: string) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        )
    }

    // Decrement quantity
    const decrementQuantity = (id: string) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        )
    }

    // Get total number of items in cart
    const getCartCount = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0)
    }

    // Get total price
    const getCartTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
    }

    // Check if item is in cart
    const isInCart = (id: string) => {
        return cartItems.some(item => item.id === id)
    }

    const value = {
        cartItems,
        addToCart,
        removeFromCart,
        incrementQuantity,
        decrementQuantity,
        getCartCount,
        getCartTotal,
        isInCart
    }

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
