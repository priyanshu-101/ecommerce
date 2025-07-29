import React from 'react'

const Cart = ({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onProceedToCheckout }) => {
  if (!isOpen) return null

  const grandTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0)

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl transform transition-transform duration-300 ease-in-out">
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">
            Shopping Cart ({totalItems} item{totalItems !== 1 ? 's' : ''})
          </h2>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-[calc(100vh-200px)]">
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h8m-8 0a2 2 0 100 4 2 2 0 000-4zm8 0a2 2 0 100 4 2 2 0 000-4z" />
              </svg>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Your cart is empty</h3>
              <p className="text-gray-500">Add some products to get started!</p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="flex items-center space-x-4 bg-gray-50 rounded-lg p-3">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-md"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/64x64/f3f4f6/9ca3af?text=No+Image'
                  }}
                />
                
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-medium text-gray-900 truncate">{item.name}</h3>
                  <p className="text-sm text-gray-500">₹{item.price} each</p>
                  
                  <div className="flex items-center space-x-2 mt-2">
                    <button
                      onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                      className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                      </svg>
                    </button>
                    
                    <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                    
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                <div className="text-right">
                  <p className="text-sm font-semibold text-gray-900">₹{item.price * item.quantity}</p>
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="text-red-500 hover:text-red-700 text-sm mt-1 transition-colors"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="border-t border-gray-200 p-4 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-base font-medium text-gray-900">Subtotal:</span>
              <span className="text-base font-medium text-gray-900">₹{grandTotal}</span>
            </div>
            
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-600">Delivery Charge:</span>
              <span className="text-gray-600">
                {grandTotal >= 500 ? (
                  <span className="text-green-600 font-medium">FREE</span>
                ) : (
                  '₹50'
                )}
              </span>
            </div>
            
            {grandTotal < 500 && (
              <div className="text-xs text-blue-600 bg-blue-50 p-2 rounded">
                Add ₹{500 - grandTotal} more for FREE delivery!
              </div>
            )}
            
            <div className="flex justify-between items-center pt-2 border-t border-gray-200">
              <span className="text-lg font-bold text-gray-900">Total:</span>
              <span className="text-lg font-bold text-gray-900">
                ₹{grandTotal >= 500 ? grandTotal : grandTotal + 50}
              </span>
            </div>
            
            <div className="space-y-2">
              <button 
                onClick={onProceedToCheckout}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-colors"
              >
                Proceed to Checkout
              </button>
              <button 
                onClick={onClose}
                className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded-lg font-medium transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart
