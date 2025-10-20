import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './LandingPage'
import ProductListingPage from './ProductListingPage'
import ShoppingCartPage from './ShoppingCartPage'
import { CartProvider } from './CartContext'

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/products' element={<ProductListingPage />} />
          <Route path='/cart' element={<ShoppingCartPage />} />
        </Routes>
      </Router>
    </CartProvider>
  )
}

export default App
