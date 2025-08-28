import React, { useState, useEffect } from 'react';
import { FileText, CheckCircle, AlertTriangle, Lightbulb, ArrowLeft, Save, Loader2 } from 'lucide-react';

const AIResults = ({ resume, results, onBack }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);


    useEffect(() => {
        // Simulate loading time
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    const handleSave = () => {
        setIsSaving(true);
        // Simulate save operation
        setTimeout(() => {
            setIsSaving(false);
            alert('Analysis saved successfully!');
        }, 1500);
    };

    if (isLoading) {
        return (
            <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-orange-50">
                <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-8 animate-spin">
                        <Loader2 className="text-white" size={32} />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Analyzing Your Resume</h2>
                    <p className="text-xl text-gray-600 mb-8">Our AI is working hard to provide you with the best insights...</p>
                    <div className="flex justify-center space-x-2">
                        <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
                        <div className="w-3 h-3 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-3 h-3 bg-sky-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="min-h-screen py-20 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        Your Resume Analysis is{' '}
                        <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
                            Complete!
                        </span>
                    </h1>
                    <p className="text-xl text-gray-600">Here's what our AI discovered about your resume</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Panel - Resume Content */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
                        <div className="flex items-center mb-6">
                            <FileText className="text-blue-600 mr-3" size={28} />
                            <h2 className="text-2xl font-semibold text-gray-800">Your Resume</h2>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-6 h-96 overflow-y-auto">
                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-semibold text-lg text-gray-800">John Doe</h3>
                                    <p className="text-gray-600">Software Engineer</p>
                                    <p className="text-gray-500 text-sm">john.doe@email.com | (555) 123-4567</p>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-gray-800 mb-2">Professional Summary</h4>
                                    <p className="text-gray-600 text-sm">
                                        Experienced software engineer with 5+ years of experience in full-stack development.
                                        Proficient in React, Node.js, and cloud technologies. Strong problem-solving skills
                                        and experience leading development teams.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-gray-800 mb-2">Technical Skills</h4>
                                    <p className="text-gray-600 text-sm">
                                        JavaScript, React, Node.js, Python, AWS, Docker, Git, MongoDB, PostgreSQL
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-gray-800 mb-2">Experience</h4>
                                    <div className="text-gray-600 text-sm space-y-2">
                                        <div>
                                            <p className="font-medium">Senior Software Engineer - Tech Corp (2020-Present)</p>
                                            <p>• Led development of customer portal using React and Node.js</p>
                                            <p>• Improved application performance by 40%</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Panel - AI Feedback */}
                    <div className="space-y-6">
                        {/* Strengths */}
                        <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                            <div className="flex items-center mb-4">
                                <CheckCircle className="text-green-600 mr-3" size={24} />
                                <h3 className="text-xl font-semibold text-green-800">Strengths</h3>
                            </div>
                            <div className="space-y-3">
                                {results?.strengths?.map((strength, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                        <p className="text-green-700">{strength}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Areas for Improvement */}
                        <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6">
                            <div className="flex items-center mb-4">
                                <AlertTriangle className="text-orange-600 mr-3" size={24} />
                                <h3 className="text-xl font-semibold text-orange-800">Areas for Improvement</h3>
                            </div>
                            <div className="space-y-3">
                                {results?.weaknesses?.map((weakness, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                                        <p className="text-orange-700">{weakness}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Suggestions */}
                        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                            <div className="flex items-center mb-4">
                                <Lightbulb className="text-blue-600 mr-3" size={24} />
                                <h3 className="text-xl font-semibold text-blue-800">AI Suggestions</h3>
                            </div>
                            <div className="space-y-3">
                                {results?.suggestions?.map((suggestion, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                        <p className="text-blue-700">{suggestion}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-center space-x-6 mt-12">
                    <button
                        onClick={onBack}
                        className="flex items-center space-x-2 px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-200"
                    >
                        <ArrowLeft size={20} />
                        <span>Back to Upload</span>
                    </button>

                    <button
                        onClick={handleSave}
                        disabled={isSaving}
                        className="flex items-center space-x-2 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSaving ? (
                            <Loader2 className="animate-spin" size={20} />
                        ) : (
                            <Save size={20} />
                        )}
                        <span>{isSaving ? 'Saving...' : 'Save Analysis'}</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default AIResults;