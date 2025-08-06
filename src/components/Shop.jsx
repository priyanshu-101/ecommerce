import React, { useState, useEffect } from 'react';
import ProductDetails from './ProductDetails.jsx';
import { getproducts } from '../api/product.js';

const Shop = ({ searchQuery = '', onAddToCart, onAddToWishlist, wishlistItems = [] }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isProductDetailsOpen, setIsProductDetailsOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Category mapping - you can customize these based on your API categories
  const categoryMapping = {
    'meal': 'Pulses', // Maps API category 'meal' to display category 'Pulses'
    'dairy': 'Dairy',
    'bakery': 'Bakery',
    'biscuits': 'Biscuits',
    'snacks': 'Snacks',
    'namkeens': 'Namkeens',
    'beverages': 'Beverages',
    'grains': 'Grains',
    'essentials': 'Essentials'
  };

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

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await getproducts();
        
        if (response.success && response.data) {

          const transformedProducts = response.data
            .filter(product => product.isActive) 
            .map(product => ({
              id: product.id,
              name: product.name.replace(/"/g, ''), 
              category: categoryMapping[product.category] || 'Essentials', 
              price: parseInt(product.discountPrice || product.price), 
              originalPrice: product.discountPrice ? parseInt(product.price) : null,
              image: product.images && product.images.length > 0 
                ? product.images[0] 
                : getDefaultImage(product.category), 
              stock: typeof product.stock === 'string' ? parseInt(product.stock) : product.stock,
              rating: 4.0 + Math.random() * 1, 
              description: product.description?.replace(/"/g, '') || '',
              brand: product.brand || '',
              specifications: product.specifications?.replace(/"/g, '') || '',
            }));
          
          setProducts(transformedProducts);
        } else {
          setError('Failed to fetch products');
        }
      } catch (err) {
        console.error('Error fetching products:', err);
        setError('Error loading products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const getDefaultImage = (category) => {
    const defaultImages = {
      'meal': 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=300&h=300&fit=crop&crop=center',
      'dairy': 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=300&h=300&fit=crop&crop=center',
      'bakery': 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300&h=300&fit=crop&crop=center',
      'biscuits': 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=300&h=300&fit=crop&crop=center',
      'snacks': 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=300&h=300&fit=crop&crop=center',
      'beverages': 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=300&h=300&fit=crop&crop=center',
      'grains': 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&h=300&fit=crop&crop=center'
    };
    return defaultImages[category] || 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=300&h=300&fit=crop&crop=center';
  };

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

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600">Loading products...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Oops! Something went wrong</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

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

                {/* Brand and Specifications */}
                {product.brand && (
                  <p className="text-sm text-gray-500 mb-1">Brand: {product.brand}</p>
                )}
                {product.specifications && (
                  <p className="text-sm text-gray-600 mb-2">{product.specifications}</p>
                )}
                
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
                    <span className="ml-1 text-sm text-gray-600">({product.rating.toFixed(1)})</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-green-600">₹{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">₹{product.originalPrice}</span>
                    )}
                  </div>
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
                    disabled={product.stock === 0}
                    className={`flex-1 py-2 px-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center space-x-1 transform hover:scale-105 ${
                      product.stock === 0
                        ? 'bg-gray-400 text-white cursor-not-allowed'
                        : 'bg-blue-600 hover:bg-blue-700 text-white'
                    }`}
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h8m-8 0a2 2 0 100 4 2 2 0 000-4zm8 0a2 2 0 100 4 2 2 0 000-4z" />
                    </svg>
                    <span className="text-sm">{product.stock === 0 ? 'Out of Stock' : 'Cart'}</span>
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