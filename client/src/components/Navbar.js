import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { FaUser, FaSignOutAlt, FaBars, FaTimes, FaTshirt } from 'react-icons/fa';

const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-50">
      <div className="container">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
              <FaTshirt className="text-white text-lg" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                ReWear
              </span>
              <span className="text-xs text-gray-500 -mt-1">Sustainable Fashion</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              to="/browse" 
              className="text-gray-700 hover:text-primary-600 transition-all duration-300 font-medium relative group"
            >
              Browse Items
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            
            {isAuthenticated ? (
              <>
                <Link 
                  to="/dashboard" 
                  className="text-gray-700 hover:text-primary-600 transition-all duration-300 font-medium relative group"
                >
                  Dashboard
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link 
                  to="/add-item" 
                  className="text-gray-700 hover:text-primary-600 transition-all duration-300 font-medium relative group"
                >
                  List Item
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                {user?.role === 'admin' && (
                  <Link 
                    to="/admin" 
                    className="text-gray-700 hover:text-primary-600 transition-all duration-300 font-medium relative group"
                  >
                    Admin
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                )}
                
                {/* User Menu */}
                <div className="flex items-center gap-4 ml-4 pl-4 border-l border-gray-200">
                  <div className="flex items-center gap-2 bg-primary-50 px-3 py-1.5 rounded-full">
                    <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-primary-700">
                      {user?.points} points
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gradient-secondary rounded-full flex items-center justify-center">
                        <FaUser className="text-white text-sm" />
                      </div>
                      <span className="text-gray-700 font-medium">{user?.name}</span>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-2 text-gray-500 hover:text-error-600 transition-all duration-300 p-2 rounded-lg hover:bg-error-50"
                      title="Logout"
                    >
                      <FaSignOutAlt />
                      <span className="hidden lg:inline font-medium">Logout</span>
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex items-center gap-4">
                <Link 
                  to="/login" 
                  className="btn btn-ghost hover:bg-gray-100 transition-all duration-300"
                >
                  Login
                </Link>
                <Link 
                  to="/register" 
                  className="btn btn-primary hover-lift hover-glow"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all duration-300"
          >
            {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-gray-200 animate-slide-in">
            <div className="flex flex-col gap-4">
              <Link 
                to="/browse" 
                className="text-gray-700 hover:text-primary-600 transition-all duration-300 font-medium py-2 px-4 rounded-lg hover:bg-primary-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Browse Items
              </Link>
              
              {isAuthenticated ? (
                <>
                  <Link 
                    to="/dashboard" 
                    className="text-gray-700 hover:text-primary-600 transition-all duration-300 font-medium py-2 px-4 rounded-lg hover:bg-primary-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <Link 
                    to="/add-item" 
                    className="text-gray-700 hover:text-primary-600 transition-all duration-300 font-medium py-2 px-4 rounded-lg hover:bg-primary-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    List Item
                  </Link>
                  {user?.role === 'admin' && (
                    <Link 
                      to="/admin" 
                      className="text-gray-700 hover:text-primary-600 transition-all duration-300 font-medium py-2 px-4 rounded-lg hover:bg-primary-50"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Admin
                    </Link>
                  )}
                  
                  {/* Mobile User Info */}
                  <div className="mt-4 p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-secondary rounded-full flex items-center justify-center">
                          <FaUser className="text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{user?.name}</p>
                          <p className="text-sm text-gray-500">{user?.email}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 bg-primary-100 px-3 py-1.5 rounded-full">
                        <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                        <span className="text-sm font-semibold text-primary-700">
                          {user?.points} points
                        </span>
                      </div>
                      
                      <button
                        onClick={handleLogout}
                        className="flex items-center gap-2 text-error-600 hover:text-error-700 transition-all duration-300 p-2 rounded-lg hover:bg-error-50"
                      >
                        <FaSignOutAlt />
                        <span className="font-medium">Logout</span>
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex flex-col gap-3 mt-4">
                  <Link 
                    to="/login" 
                    className="btn btn-outline text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link 
                    to="/register" 
                    className="btn btn-primary text-center hover-lift"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 