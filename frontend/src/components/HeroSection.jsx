import React from 'react';
import { Rocket, Star, TrendingUp, Sparkles, Router } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background with gradient and pattern */}
            <div className="absolute inset-0 bg-gradient-to-bl from-black via-gray-600 to-gray-900 "></div>
            {/* <div className="absolute inset-0 https://i.pinimg.com/1200x/6b/23/9d/6b239d60018cab30e245bf6e68289070.jpg bg-cover bg-center mix-blend-overlay"></div> */}

            {/* Floating elements */}
            <div className="absolute top-20 left-10 animate-float">
                <Star className="text-yellow-300 opacity-70 animate-none" size={32} />
            </div>
            <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
                <Sparkles className="text-white opacity-60" size={24} />
            </div>
            <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '2s' }}>
                <TrendingUp className="text-green-300 opacity-70" size={28} />
            </div>

            {/* Main content */}
            <div className="mt-8 relative z-10 text-center px-6 max-w-6xl mx-auto">
                {/* Rocket animation */}
                <div className="mb-5 flex justify-center">
                    <div className="relative">
                        <div className="w-25 h-25 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full flex items-center justify-center shadow-2xl animate-bounce">
                            <Rocket size={40} className="text-white transform rotate-45" />
                        </div>
                        <div className="absolute -inset-4 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full opacity-30 blur-xl animate-pulse"></div>
                    </div>
                </div>

                {/* Main heading */}
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                    <span className="block">Launch Your Career</span>
                    <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                        to the Next Level
                    </span>
                    <span className="block text-4xl md:text-5xl mt-2">with ResuMind</span>
                </h1>

                {/* Sub-text */}
                <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
                    Analyze your resume with AI, get smart suggestions, and unlock opportunities.
                    Transform your career prospects with intelligent insights.
                </p>

                {/* CTA Button */}
                <Link to="/resume-upload"  >

                    <button
                        className="group relative bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-xl px-12 py-4 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 animate-glow hover:animate-none"
                    >
                        <span className="relative z-10 flex items-center space-x-3">
                            <span>Get Started</span>
                            <Rocket className="group-hover:translate-x-1 transition-transform duration-300" size={24} />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                </Link>

                {/* Feature highlights */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    <div className="glass-effect rounded-xl p-6 text-center transform hover:scale-105 transition-all duration-300">
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-sky-400 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Star className="text-white" size={24} />
                        </div>
                        <h3 className="text-white font-semibold text-lg mb-2">AI-Powered Analysis</h3>
                        <p className="text-blue-100 text-sm">Advanced AI analyzes your resume and provides intelligent feedback</p>
                    </div>

                    <div className="glass-effect rounded-xl p-6 text-center transform hover:scale-105 transition-all duration-300">
                        <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                            <TrendingUp className="text-white" size={24} />
                        </div>
                        <h3 className="text-white font-semibold text-lg mb-2">Career Growth</h3>
                        <p className="text-blue-100 text-sm">Get personalized suggestions to boost your career prospects</p>
                    </div>

                    <div className="glass-effect rounded-xl p-6 text-center transform hover:scale-105 transition-all duration-300">
                        <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Sparkles className="text-white" size={24} />
                        </div>
                        <h3 className="text-white font-semibold text-lg mb-2">Smart Insights</h3>
                        <p className="text-blue-100 text-sm">Discover hidden opportunities and optimize your resume</p>
                    </div>
                </div>
            </div>

            {/* Bottom wave decoration */}
            {/* <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1200 120" className="w-full h-20 fill-white">
                    <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" />
                </svg>
            </div> */}
        </section>
    );
};

export default HeroSection;