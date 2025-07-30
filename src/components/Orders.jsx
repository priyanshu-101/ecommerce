import React from 'react'

const Orders = ({ isOpen, onClose, orders }) => {
  if (!isOpen) return null

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800'
      case 'confirmed': return 'bg-blue-100 text-blue-800'
      case 'shipped': return 'bg-purple-100 text-purple-800'
      case 'delivered': return 'bg-green-100 text-green-800'
      case 'cancelled': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
          
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900">My Orders</h2>
            <button onClick={onClose} className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="p-6">
            {orders.length === 0 ? (
              <div className="text-center py-12">
                <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No orders yet</h3>
                <p className="text-gray-500">Start shopping to see your orders here!</p>
              </div>
            ) : (
              <div className="space-y-6">
                {orders.map((order) => (
                  <div key={order.id} className="border border-gray-200 rounded-lg overflow-hidden">
                    {/* Order Header */}
                    <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex items-center space-x-4">
                          <h3 className="text-lg font-semibold text-gray-900">
                            Order #{order.id}
                          </h3>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                            {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                          </span>
                        </div>
                        <div className="mt-2 sm:mt-0 text-sm text-gray-500">
                          Placed on {formatDate(order.date)}
                        </div>
                      </div>
                    </div>

                    {/* Order Items */}
                    <div className="px-6 py-4">
                      <div className="space-y-4">
                        {order.items.map((item, index) => (
                          <div key={index} className="flex items-center space-x-4">
                            <img 
                              src={item.image} 
                              alt={item.name}
                              className="w-16 h-16 object-cover rounded-lg border border-gray-200"
                            />
                            <div className="flex-1">
                              <h4 className="font-medium text-gray-900">{item.name}</h4>
                              <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                            </div>
                            <div className="text-right">
                              <p className="font-semibold text-gray-900">₹{(item.price * item.quantity).toFixed(2)}</p>
                              <p className="text-sm text-gray-500">₹{item.price} each</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Order Summary */}
                    <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex items-center space-x-6 text-sm text-gray-600">
                          <span>Payment: {order.paymentMethod === 'upi' ? 'UPI' : 'Cash on Delivery'}</span>
                          <span>Items: {order.totalItems}</span>
                        </div>
                        <div className="mt-2 sm:mt-0">
                          <span className="text-lg font-bold text-gray-900">
                            Total: ₹{order.totalAmount.toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Order Tracking */}
                    <div className="px-6 py-4 border-t border-gray-200">
                      <h4 className="font-medium text-gray-900 mb-3">Order Status</h4>
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-2">
                          {['pending', 'confirmed', 'shipped', 'delivered'].map((status, index) => {
                            const isActive = ['pending', 'confirmed', 'shipped', 'delivered'].indexOf(order.status) >= index
                            const isCurrent = order.status === status
                            
                            return (
                              <React.Fragment key={status}>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                  isActive 
                                    ? isCurrent 
                                      ? 'bg-blue-600 text-white' 
                                      : 'bg-green-600 text-white'
                                    : 'bg-gray-200 text-gray-400'
                                }`}>
                                  {isActive && !isCurrent ? (
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                  ) : (
                                    <span className="text-sm font-medium">{index + 1}</span>
                                  )}
                                </div>
                                {index < 3 && (
                                  <div className={`w-8 h-1 ${
                                    ['pending', 'confirmed', 'shipped', 'delivered'].indexOf(order.status) > index
                                      ? 'bg-green-600' 
                                      : 'bg-gray-200'
                                  }`}></div>
                                )}
                              </React.Fragment>
                            )
                          })}
                        </div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500 mt-2">
                        <span>Pending</span>
                        <span>Confirmed</span>
                        <span>Shipped</span>
                        <span>Delivered</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Orders
