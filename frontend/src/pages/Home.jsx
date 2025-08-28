import React from 'react';
import HeroSection from '../components/HeroSection';
import { Outlet } from 'react-router-dom';

const Home = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <div className=" min-h-screen bg-gray-900 text-white">
            <HeroSection />

        </div>
    );
};

export default Home;