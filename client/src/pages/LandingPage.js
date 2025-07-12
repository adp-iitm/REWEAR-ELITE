import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaTshirt, FaUsers, FaLeaf, FaArrowRight, FaHeart, FaStar, FaShieldAlt } from 'react-icons/fa';
import axios from 'axios';

const LandingPage = () => {
  const [featuredItems, setFeaturedItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedItems = async () => {
      try {
        const response = await axios.get('/api/items/featured');
        setFeaturedItems(response.data);
      } catch (error) {
        console.error('Error fetching featured items:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedItems();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-secondary-50/50"></div>
        <div className="absolute inset-0 opacity-50" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="container relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                Sustainable Fashion Through
                <span className="block bg-gradient-primary bg-clip-text text-transparent">
                  Community Exchange
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                Join ReWear and give your unused clothing a second life. Swap items directly or use our point-based system to build a more sustainable wardrobe.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <Link 
                  to="/browse" 
                  className="btn btn-primary btn-lg hover-lift hover-glow group"
                >
                  Start Swapping
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link 
                  to="/register" 
                  className="btn btn-outline btn-lg hover-lift"
                >
                  Join Community
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover-lift">
                <div className="text-3xl font-bold text-primary-600 mb-2">1,000+</div>
                <div className="text-gray-600">Active Members</div>
              </div>
              <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover-lift">
                <div className="text-3xl font-bold text-primary-600 mb-2">5,000+</div>
                <div className="text-gray-600">Items Swapped</div>
              </div>
              <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover-lift">
                <div className="text-3xl font-bold text-primary-600 mb-2">2.5K</div>
                <div className="text-gray-600">CO₂ Saved (kg)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-primary-600">ReWear</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform makes sustainable fashion accessible and rewarding for everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group p-6 rounded-2xl hover-lift hover-glow hover:border-gradient-green-shadow transition-all duration-500" style={{ 
              background: 'white',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}>
              <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <FaTshirt className="text-white text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-primary-600 mb-4 group-hover:text-primary-700 transition-colors">
                Direct Swaps
              </h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                Exchange your clothing directly with other community members. No money involved, just sustainable fashion.
              </p>
            </div>

            <div className="text-center group p-6 rounded-2xl hover-lift hover-glow hover:border-gradient-green-shadow transition-all duration-500" style={{ 
              background: 'white',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}>
              <div className="w-20 h-20 bg-gradient-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <FaUsers className="text-white text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-secondary-600 mb-4 group-hover:text-secondary-700 transition-colors">
                Point System
              </h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                Earn points by listing items and redeem them for clothing you love. Build your sustainable wardrobe.
              </p>
            </div>

            <div className="text-center group p-6 rounded-2xl hover-lift hover-glow hover:border-gradient-green-shadow transition-all duration-500" style={{ 
              background: 'white',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}>
              <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <FaLeaf className="text-white text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-primary-600 mb-4 group-hover:text-primary-700 transition-colors">
                Eco-Friendly
              </h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                Reduce textile waste and promote circular fashion. Every swap helps the environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-gradient-to-br from-primary-50 to-secondary-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="container relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How It <span className="text-secondary-600">Works</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get started with sustainable fashion in just a few simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-stretch">
            <div className="group relative h-full flex flex-col">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift border border-primary-100 hover:border-primary-200 h-full flex flex-col justify-between" style={{ minHeight: '420px', height: '420px' }}>
                <div>
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110">
                      <span className="text-2xl font-bold text-white">1</span>
                    </div>
                    <div className="absolute -top-3 -right-3 w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110 shadow-lg">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-primary-600 mb-4 group-hover:text-primary-700 transition-colors">Sign Up</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">Create your account and get 100 points to start your sustainable fashion journey</p>
                  <div className="bg-primary-50 rounded-lg p-4 mb-4">
                    <p className="text-sm text-primary-700 font-medium">✨ Quick & Easy Setup</p>
                    <p className="text-xs text-primary-600 mt-1">Complete your profile in under 2 minutes</p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-2 h-2 bg-primary-500 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                </div>
              </div>
            </div>
            
            <div className="group relative h-full flex flex-col">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift border border-primary-100 hover:border-primary-200 h-full flex flex-col justify-between" style={{ minHeight: '420px', height: '420px' }}>
                <div>
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110">
                      <span className="text-2xl font-bold text-white">2</span>
                    </div>
                    <div className="absolute -top-3 -right-3 w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110 shadow-lg">
                      <span className="text-white text-sm font-bold">+</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-primary-600 mb-4 group-hover:text-primary-700 transition-colors">List Items</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">Upload photos and details of clothing you want to swap with the community</p>
                  <div className="bg-primary-50 rounded-lg p-4 mb-4">
                    <p className="text-sm text-primary-700 font-medium">📸 Smart Upload</p>
                    <p className="text-xs text-primary-600 mt-1">AI-powered item recognition</p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-2 h-2 bg-primary-500 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                </div>
              </div>
            </div>
            
            <div className="group relative h-full flex flex-col">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift border border-primary-100 hover:border-primary-200 h-full flex flex-col justify-between" style={{ minHeight: '420px', height: '420px' }}>
                <div>
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110">
                      <span className="text-2xl font-bold text-white">3</span>
                    </div>
                    <div className="absolute -top-3 -right-3 w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110 shadow-lg">
                      <span className="text-white text-sm font-bold">→</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-primary-600 mb-4 group-hover:text-primary-700 transition-colors">Browse & Connect</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">Find items you love and connect with other members in our community</p>
                  <div className="bg-primary-50 rounded-lg p-4 mb-4">
                    <p className="text-sm text-primary-700 font-medium">🔍 Smart Matching</p>
                    <p className="text-xs text-primary-600 mt-1">Personalized recommendations</p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-2 h-2 bg-primary-500 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                </div>
              </div>
            </div>
            
            <div className="group relative h-full flex flex-col">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift border border-primary-100 hover:border-primary-200 h-full flex flex-col justify-between" style={{ minHeight: '420px', height: '420px' }}>
                <div>
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110">
                      <span className="text-2xl font-bold text-white">4</span>
                    </div>
                    <div className="absolute -top-3 -right-3 w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110 shadow-lg">
                      <span className="text-white text-sm font-bold">★</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-primary-600 mb-4 group-hover:text-primary-700 transition-colors">Swap & Enjoy</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">Complete your swap and enjoy your new sustainable wardrobe</p>
                  <div className="bg-primary-50 rounded-lg p-4 mb-4">
                    <p className="text-sm text-primary-700 font-medium">🎉 Success!</p>
                    <p className="text-xs text-primary-600 mt-1">Track your environmental impact</p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-2 h-2 bg-primary-500 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Items Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Items
            </h2>
            <p className="text-lg text-gray-600">
              Find your next favorite piece
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center">
              <div className="spinner"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredItems.map((item) => (
                <div key={item._id} className="card hover-lift group">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={item.images[0]}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="card-body p-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                      {item.description.substring(0, 100)}...
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                        <span className="text-primary-600 font-bold text-base">
                          {item.pointsValue} points
                        </span>
                      </div>
                      <Link 
                        to={`/item/${item._id}`}
                        className="btn btn-primary btn-sm hover-lift"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <Link 
              to="/browse" 
              className="btn btn-primary hover-lift hover-glow group"
            >
              Browse All Items
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Our <span className="text-primary-600">Community</span> Says
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of satisfied members who are making a difference
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover-lift border border-primary-100">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-600 text-lg" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                "ReWear has completely changed how I think about fashion. I've found amazing pieces and made new friends in the process!"
              </p>
              <div className="text-left">
                <div className="font-semibold text-primary-600">Sarah M.</div>
                <div className="text-sm text-gray-500">Fashion Enthusiast</div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover-lift border border-secondary-100">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-600 text-lg" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                "The point system is brilliant! I've built an entire sustainable wardrobe without spending a dime."
              </p>
              <div className="text-left">
                <div className="font-semibold text-secondary-600">Mike R.</div>
                <div className="text-sm text-gray-500">Eco-Conscious</div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover-lift border border-primary-100">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-600 text-lg" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                "Finally, a platform that makes sustainable fashion accessible and fun. The community is amazing!"
              </p>
              <div className="text-left">
                <div className="font-semibold text-primary-600">Emma L.</div>
                <div className="text-sm text-gray-500">Sustainability Advocate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="container relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Ready to Start Your <span className="text-yellow-200">Sustainable</span> Fashion Journey?
            </h2>
            <p className="text-xl mb-12 opacity-90">
              Join thousands of fashion enthusiasts who are making a positive impact on the environment
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/register" 
                className="btn btn-lg bg-white text-primary-600 hover:bg-gray-100 border-0 hover-lift hover-glow group"
              >
                Get Started Now
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link 
                to="/browse" 
                className="btn btn-outline btn-lg border-white text-white hover:bg-white hover:text-primary-600 hover-lift"
              >
                Browse Items
              </Link>
            </div>
            
            <div className="mt-12 flex items-center justify-center gap-8 text-sm opacity-80">
              <div className="flex items-center gap-2">
                <FaShieldAlt />
                <span>Secure & Safe</span>
              </div>
              <div className="flex items-center gap-2">
                <FaHeart />
                <span>Community Driven</span>
              </div>
              <div className="flex items-center gap-2">
                <FaLeaf />
                <span>Eco-Friendly</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage; 