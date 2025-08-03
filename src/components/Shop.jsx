import React, { useState } from 'react';
import ProductDetails from './ProductDetails.jsx';

const Shop = ({ searchQuery = '', onAddToCart, onAddToWishlist, wishlistItems = [] }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isProductDetailsOpen, setIsProductDetailsOpen] = useState(false);

  const categories = [
    { id: 'All', name: 'All Items' },
    { id: 'Dairy', name: 'Dairy & Bread' },
    { id: 'Bakery', name: 'Bakery Items' },
    { id: 'Biscuits', name: 'Biscuits' },
    { id: 'Snacks', name: 'Chips & Snacks' },
    { id: 'Namkeens', name: 'Namkeens' },
    { id: 'Beverages', name: 'Cold Drinks' },
    { id: 'Grains', name: 'Atta & Grains' },
    { id: 'Pulses', name: 'Dal & Besan' },
    { id: 'Essentials', name: 'Daily Essentials' },
  ];

  const products = [
    { id: 1, name: 'Fresh Milk (1L)', category: 'Dairy', price: 55, image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=300&h=300&fit=crop&crop=center', stock: 25, rating: 4.5 },
    { id: 2, name: 'Whole Wheat Bread', category: 'Bakery', price: 35, image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300&h=300&fit=crop&crop=center', stock: 20, rating: 4.3 },
    { id: 3, name: 'Fresh Butter (500g)', category: 'Dairy', price: 180, image: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=300&h=300&fit=crop&crop=center', stock: 15, rating: 4.6 },
    { id: 4, name: 'Paneer (250g)', category: 'Dairy', price: 90, image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=300&h=300&fit=crop&crop=center', stock: 12, rating: 4.4 },
    { id: 5, name: 'Curd (500g)', category: 'Dairy', price: 45, image: 'https://images.unsplash.com/photo-1571212515416-57ab12d9c3a6?w=300&h=300&fit=crop&crop=center', stock: 30, rating: 4.2 },
    { id: 6, name: 'Pav Bread (8 pcs)', category: 'Bakery', price: 20, image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop&crop=center', stock: 40, rating: 4.1 },
    { id: 7, name: 'Rusk (200g)', category: 'Bakery', price: 45, image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300&h=300&fit=crop&crop=center', stock: 25, rating: 4.0 },
    { id: 8, name: 'Sandwich Bread', category: 'Bakery', price: 40, image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=300&h=300&fit=crop&crop=center', stock: 18, rating: 4.3 },
    { id: 9, name: 'Parle-G Biscuits', category: 'Biscuits', price: 10, image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=300&h=300&fit=crop&crop=center', stock: 50, rating: 4.5 },
    { id: 10, name: 'Marie Gold Biscuits', category: 'Biscuits', price: 25, image: 'https://images.unsplash.com/photo-1564355808539-22fda35bed7e?w=300&h=300&fit=crop&crop=center', stock: 35, rating: 4.2 },
    { id: 11, name: 'Cream Biscuits', category: 'Biscuits', price: 30, image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop&crop=center', stock: 20, rating: 4.4 },
    { id: 12, name: 'Digestive Biscuits', category: 'Biscuits', price: 35, image: 'https://images.unsplash.com/photo-1564355808539-22fda35bed7e?w=300&h=300&fit=crop&crop=center', stock: 28, rating: 4.1 },
    { id: 13, name: 'Lays Classic Chips', category: 'Snacks', price: 20, image: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=300&h=300&fit=crop&crop=center', stock: 45, rating: 4.3 },
    { id: 14, name: 'Kurkure Masala', category: 'Snacks', price: 15, image: 'https://images.unsplash.com/photo-1613769049987-b31b641f25b1?w=300&h=300&fit=crop&crop=center', stock: 38, rating: 4.4 },
    { id: 15, name: 'Bingo Mad Angles', category: 'Snacks', price: 10, image: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=300&h=300&fit=crop&crop=center', stock: 42, rating: 4.2 },
    { id: 16, name: 'Popcorn Pack', category: 'Snacks', price: 25, image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&crop=center', stock: 30, rating: 4.0 },
    { id: 17, name: 'Haldiram Bhujia', category: 'Namkeens', price: 40, image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=300&h=300&fit=crop&crop=center', stock: 25, rating: 4.6 },
    { id: 18, name: 'Mixture', category: 'Namkeens', price: 35, image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=300&h=300&fit=crop&crop=center', stock: 20, rating: 4.3 },
    { id: 19, name: 'Moong Dal', category: 'Namkeens', price: 45, image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=300&h=300&fit=crop&crop=center', stock: 18, rating: 4.4 },
    { id: 20, name: 'Chana Jor', category: 'Namkeens', price: 30, image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=300&h=300&fit=crop&crop=center', stock: 22, rating: 4.1 },
    { id: 21, name: 'Coca Cola (600ml)', category: 'Beverages', price: 40, image: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=300&h=300&fit=crop&crop=center', stock: 35, rating: 4.2 },
    { id: 22, name: 'Pepsi (600ml)', category: 'Beverages', price: 40, image: 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=300&h=300&fit=crop&crop=center', stock: 32, rating: 4.1 },
    { id: 23, name: 'Sprite (600ml)', category: 'Beverages', price: 40, image: 'https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=300&h=300&fit=crop&crop=center', stock: 28, rating: 4.3 },
    { id: 24, name: 'Thums Up (600ml)', category: 'Beverages', price: 40, image: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=300&h=300&fit=crop&crop=center', stock: 30, rating: 4.4 },
    { id: 25, name: 'Maaza Mango (600ml)', category: 'Beverages', price: 45, image: 'https://images.unsplash.com/photo-1534353341328-81e0f31c7ab5?w=300&h=300&fit=crop&crop=center', stock: 25, rating: 4.5 },
    { id: 26, name: 'Wheat Flour (5kg)', category: 'Grains', price: 200, image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=300&h=300&fit=crop&crop=center', stock: 15, rating: 4.4 },
    { id: 27, name: 'Basmati Rice (5kg)', category: 'Grains', price: 450, image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&h=300&fit=crop&crop=center', stock: 12, rating: 4.6 },
    { id: 28, name: 'Sugar (1kg)', category: 'Grains', price: 45, image: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=300&h=300&fit=crop&crop=center', stock: 25, rating: 4.2 },
    { id: 29, name: 'Salt (1kg)', category: 'Grains', price: 20, image: 'https://images.unsplash.com/photo-1620061783659-0d6d3e805a5d?w=300&h=300&fit=crop&crop=center', stock: 40, rating: 4.0 },
    { id: 30, name: 'Chana Dal (1kg)', category: 'Pulses', price: 80, image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=300&h=300&fit=crop&crop=center', stock: 20, rating: 4.3 },
    { id: 31, name: 'Moong Dal (1kg)', category: 'Pulses', price: 90, image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=300&h=300&fit=crop&crop=center', stock: 18, rating: 4.4 },
    { id: 32, name: 'Toor Dal (1kg)', category: 'Pulses', price: 85, image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=300&h=300&fit=crop&crop=center', stock: 22, rating: 4.2 },
    { id: 33, name: 'Besan (1kg)', category: 'Pulses', price: 120, image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=300&h=300&fit=crop&crop=center', stock: 15, rating: 4.5 },
    { id: 34, name: 'Masoor Dal (1kg)', category: 'Pulses', price: 75, image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=300&h=300&fit=crop&crop=center', stock: 25, rating: 4.1 },
    { id: 35, name: 'Cooking Oil (1L)', category: 'Essentials', price: 140, image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=300&h=300&fit=crop&crop=center', stock: 20, rating: 4.3 },
    { id: 36, name: 'Onions (1kg)', category: 'Essentials', price: 30, image: 'https://images.unsplash.com/photo-1508747047fe-5bd94fb15ea2?w=300&h=300&fit=crop&crop=center', stock: 35, rating: 4.0 },
    { id: 37, name: 'Potatoes (1kg)', category: 'Essentials', price: 25, image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=300&h=300&fit=crop&crop=center', stock: 40, rating: 4.1 },
    { id: 38, name: 'Tomatoes (1kg)', category: 'Essentials', price: 35, image: 'https://images.unsplash.com/photo-1546470427-e38e2d82bb1f?w=300&h=300&fit=crop&crop=center', stock: 30, rating: 4.2 },
    { id: 39, name: 'Green Chillies (250g)', category: 'Essentials', price: 15, image: 'https://images.unsplash.com/photo-1583023587132-2a92987b85a8?w=300&h=300&fit=crop&crop=center', stock: 45, rating: 4.0 },
    { id: 40, name: 'Ginger (250g)', category: 'Essentials', price: 40, image: 'https://images.unsplash.com/photo-1517594422361-5beb24e048ba?w=300&h=300&fit=crop&crop=center', stock: 25, rating: 4.3 },
    { id: 41, name: 'Garlic (250g)', category: 'Essentials', price: 50, image: 'https://images.unsplash.com/photo-1596651205426-b4d4d3778b29?w=300&h=300&fit=crop&crop=center', stock: 20, rating: 4.1 },
    { id: 42, name: 'Coriander (100g)', category: 'Essentials', price: 10, image: 'https://images.unsplash.com/photo-1557909114-4415ca4e0922?w=300&h=300&fit=crop&crop=center', stock: 30, rating: 4.2 },
  ];

  const displayProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = (product) => {
    onAddToCart(product);
  };

  const openProductDetails = (product) => {
    setSelectedProduct(product);
    setIsProductDetailsOpen(true);
  };

  const closeProductDetails = () => {
    setIsProductDetailsOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Shop Daily Essentials
            </h1>
            <p className="text-lg md:text-xl mb-6 text-blue-100">
              Fresh groceries and daily needs delivered to your doorstep
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-blue-100 text-sm">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Fresh Quality Products
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Same Day Delivery
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Best Prices Guaranteed
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Category Filter Section */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Shop by Category</h3>
          <div className="flex flex-wrap gap-3">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Products Section */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-900">
              {selectedCategory === 'All' ? 'All Products' : categories.find(c => c.id === selectedCategory)?.name}
              <span className="ml-2 text-sm text-gray-500">({displayProducts.length} items)</span>
            </h2>
          </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayProducts.map(product => (
            <div key={product.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden transform hover:scale-105">
              <div className="p-4">
                {/* Clickable Image Area */}
                <div 
                  className="cursor-pointer"
                  onClick={() => openProductDetails(product)}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-lg mb-4 hover:opacity-90 transition-opacity"
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDMwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjE1MCIgeT0iMTUwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0iY2VudHJhbCIgZmlsbD0iIzlDQTNBRiIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE2Ij5ObyBJbWFnZTwvdGV4dD4KPHN2Zz4=';
                    }}
                  />
                </div>
                
                {/* Clickable Title */}
                <h3 
                  className="text-lg font-semibold text-gray-900 mb-2 cursor-pointer hover:text-blue-600 transition-colors"
                  onClick={() => openProductDetails(product)}
                >
                  {product.name}
                </h3>
                
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="ml-1 text-sm text-gray-600">({product.rating})</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl font-bold text-green-600">₹{product.price}</span>
                  <span className={`text-sm px-2 py-1 rounded-full ${
                    product.stock > 30 ? 'bg-green-100 text-green-800' :
                    product.stock > 15 ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {product.stock} in stock
                  </span>
                </div>
                
                <div className="flex space-x-2">
                  <button
                    onClick={() => addToCart(product)}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center space-x-1 transform hover:scale-105"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h8m-8 0a2 2 0 100 4 2 2 0 000-4zm8 0a2 2 0 100 4 2 2 0 000-4z" />
                    </svg>
                    <span className="text-sm">Cart</span>
                  </button>
                  
                  <button
                    onClick={() => onAddToWishlist(product)}
                    className={`px-3 py-2 rounded-lg font-medium transition-all duration-200 flex items-center justify-center transform hover:scale-105 ${
                      wishlistItems.find(item => item.id === product.id)
                        ? 'bg-red-100 text-red-600 border border-red-200'
                        : 'bg-gray-100 hover:bg-red-50 text-gray-600 hover:text-red-600 border border-gray-200'
                    }`}
                  >
                    <svg className="w-4 h-4" fill={wishlistItems.find(item => item.id === product.id) ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>

                {/* View Details Button */}
                {/* <button
                  onClick={() => openProductDetails(product)}
                  className="w-full mt-2 bg-gray-50 hover:bg-gray-100 text-gray-700 py-2 px-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center space-x-1"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <span className="text-sm">View Details</span>
                </button> */}
              </div>
            </div>
          ))}
        </div>

        {displayProducts.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {searchQuery ? `No products found for "${searchQuery}"` : 'No products found'}
            </h3>
            <p className="text-gray-600">
              {searchQuery ? 'Try searching with different keywords.' : 'Try selecting a different category.'}
            </p>
          </div>
        )}
      </div>

      {/* Stats Section */}
      <div className="bg-blue-50 rounded-xl p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">{products.length}+</div>
            <div className="text-gray-600">Products Available</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">Fresh</div>
            <div className="text-gray-600">Daily Supplies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
            <div className="text-gray-600">Delivery Service</div>
          </div>
        </div>
      </div>

      {/* Product Details Modal */}
      <ProductDetails
        product={selectedProduct}
        isOpen={isProductDetailsOpen}
        onClose={closeProductDetails}
        onAddToCart={onAddToCart}
        onAddToWishlist={onAddToWishlist}
        wishlistItems={wishlistItems}
      />
      </div>
    </div>
  )
}

export default Shop;