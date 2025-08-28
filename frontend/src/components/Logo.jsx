import React from 'react';
import { Brain, Zap } from 'lucide-react';

const Logo = () => {
    return (
        <div className="relative w-12 h-12">
            {/* Outer ring with gradient */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-sky-400 to-orange-500 animate-gradient shadow-lg"></div>

            {/* Inner circle */}
            <div className="absolute inset-1 rounded-full bg-white flex items-center justify-center">
                {/* Brain icon with overlay */}
                <div className="relative">
                    <Brain size={20} className="text-blue-600" />
                    <Zap size={12} className="absolute -top-1 -right-1 text-orange-500 animate-pulse" />
                </div>
            </div>

            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-orange-500 opacity-30 blur-md animate-pulse"></div>
        </div>
    );
};

export default Logo;