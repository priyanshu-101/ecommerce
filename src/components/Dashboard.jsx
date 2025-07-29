import { useState, useEffect } from 'react'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import Shop from './Shop.jsx'
import Cart from './Cart.jsx'
import Checkout from './Checkout.jsx'
import Wishlist from './Wishlist.jsx'

// Dashboard Component
const Dashboard = ({ user, onSignOut }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [cartItems, setCartItems] = useState([])
  const [wishlistItems, setWishlistItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isWishlistOpen, setIsWishlistOpen] = useState(false)
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)

  // Load cart from localStorage on component mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('shopease_cart')
      if (savedCart && savedCart !== '[]') {
        const parsedCart = JSON.parse(savedCart)
        if (parsedCart.length > 0) {
          setCartItems(parsedCart)
        }
      }
    } catch (error) {
      console.error('Error loading cart from localStorage:', error)
      localStorage.removeItem('shopease_cart')
    }
  }, [])

  // Load wishlist from localStorage on component mount
  useEffect(() => {
    try {
      const savedWishlist = localStorage.getItem('shopease_wishlist')
      if (savedWishlist && savedWishlist !== '[]') {
        const parsedWishlist = JSON.parse(savedWishlist)
        if (parsedWishlist.length > 0) {
          setWishlistItems(parsedWishlist)
        }
      }
    } catch (error) {
      console.error('Error loading wishlist from localStorage:', error)
      localStorage.removeItem('shopease_wishlist')
    }
  }, [])

  // Save cart to localStorage whenever cartItems changes (but not on initial empty load)
  useEffect(() => {
    try {
      if (cartItems.length > 0) {
        localStorage.setItem('shopease_cart', JSON.stringify(cartItems))
      } else {
        // Only remove if we're intentionally clearing the cart
        const savedCart = localStorage.getItem('shopease_cart')
        if (savedCart && savedCart !== '[]') {
          localStorage.removeItem('shopease_cart')
        }
      }
    } catch (error) {
      console.error('Error saving cart to localStorage:', error)
    }
  }, [cartItems])

  // Save wishlist to localStorage whenever wishlistItems changes
  useEffect(() => {
    try {
      if (wishlistItems.length > 0) {
        localStorage.setItem('shopease_wishlist', JSON.stringify(wishlistItems))
      } else {
        const savedWishlist = localStorage.getItem('shopease_wishlist')
        if (savedWishlist && savedWishlist !== '[]') {
          localStorage.removeItem('shopease_wishlist')
        }
      }
    } catch (error) {
      console.error('Error saving wishlist to localStorage:', error)
    }
  }, [wishlistItems])

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
    localStorage.removeItem('shopease_cart')
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
      />
      <main className="flex-1 w-full">
        <Shop 
          searchQuery={searchQuery} 
          onAddToCart={addToCart}
          onAddToWishlist={addToWishlist}
          wishlistItems={wishlistItems}
        />
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
      />
      
      <Wishlist
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistItems={wishlistItems}
        onRemoveFromWishlist={removeFromWishlist}
        onMoveToCart={moveWishlistToCart}
      />
    </div>
  )
}

export default Dashboard
