import React, { useState } from 'react';
import ApiService from '../../service/ApiService';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        phoneNumber: ''
    });

    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const { name, email, password, phoneNumber } = formData;
        if (!name || !email || !password || !phoneNumber) {
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) {
            setErrorMessage('Please fill all the fields.');
            setTimeout(() => setErrorMessage(''), 5000);
            return;
        }
        try {
            const response = await ApiService.registerUser(formData);

            if (response.statusCode === 200) {
                setFormData({
                    name: '',
                    email: '',
                    password: '',
                    phoneNumber: ''
                });
                setSuccessMessage('User registered successfully');
                setTimeout(() => {
                    setSuccessMessage('');
                    navigate('/login');
                }, 3000);
            }
        } catch (error) {
            setErrorMessage(error.response?.data?.message || error.message);
            setTimeout(() => setErrorMessage(''), 5000);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-teal-100 to-indigo-200 p-4">
            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl">
                <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">Create an Account</h2>

                {errorMessage && (
                    <div className="mb-4 text-red-600 text-sm font-medium bg-red-100 px-4 py-2 rounded-md">
                        {errorMessage}
                    </div>
                )}
                {successMessage && (
                    <div className="mb-4 text-green-600 text-sm font-medium bg-green-100 px-4 py-2 rounded-md">
                        {successMessage}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-400 focus:outline-none"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-400 focus:outline-none"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Phone Number</label>
                        <input
                            type="text"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-400 focus:outline-none"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-400 focus:outline-none"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 bg-teal-600 text-white font-semibold rounded-md hover:bg-teal-700 transition duration-300"
                    >
                        Register
                    </button>
                </form>

                <p className="mt-6 text-sm text-center text-gray-600">
                    Already have an account?{' '}
                    <a href="/login" className="text-teal-600 font-medium hover:underline">
                        Login here
                    </a>
                </p>
            </div>
        </div>
    );
}

export default RegisterPage;
