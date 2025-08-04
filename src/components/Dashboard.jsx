import { useState, useEffect } from 'react'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import Home from './Home.jsx'
import Shop from './Shop.jsx'
import Cart from './Cart.jsx'
import Checkout from './Checkout.jsx'
import Wishlist from './Wishlist.jsx'
import Orders from './Orders.jsx'
import Profile from './Profile.jsx'

// Dashboard Component
const Dashboard = ({ user, onSignOut }) => {
  const [currentView, setCurrentView] = useState('home')
  const [searchQuery, setSearchQuery] = useState('')
  const [cartItems, setCartItems] = useState([])
  const [wishlistItems, setWishlistItems] = useState([])
  const [orders, setOrders] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isWishlistOpen, setIsWishlistOpen] = useState(false)
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)
  const [isOrdersOpen, setIsOrdersOpen] = useState(false)
  const [isDataLoaded, setIsDataLoaded] = useState(false)

  // Load user-specific data when user changes
  useEffect(() => {
    if (!user?.uid) {
      // When no user, clear the UI state but don't touch localStorage
      setCartItems([])
      setWishlistItems([])
      setOrders([])
      setIsDataLoaded(true)
      return
    }

    const userId = user.uid
    const userCartKey = `shopease_cart_${userId}`
    const userWishlistKey = `shopease_wishlist_${userId}`
    const userOrdersKey = `shopease_orders_${userId}`

    // Load user-specific cart
    const savedCart = localStorage.getItem(userCartKey)
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart)
        setCartItems(parsedCart)
      } catch (error) {
        console.error('Error parsing cart:', error)
        setCartItems([])
      }
    } else {
      setCartItems([])
    }

    // Load user-specific wishlist
    const savedWishlist = localStorage.getItem(userWishlistKey)
    if (savedWishlist) {
      try {
        const parsedWishlist = JSON.parse(savedWishlist)
        setWishlistItems(parsedWishlist)
      } catch (error) {
        console.error('Error parsing wishlist:', error)
        setWishlistItems([])
      }
    } else {
      setWishlistItems([])
    }

    // Load user-specific orders
    const savedOrders = localStorage.getItem(userOrdersKey)
    if (savedOrders) {
      try {
        const parsedOrders = JSON.parse(savedOrders)
        setOrders(parsedOrders)
      } catch (error) {
        console.error('Error parsing orders:', error)
        setOrders([])
      }
    } else {
      setOrders([])
    }

    setIsDataLoaded(true)
  }, [user?.uid])

  // Save cart to localStorage with user-specific key
  useEffect(() => {
    if (user?.uid && isDataLoaded) {
      const userCartKey = `shopease_cart_${user.uid}`
      localStorage.setItem(userCartKey, JSON.stringify(cartItems))
    }
  }, [cartItems, user?.uid, isDataLoaded])

  // Save wishlist to localStorage with user-specific key  
  useEffect(() => {
    if (user?.uid && isDataLoaded) {
      const userWishlistKey = `shopease_wishlist_${user.uid}`
      localStorage.setItem(userWishlistKey, JSON.stringify(wishlistItems))
    }
  }, [wishlistItems, user?.uid, isDataLoaded])

  // Save orders to localStorage with user-specific key
  useEffect(() => {
    if (user?.uid && isDataLoaded) {
      const userOrdersKey = `shopease_orders_${user.uid}`
      localStorage.setItem(userOrdersKey, JSON.stringify(orders))
    }
  }, [orders, user?.uid, isDataLoaded])

  // Add item to cart
  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id)
      
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      } else {
        return [...prevItems, { ...product, quantity: 1 }]
      }
    })
  }

  // Update item quantity
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId)
      return
    }
    
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId 
          ? { ...item, quantity: newQuantity }
          : item
      )
    )
  }

  // Remove item from cart
  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId))
  }

  // Clear cart (after successful payment)
  const clearCart = () => {
    setCartItems([])
  }

  // Wishlist functions
  const addToWishlist = (product) => {
    const exists = wishlistItems.find(item => item.id === product.id)
    if (!exists) {
      setWishlistItems(prev => [...prev, product])
    }
  }

  const removeFromWishlist = (productId) => {
    setWishlistItems(prev => prev.filter(item => item.id !== productId))
  }

  const moveWishlistToCart = (product) => {
    // Remove from wishlist
    removeFromWishlist(product.id)
    // Add to cart
    addToCart(product)
  }

  // Get total cart items count
  const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0)
  
  // Calculate grand total
  const grandTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)

  // Handle proceed to checkout
  const handleProceedToCheckout = () => {
    setIsCartOpen(false)
    setIsCheckoutOpen(true)
  }

  // Handle order creation
  const handleOrderCreated = (orderData) => {
    setOrders(prevOrders => [orderData, ...prevOrders])
  }

  // Navigation handler
  const handleNavigation = (view) => {
    setCurrentView(view)
    // Close any open modals when navigating
    setIsCartOpen(false)
    setIsWishlistOpen(false)
    setIsCheckoutOpen(false)
    setIsOrdersOpen(false)
  }

  // Render current view content
  const renderCurrentView = () => {
    switch (currentView) {
      case 'home':
        return (
          <Home 
            onAddToCart={addToCart}
            onAddToWishlist={addToWishlist}
            wishlistItems={wishlistItems}
            onNavigate={handleNavigation}
          />
        )
      case 'products':
        return (
          <Shop 
            searchQuery={searchQuery} 
            onAddToCart={addToCart}
            onAddToWishlist={addToWishlist}
            wishlistItems={wishlistItems}
          />
        )
      case 'categories':
        return (
          <Categories 
            onAddToCart={addToCart}
            onAddToWishlist={addToWishlist}
            wishlistItems={wishlistItems}
          />
        )
      case 'about':
        return (
          <div className="min-h-screen bg-gray-50 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">About ShopEase</h1>
                <p className="text-xl text-gray-600 mb-8">
                  We are dedicated to providing you with the best shopping experience online.
                </p>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Founded with a vision to make online shopping simple, secure, and enjoyable, 
                  ShopEase brings you a curated selection of high-quality products at competitive prices. 
                  Our commitment to customer satisfaction and fast delivery makes us your trusted 
                  shopping partner.
                </p>
              </div>
            </div>
          </div>
        )
      case 'contact':
        return (
          <div className="min-h-screen bg-gray-50 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact Us</h1>
                <p className="text-xl text-gray-600">
                  We'd love to hear from you. Get in touch with us!
                </p>
              </div>
              <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm p-8">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        )
      case 'profile':
        return (
          <Profile 
            user={user}
            onSignOut={onSignOut}
          />
        )
      default:
        return (
          <Home 
            onAddToCart={addToCart}
            onAddToWishlist={addToWishlist}
            wishlistItems={wishlistItems}
          />
        )
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar 
        user={user} 
        onSignOut={onSignOut} 
        onSearch={setSearchQuery}
        cartItemsCount={cartItemsCount}
        onCartClick={() => setIsCartOpen(true)}
        wishlistItemsCount={wishlistItems.length}
        onWishlistClick={() => setIsWishlistOpen(true)}
        onOrdersClick={() => setIsOrdersOpen(true)}
        currentView={currentView}
        onNavigate={handleNavigation}
      />
      <main className="flex-1 w-full">
        {renderCurrentView()}
      </main>
      <Footer />
      
      <Cart 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
        onProceedToCheckout={handleProceedToCheckout}
      />
      
      <Checkout
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartItems={cartItems}
        grandTotal={grandTotal}
        onPaymentSuccess={clearCart}
        onOrderCreated={handleOrderCreated}
      />
      
      <Wishlist
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistItems={wishlistItems}
        onRemoveFromWishlist={removeFromWishlist}
        onMoveToCart={moveWishlistToCart}
      />

      <Orders
        isOpen={isOrdersOpen}
        onClose={() => setIsOrdersOpen(false)}
        orders={orders}
      />
    </div>
  )
}

export default Dashboard
