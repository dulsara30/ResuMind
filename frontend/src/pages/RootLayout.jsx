import React, { useState } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ResumeUpload from '../components/ResumeUpload';
import AIResults from '../components/AIResults';
import Profile from '../components/Profile';
import Login from '../components/Login';
import Footer from '../components/Footer';
import Home from './Home';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
    const [currentPage, setCurrentPage] = useState('home');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [uploadedResume, setUploadedResume] = useState(null);
    const [aiResults, setAiResults] = useState(null);
    const [showLogin, setShowLogin] = useState(false);

    const handleLogin = (userData) => {
        setUser(userData);
        setIsLoggedIn(true);
        setShowLogin(false);
    };

    const handleResumeSubmit = (resumeData) => {
        setUploadedResume(resumeData);
        // Simulate AI processing
        setTimeout(() => {
            setAiResults({
                strengths: [
                    "Strong technical skills in React and JavaScript",
                    "Excellent project management experience",
                    "Clear and concise communication style"
                ],
                weaknesses: [
                    "Could benefit from more leadership examples",
                    "Missing specific metrics and achievements",
                    "Skills section could be more detailed"
                ],
                suggestions: [
                    "Add quantifiable achievements (e.g., 'Increased efficiency by 30%')",
                    "Include leadership experience examples",
                    "Expand technical skills section with specific tools"
                ]
            });
            setCurrentPage('results');
        }, 3000);
    };

    const renderCurrentPage = () => {
        switch (currentPage) {
            case 'upload':
                return <ResumeUpload onSubmit={handleResumeSubmit} onCancel={() => setCurrentPage('home')} />;
            case 'results':
                return <AIResults resume={uploadedResume} results={aiResults} onBack={() => setCurrentPage('upload')} />;
            case 'profile':
                return <Profile user={user} />;
            default:
                return <HeroSection onGetStarted={() => isLoggedIn ? setCurrentPage('upload') : setShowLogin(true)} />;
        }
    };
    //min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50
    return (
        <div>
            <Header
                isLoggedIn={isLoggedIn}
                user={user}
                onNavigate={setCurrentPage}
                onLoginClick={() => setShowLogin(true)}
                onProfileClick={() => setCurrentPage('profile')}
            />

            {/* <main className="relative">
                {renderCurrentPage()}
            </main> */}
            <main>
                <Outlet />
            </main>

            <Footer />

            {showLogin && (
                <Login
                    onLogin={handleLogin}
                    onClose={() => setShowLogin(false)}
                />
            )}
        </div>
    );
};

export default RootLayout;