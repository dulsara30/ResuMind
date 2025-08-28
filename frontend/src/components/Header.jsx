import React from 'react';
import { Menu, User, Home, Upload, HelpCircle, Info } from 'lucide-react';
import Logo from './Logo';
import { Link, Route } from 'react-router-dom';

const Header = ({ isLoggedIn, user, onNavigate, onLoginClick }) => {
    return (
        <header className="relative bg-white/90 backdrop-blur-md shadow-lg border-b border-blue-100 sticky top-0 z-50">
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo and Brand */}
                    <Link to={"/"}>
                        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => onNavigate('home')}>
                            <Logo />
                            <div>
                                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
                                    ResuMind
                                </h1>
                                <p className="text-xs text-gray-500">AI Resume Analyzer</p>
                            </div>
                        </div>
                    </Link>

                    {/* Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <Link to={"/"}>
                            <button className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
                                <Home size={18} />
                                <span>Home</span>
                            </button>
                        </Link>

                        <Link to={"/resume-upload"}>
                            <button
                                onClick={() => onNavigate('/resume-upload')}
                                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                            >
                                <Upload size={18} />
                                <span>Resume Analyzer</span>
                            </button>
                        </Link>

                        <Link to={"/help"}>
                            <button
                                onClick={() => onNavigate('/help')}
                                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
                                <HelpCircle size={18} />
                                <span>Help</span>
                            </button>
                        </Link>

                        <Link to={"/about-us"}>
                            <button
                                onClick={() => onNavigate('/about-us')}
                                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
                                <Info size={18} />
                                <span>About Us</span>
                            </button>
                        </Link>
                    </nav>

                    {/* User Section */}
                    <div className="flex items-center space-x-4">
                        {isLoggedIn ? (

                            <Link to={"/profile"}>
                                <div
                                    className="flex items-center space-x-3 cursor-pointer hover:bg-blue-50 rounded-full p-2 transition-all duration-200"
                                    onClick={() => onNavigate('/profile')}
                                >
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-orange-500 flex items-center justify-center shadow-lg">
                                        <User className="text-white" size={20} />
                                    </div>
                                    <span className="hidden md:block text-gray-700 font-medium">
                                        {user?.name || 'User'}
                                    </span>
                                </div>
                            </Link>
                        ) : (
                            <button
                                onClick={onLoginClick}
                                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 animate-glow"
                            >
                                Login
                            </button>
                        )}

                        {/* Mobile Menu */}
                        <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors">
                            <Menu size={24} className="text-gray-700" />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;