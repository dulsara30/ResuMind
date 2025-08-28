import React from 'react';
import { User, Mail, MapPin, Calendar, Eye, Trash2, FileText } from 'lucide-react';

const Profile = ({ user }) => {
    const pastAnalyses = [
        {
            id: 1,
            fileName: 'Software_Engineer_Resume.pdf',
            category: 'Information Technology',
            date: '2024-01-15',
            score: 85
        },
        {
            id: 2,
            fileName: 'Marketing_Manager_Resume.docx',
            category: 'Marketing & Advertising',
            date: '2024-01-10',
            score: 78
        },
        {
            id: 3,
            fileName: 'Data_Scientist_Resume.pdf',
            category: 'Information Technology',
            date: '2024-01-05',
            score: 92
        }
    ];

    const getScoreColor = (score) => {
        if (score >= 90) return 'text-green-600 bg-green-100';
        if (score >= 75) return 'text-orange-600 bg-orange-100';
        return 'text-red-600 bg-red-100';
    };

    return (
        <section className="min-h-screen py-20 px-6 bg-gradient-to-br from-blue-50 to-orange-50">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        Your{' '}
                        <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
                            Profile
                        </span>
                    </h1>
                    <p className="text-xl text-gray-600">Manage your account and view your resume analysis history</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Panel - Profile Info */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200 sticky top-24">
                            {/* Profile Picture */}
                            <div className="text-center mb-8">
                                <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                                    <User className="text-white" size={48} />
                                </div>
                                <button className="text-blue-600 hover:text-blue-700 font-medium">
                                    Change Photo
                                </button>
                            </div>

                            {/* User Info */}
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                                        <User className="text-gray-400" size={20} />
                                        <span className="text-gray-800">{user?.name || 'John Doe'}</span>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                                        <Mail className="text-gray-400" size={20} />
                                        <span className="text-gray-800">{user?.email || 'john.doe@email.com'}</span>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                                        <MapPin className="text-gray-400" size={20} />
                                        <span className="text-gray-800">San Francisco, CA</span>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Member Since</label>
                                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                                        <Calendar className="text-gray-400" size={20} />
                                        <span className="text-gray-800">January 2024</span>
                                    </div>
                                </div>

                                <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-3 rounded-lg hover:shadow-lg transition-all duration-200">
                                    Edit Profile
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Panel - Analysis History */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 flex items-center">
                                    <FileText className="mr-3 text-blue-600" size={28} />
                                    Past Resume Analyses
                                </h2>
                                <div className="text-sm text-gray-500">
                                    {pastAnalyses.length} analysis{pastAnalyses.length !== 1 ? 'es' : ''}
                                </div>
                            </div>

                            {pastAnalyses.length === 0 ? (
                                <div className="text-center py-12">
                                    <FileText className="mx-auto text-gray-300 mb-4" size={64} />
                                    <h3 className="text-xl font-medium text-gray-500 mb-2">No analyses yet</h3>
                                    <p className="text-gray-400">Upload your first resume to get started!</p>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    {pastAnalyses.map((analysis) => (
                                        <div
                                            key={analysis.id}
                                            className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-200 hover:border-blue-300"
                                        >
                                            <div className="flex items-center justify-between">
                                                <div className="flex-1">
                                                    <div className="flex items-center space-x-3 mb-2">
                                                        <h3 className="text-lg font-semibold text-gray-800">{analysis.fileName}</h3>
                                                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getScoreColor(analysis.score)}`}>
                                                            Score: {analysis.score}%
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                                                        <span className="flex items-center space-x-1">
                                                            <Calendar size={14} />
                                                            <span>{new Date(analysis.date).toLocaleDateString()}</span>
                                                        </span>
                                                        <span>•</span>
                                                        <span>{analysis.category}</span>
                                                    </div>
                                                </div>

                                                <div className="flex items-center space-x-2 ml-4">
                                                    <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200">
                                                        <Eye size={18} />
                                                    </button>
                                                    <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200">
                                                        <Trash2 size={18} />
                                                    </button>
                                                </div>
                                            </div>

                                            {/* Progress bar */}
                                            <div className="mt-4">
                                                <div className="w-full bg-gray-200 rounded-full h-2">
                                                    <div
                                                        className={`h-2 rounded-full transition-all duration-1000 ${analysis.score >= 90
                                                                ? 'bg-green-500'
                                                                : analysis.score >= 75
                                                                    ? 'bg-orange-500'
                                                                    : 'bg-red-500'
                                                            }`}
                                                        style={{ width: `${analysis.score}%` }}
                                                    ></div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profile;