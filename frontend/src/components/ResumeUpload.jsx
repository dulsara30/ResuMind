import React, { useState } from 'react';
import { Upload, FileText, X, Check, AlertCircle } from 'lucide-react';
import axios from "axios";

const ResumeUpload = ({ onSubmit, onCancel }) => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [jobDescription, setJobDescription] = useState('');
    const [dragActive, setDragActive] = useState(false);
    const [error, setError] = useState(null);
    const [isAnalyze, setIsAnalyze] = useState(false);

    const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === 'dragenter' || e.type === 'dragover') {
            setDragActive(true);
        } else if (e.type === 'dragleave') {
            setDragActive(false);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);

        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFileSelect(e.dataTransfer.files[0]);
        }
    };

    const handleFileSelect = (file) => {
        setError(null);

        // Validate file type
        const allowedTypes = [
            'application/pdf',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        ];
        if (!allowedTypes.includes(file.type)) {
            setError('Please upload only PDF or DOCX files');
            return;
        }

        // Validate file size (10MB = 10 * 1024 * 1024 bytes)
        if (file.size > 10 * 1024 * 1024) {
            setError('File size must be less than 10MB');
            return;
        }

        setSelectedFile(file);
    };

    const handleFormSubmit = async () => {

        try {
            console.log("Submitting...");
            if (!selectedFile) {
                setError('Please select a resume file');
                return;
            }
            if (!jobDescription.trim()) {
                setError('Please enter a job description or position');
                return;
            }
            setIsAnalyze(true);
            const formData = FormData();
            formData.append('resume', selectedFile);
            formData.append('description', jobDescription);

            const res = await axios.post({})
        } catch (error) {

        }

        onSubmit({ file: selectedFile, description: jobDescription });
    };

    return (
        <section className="min-h-screen py-20 px-6">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        Upload Your Resume & Let{' '}
                        <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
                            ResuMind
                        </span>{' '}
                        Guide You
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Our AI-powered analysis will provide personalized insights to help you stand out from the competition and land your dream job.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Upload Section */}
                    <div className="space-y-8">
                        {/* File Upload */}
                        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                                <FileText className="mr-3 text-blue-600" size={28} />
                                Resume Upload
                            </h3>

                            <div
                                className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300 ${dragActive
                                    ? 'border-blue-500 bg-blue-50'
                                    : selectedFile
                                        ? 'border-green-500 bg-green-50'
                                        : 'border-gray-300 hover:border-blue-400 hover:bg-blue-50'
                                    }`}
                                onDragEnter={handleDrag}
                                onDragLeave={handleDrag}
                                onDragOver={handleDrag}
                                onDrop={handleDrop}
                            >
                                <input
                                    type="file"
                                    accept=".pdf,.docx"
                                    onChange={(e) => e.target.files[0] && handleFileSelect(e.target.files[0])}
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                />

                                {selectedFile ? (
                                    <div className="space-y-4">
                                        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                                            <Check className="text-white" size={32} />
                                        </div>
                                        <div>
                                            <p className="text-green-700 font-semibold">{selectedFile.name}</p>
                                            <p className="text-gray-500 text-sm">{(selectedFile.size / (1024 * 1024)).toFixed(2)} MB</p>
                                        </div>
                                        <button
                                            onClick={() => setSelectedFile(null)}
                                            className="text-red-500 hover:text-red-700 flex items-center mx-auto space-x-2"
                                        >
                                            <X size={16} />
                                            <span>Remove file</span>
                                        </button>
                                    </div>
                                ) : (
                                    <div className="space-y-4">
                                        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-sky-500 rounded-full flex items-center justify-center mx-auto">
                                            <Upload className="text-white" size={32} />
                                        </div>
                                        <div>
                                            <p className="text-gray-700 font-semibold text-lg">Drop your resume here or click to browse</p>
                                            <p className="text-gray-500 text-sm mt-2">Supports PDF and DOCX files up to 10MB</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Job Description */}
                        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Job Description or Position</h3>
                            <textarea
                                value={jobDescription}
                                onChange={(e) => setJobDescription(e.target.value)}
                                placeholder="Enter the job description or position you're targeting..."
                                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white text-gray-700 resize-y min-h-[120px]"
                            />
                        </div>

                        {/* Error Message */}
                        {error && (
                            <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-center space-x-3">
                                <AlertCircle className="text-red-500" size={20} />
                                <p className="text-red-700">{error}</p>
                            </div>
                        )}

                        {/* Action Buttons */}
                        <div className="flex space-x-4">
                            <button
                                onClick={handleFormSubmit}
                                className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                            >
                                {isAnalyze ? "Analyzing.." : "Analyze Resume"}

                            </button>
                            <button
                                onClick={onCancel}
                                className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-200"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>

                    {/* Side Graphic */}
                    <div className="hidden lg:block">
                        <div className="bg-gradient-to-br from-blue-600 to-orange-500 rounded-2xl p-8 text-white relative overflow-hidden">
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold mb-6">Why Choose ResuMind?</h3>
                                <div className="space-y-6">
                                    <div className="flex items-start space-x-4">
                                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                                            <Check size={16} />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold">AI-Powered Analysis</h4>
                                            <p className="text-blue-100 text-sm">Advanced algorithms analyze every aspect of your resume</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-4">
                                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                                            <Check size={16} />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold">Personalized Feedback</h4>
                                            <p className="text-blue-100 text-sm">Get tailored suggestions based on your industry</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-4">
                                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                                            <Check size={16} />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold">Instant Results</h4>
                                            <p className="text-blue-100 text-sm">Get your analysis in minutes, not days</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Background decoration */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ResumeUpload;