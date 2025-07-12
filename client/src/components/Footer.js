import React from 'react';
import { Link } from 'react-router-dom';
import { FaTshirt, FaTwitter, FaInstagram, FaFacebook, FaLinkedin, FaHeart, FaLeaf } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 mt-auto">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center shadow-lg">
                <FaTshirt className="text-white text-xl" />
              </div>
              <div>
                <span className="text-2xl font-bold text-white">
                  ReWear
                </span>
                <p className="text-xs text-gray-400 -mt-1">Sustainable Fashion</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              Promoting sustainable fashion through community clothing exchange. 
              Join thousands of users making a difference one swap at a time.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <FaTwitter className="text-gray-400 hover:text-white transition-colors" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <FaInstagram className="text-gray-400 hover:text-white transition-colors" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <FaFacebook className="text-gray-400 hover:text-white transition-colors" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-gray-400 hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/browse" 
                  className="text-gray-400 hover:text-primary-400 transition-all duration-300 flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-primary-500 rounded-full group-hover:scale-150 transition-transform"></span>
                  Browse Items
                </Link>
              </li>
              <li>
                <Link 
                  to="/add-item" 
                  className="text-gray-400 hover:text-primary-400 transition-all duration-300 flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-primary-500 rounded-full group-hover:scale-150 transition-transform"></span>
                  List an Item
                </Link>
              </li>
              <li>
                <Link 
                  to="/dashboard" 
                  className="text-gray-400 hover:text-primary-400 transition-all duration-300 flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-primary-500 rounded-full group-hover:scale-150 transition-transform"></span>
                  Dashboard
                </Link>
              </li>
              <li>
                <Link 
                  to="/register" 
                  className="text-gray-400 hover:text-primary-400 transition-all duration-300 flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-primary-500 rounded-full group-hover:scale-150 transition-transform"></span>
                  Join Community
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Contact & Support</h3>
            <div className="space-y-4">
              <div>
                <p className="text-gray-400 mb-2 text-sm">Have questions?</p>
                <a 
                  href="mailto:support@rewear.com" 
                  className="text-primary-400 hover:text-primary-300 transition-colors font-medium"
                >
                  support@rewear.com
                </a>
              </div>
              
              <div>
                <p className="text-gray-400 mb-2 text-sm">Follow our journey</p>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <FaLeaf className="text-primary-400" />
                  <span>Making fashion sustainable</span>
                </div>
              </div>
              
              <div>
                <p className="text-gray-400 mb-2 text-sm">Community impact</p>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <FaHeart className="text-primary-400" />
                  <span>1,000+ active members</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 ReWear. All rights reserved. Built for Odoo Hackathon.
            </p>
            
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
          
          {/* Impact Stats */}
          <div className="mt-8 pt-8 border-t border-gray-800">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-primary-400 mb-1">1,000+</div>
                <div className="text-xs text-gray-500">Active Members</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-400 mb-1">5,000+</div>
                <div className="text-xs text-gray-500">Items Swapped</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-400 mb-1">2.5K</div>
                <div className="text-xs text-gray-500">CO₂ Saved (kg)</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-400 mb-1">99%</div>
                <div className="text-xs text-gray-500">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 