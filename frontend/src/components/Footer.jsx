import React from 'react';
import { Mail, Phone, MapPin, Heart } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-16">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center space-x-3 mb-6">
                            <Logo />
                            <div>
                                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
                                    ResuMind
                                </h3>
                                <p className="text-gray-400 text-sm">AI Resume Analyzer</p>
                            </div>
                        </div>
                        <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                            Empowering careers through intelligent resume analysis. Get AI-powered insights
                            to help you land your dream job and accelerate your professional growth.
                        </p>
                        {/* <div className="flex items-center space-x-2 text-gray-400">
                            <span>Made with</span>
                            <Heart className="text-red-500" size={16} />
                            <span>for job seekers worldwide</span>
                        </div> */}
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-blue-400">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Resume Analyzer</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">How It Works</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Pricing</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Help Center</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">About Us</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-orange-400">Contact Us</h4>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <Mail className="text-blue-400" size={18} />
                                <span className="text-gray-300">support@resumind.com</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Phone className="text-blue-400" size={18} />
                                <span className="text-gray-300">+1 (555) 123-4567</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <MapPin className="text-blue-400" size={18} />
                                <span className="text-gray-300">San Francisco, CA</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
                    <p className="text-gray-400 text-sm mb-4 md:mb-0">
                        © 2024 ResuMind. All rights reserved.
                    </p>
                    <div className="flex space-x-6 text-sm text-gray-400">
                        <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors duration-200">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;