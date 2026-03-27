import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import axios from 'axios'
import { ShoppingBagIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'
import ProductList from './components/ProductList.jsx'
import Cart from './components/Cart.jsx'

function App() {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      const res = await axios.get('/api/products')
      setProducts(res.data)
    } catch (err) {
      console.error('Failed to fetch products')
    }
  }

  const addToCart = (product) => {
    setCart([...cart, product])
  }

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <nav className="bg-white shadow-lg border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <ShoppingBagIcon className="h-8 w-8 text-indigo-600" />
                <Link to="/" className="ml-2 text-2xl font-bold text-gray-900">TINAPA SHOP</Link>
              </div>
              <Link to="/cart" className="flex items-center bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
                <ShoppingCartIcon className="h-5 w-5 mr-2" />
                Cart ({cart.length})
              </Link>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<ProductList products={products} addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cart={cart} />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

