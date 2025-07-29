import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">ShopEase</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your trusted partner for online shopping. We provide quality products with excellent customer service and fast delivery.
            </p>
            <div className="flex space-x-4">

              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.219-5.175 1.219-5.175s-.31-.653-.31-1.618c0-1.518.887-2.653 1.992-2.653.939 0 1.392.705 1.392 1.549 0 .943-.6 2.353-.91 3.66-.259 1.094.548 1.987 1.627 1.987 1.953 0 3.456-2.063 3.456-5.038 0-2.636-1.892-4.476-4.597-4.476-3.131 0-4.971 2.349-4.971 4.774 0 .946.364 1.962.818 2.513a.203.203 0 0 1 .046.196c-.05.211-.163.655-.186.746-.029.119-.094.144-.218.087-1.22-.568-1.984-2.353-1.984-3.784 0-3.475 2.523-6.662 7.274-6.662 3.811 0 6.782 2.718 6.782 6.35 0 3.78-2.386 6.826-5.694 6.826-1.112 0-2.16-.578-2.516-1.267-.55 2.095-1.018 3.74-1.518 5.014C9.394 23.521 10.653 24 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Categories
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Track Your Order
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Size Guide
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Stay Updated</h3>
            <p className="text-gray-300 text-sm">
              Subscribe to get special offers, new arrivals, and once-in-a-lifetime deals.
            </p>
            <div className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
              />
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md transition-colors text-sm font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 ShopEase. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-gray-800 mt-6 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-gray-400 text-sm">
              Accepted Payment Methods:
            </div>
            <div className="flex space-x-4">
              {/* Payment Icons */}
              <div className="bg-white rounded p-2">
                <svg className="w-8 h-5" viewBox="0 0 40 25" fill="none">
                  <rect width="40" height="25" rx="4" fill="#1A1F71"/>
                  <path d="M15.5 7.5H24.5V17.5H15.5V7.5Z" fill="#FF5F00"/>
                  <path d="M16.25 12.5C16.25 10.25 17.25 8.25 18.75 7.5C17.5 6.5 16 6 14.25 6C10.5 6 7.5 9 7.5 12.5C7.5 16 10.5 19 14.25 19C16 19 17.5 18.5 18.75 17.5C17.25 16.75 16.25 14.75 16.25 12.5Z" fill="#EB001B"/>
                  <path d="M32.5 12.5C32.5 16 29.5 19 25.75 19C24 19 22.5 18.5 21.25 17.5C22.75 16.75 23.75 14.75 23.75 12.5C23.75 10.25 22.75 8.25 21.25 7.5C22.5 6.5 24 6 25.75 6C29.5 6 32.5 9 32.5 12.5Z" fill="#F79E1B"/>
                </svg>
              </div>
              <div className="bg-white rounded p-2">
                <svg className="w-8 h-5" viewBox="0 0 40 25" fill="none">
                  <rect width="40" height="25" rx="4" fill="#0070BA"/>
                  <path d="M7.5 8.5H12.5L10 16.5H5L7.5 8.5Z" fill="white"/>
                  <path d="M15 8.5H20L17.5 16.5H12.5L15 8.5Z" fill="white"/>
                  <path d="M22.5 8.5H27.5L25 16.5H20L22.5 8.5Z" fill="white"/>
                  <path d="M30 8.5H35L32.5 16.5H27.5L30 8.5Z" fill="white"/>
                </svg>
              </div>
              <div className="bg-white rounded p-2">
                <svg className="w-8 h-5" viewBox="0 0 40 25" fill="none">
                  <rect width="40" height="25" rx="4" fill="#1434CB"/>
                  <path d="M12 8.5L18 8.5L16 16.5L10 16.5L12 8.5Z" fill="white"/>
                  <path d="M20 8.5L26 8.5L24 16.5L18 16.5L20 8.5Z" fill="white"/>
                  <path d="M28 8.5L34 8.5L32 16.5L26 16.5L28 8.5Z" fill="white"/>
                </svg>
              </div>
              <div className="bg-white rounded p-2">
                <svg className="w-8 h-5" viewBox="0 0 40 25" fill="none">
                  <rect width="40" height="25" rx="4" fill="#00A651"/>
                  <path d="M8 10H32V15H8V10Z" fill="white"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
