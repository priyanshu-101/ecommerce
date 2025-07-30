import { useState, useEffect, useRef } from 'react'
import logo from '../assets/shopease.png'

const Navbar = ({ user, onSignOut, onSearch, cartItemsCount = 0, onCartClick, wishlistItemsCount = 0, onWishlistClick, onOrdersClick, currentView = 'home', onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const userMenuRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setIsUserMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleSearchChange = (e) => {
    const value = e.target.value
    setSearchTerm(value)
    onSearch(value) 
  }

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => onNavigate('home')}
              className="h-10 w-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center"
            >
              {/* <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg> */}
              <img src={logo} alt="ShopEase Logo" className="h-20 w-40 object-cover cursor-pointer" />
            </button>
            <button 
              onClick={() => onNavigate('home')}
              className="text-xl font-bold text-gray-900 cursor-pointer hover:text-indigo-600 transition-colors"
            >
              ShopEase
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => onNavigate('home')}
              className={`font-medium transition-colors ${
                currentView === 'home' 
                  ? 'text-indigo-600 border-b-2 border-indigo-600 pb-1' 
                  : 'text-gray-700 hover:text-indigo-600'
              }`}
            >
              Home
            </button>
            <button 
              onClick={() => onNavigate('products')}
              className={`font-medium transition-colors ${
                currentView === 'products' 
                  ? 'text-indigo-600 border-b-2 border-indigo-600 pb-1' 
                  : 'text-gray-700 hover:text-indigo-600'
              }`}
            >
              Products
            </button>

            <button 
              onClick={() => onNavigate('about')}
              className={`font-medium transition-colors ${
                currentView === 'about' 
                  ? 'text-indigo-600 border-b-2 border-indigo-600 pb-1' 
                  : 'text-gray-700 hover:text-indigo-600'
              }`}
            >
              About
            </button>
            <button 
              onClick={() => onNavigate('contact')}
              className={`font-medium transition-colors ${
                currentView === 'contact' 
                  ? 'text-indigo-600 border-b-2 border-indigo-600 pb-1' 
                  : 'text-gray-700 hover:text-indigo-600'
              }`}
            >
              Contact
            </button>
          </nav>

          <div className="flex items-center space-x-2">
            <div className="hidden lg:block relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-64 px-4 py-2 pl-10 pr-4 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
              <svg className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* Cart Icon */}
            <button 
              onClick={onCartClick}
              className="relative p-2 text-gray-700 hover:text-indigo-600 transition-colors"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h8m-8 0a2 2 0 100 4 2 2 0 000-4zm8 0a2 2 0 100 4 2 2 0 000-4z" />
              </svg>
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>

            <button 
              onClick={onWishlistClick}
              className="relative p-2 text-gray-700 hover:text-red-500 transition-colors"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              {wishlistItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {wishlistItemsCount}
                </span>
              )}
            </button>

            <div className="relative" ref={userMenuRef}>
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center space-x-1 px-2 py-2 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div className="hidden md:block text-left">
                  <p className="text-sm font-medium text-gray-900">{user.displayName || 'User'}</p>
                  <p className="text-xs text-gray-500">{user.email}</p>
                </div>
                <svg className="w-4 h-4 text-gray-400 hidden md:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                  <div className="py-1">
                    <div className="px-4 py-2 text-sm text-gray-700 border-b border-gray-100">
                      <p className="font-medium">{user.displayName || 'User'}</p>
                      <p className="text-xs text-gray-500 truncate">{user.email}</p>
                    </div>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                      Profile
                    </a>
                    <button
                      onClick={onOrdersClick}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      Orders
                    </button>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                      Settings
                    </a>
                    <button
                      onClick={onSignOut}
                      className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                    >
                      Sign out
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-100 transition-colors"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            {/* Mobile Search */}
            <div className="mb-4 relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-full px-4 py-2 pl-10 pr-4 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
              <svg className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            
            {/* Mobile Navigation Links */}
            <nav className="space-y-2">
              <button 
                onClick={() => {
                  onNavigate('home')
                  setIsMenuOpen(false)
                }}
                className={`block w-full text-left px-4 py-2 rounded-md transition-colors ${
                  currentView === 'home'
                    ? 'text-indigo-600 bg-indigo-50'
                    : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50'
                }`}
              >
                Home
              </button>
              <button 
                onClick={() => {
                  onNavigate('products')
                  setIsMenuOpen(false)
                }}
                className={`block w-full text-left px-4 py-2 rounded-md transition-colors ${
                  currentView === 'products'
                    ? 'text-indigo-600 bg-indigo-50'
                    : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50'
                }`}
              >
                Products
              </button>
              <button 
                onClick={() => {
                  onNavigate('about')
                  setIsMenuOpen(false)
                }}
                className={`block w-full text-left px-4 py-2 rounded-md transition-colors ${
                  currentView === 'about'
                    ? 'text-indigo-600 bg-indigo-50'
                    : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50'
                }`}
              >
                About
              </button>
              <button 
                onClick={() => {
                  onNavigate('contact')
                  setIsMenuOpen(false)
                }}
                className={`block w-full text-left px-4 py-2 rounded-md transition-colors ${
                  currentView === 'contact'
                    ? 'text-indigo-600 bg-indigo-50'
                    : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50'
                }`}
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar
