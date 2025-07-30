import React from 'react'

const Home = ({ onAddToCart, onAddToWishlist, wishlistItems, onNavigate }) => {
  const dailyEssentials = [
    {
      id: 1,
      name: "Fresh Organic Milk",
      price: 3.99,
      image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400",
      rating: 4.8,
      originalPrice: 4.99,
      discount: 20,
      category: "Dairy"
    },
    {
      id: 2,
      name: "Whole Wheat Bread",
      price: 2.49,
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400",
      rating: 4.6,
      originalPrice: 2.99,
      discount: 17,
      category: "Bakery"
    },
    {
      id: 3,
      name: "Farm Fresh Eggs",
      price: 4.99,
      image: "https://images.unsplash.com/photo-1518569656558-1f25e69d93d7?w=400",
      rating: 4.9,
      originalPrice: 5.99,
      discount: 17,
      category: "Dairy"
    },
    {
      id: 4,
      name: "Organic Bananas",
      price: 1.99,
      image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400",
      rating: 4.7,
      originalPrice: 2.49,
      discount: 20,
      category: "Fruits"
    },
    {
      id: 5,
      name: "Rice (5kg)",
      price: 12.99,
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400",
      rating: 4.5,
      originalPrice: 15.99,
      discount: 19,
      category: "Grains"
    },
    {
      id: 6,
      name: "Cooking Oil (1L)",
      price: 8.99,
      image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400",
      rating: 4.4,
      originalPrice: 10.99,
      discount: 18,
      category: "Cooking"
    }
  ]

  const categories = [
    { name: "Fruits & Vegetables", icon: "🥕", count: "150+ items" },
    { name: "Dairy & Eggs", icon: "🥛", count: "80+ items" },
    { name: "Bakery", icon: "🍞", count: "60+ items" },
    { name: "Meat & Seafood", icon: "🐟", count: "45+ items" },
    { name: "Household", icon: "🧽", count: "200+ items" },
    { name: "Personal Care", icon: "🧴", count: "120+ items" }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Daily Essentials Delivered
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100">
              Fresh groceries, household items & daily needs at your doorstep
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => onNavigate && onNavigate('products')}
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Shop Groceries
              </button>
              <div className="text-green-100 text-sm">
                🚚 Free delivery on orders above $30
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Shop by Category
            </h2>
            <p className="text-xl text-gray-600">
              Find everything you need for your daily life
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <div 
                key={index}
                onClick={() => onNavigate && onNavigate('categories')}
                className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all cursor-pointer hover:bg-green-50 group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-1 text-sm">{category.name}</h3>
                <p className="text-xs text-gray-500">{category.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose DailyNeeds?
            </h2>
            <p className="text-xl text-gray-600">
              Making your daily shopping effortless
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Same Day Delivery</h3>
              <p className="text-gray-600 text-sm">Order before 2 PM for same day delivery</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fresh Quality</h3>
              <p className="text-gray-600 text-sm">Farm fresh produce & quality guarantee</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Best Prices</h3>
              <p className="text-gray-600 text-sm">Competitive prices with daily deals</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Easy Returns</h3>
              <p className="text-gray-600 text-sm">Hassle-free returns & refunds</p>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Essentials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Daily Essentials
            </h2>
            <p className="text-xl text-gray-600">
              Your everyday needs at unbeatable prices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dailyEssentials.map(product => {
              const isInWishlist = wishlistItems.some(item => item.id === product.id)
              
              return (
                <div key={product.id} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow group">
                  <div className="relative mb-4">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
                      {product.discount}% OFF
                    </div>
                    <div className="absolute top-2 right-12 bg-green-600 text-white px-2 py-1 rounded text-xs font-medium">
                      {product.category}
                    </div>
                    <button
                      onClick={() => onAddToWishlist(product)}
                      className={`absolute top-2 right-2 p-2 rounded-full transition-colors ${
                        isInWishlist 
                          ? 'bg-red-500 text-white' 
                          : 'bg-white text-gray-400 hover:text-red-500'
                      }`}
                    >
                      <svg className="w-4 h-4" fill={isInWishlist ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                  
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="ml-2 text-sm text-gray-600">({product.rating})</span>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                      <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => onAddToCart(product)}
                    className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors font-medium"
                  >
                    Add to Cart
                  </button>
                </div>
              )
            })}
          </div>
          
          <div className="text-center mt-12">
            <button 
              onClick={() => onNavigate && onNavigate('products')}
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors"
            >
              View All Products
            </button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start Shopping Today
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join thousands of happy customers who trust us for their daily needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => onNavigate && onNavigate('products')}
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Shop Now
            </button>
            <div className="flex items-center space-x-4 text-green-100">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Free Delivery
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Fresh Quality
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
