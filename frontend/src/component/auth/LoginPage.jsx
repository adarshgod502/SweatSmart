import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ApiService from "../../service/ApiService";

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/home';

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError('Please fill in all fields.');
            setTimeout(() => setError(''), 5000);
            return;
        }

        try {
            const response = await ApiService.loginUser({ email, password });
            if (response.statusCode === 200) {
                localStorage.setItem('token', response.token);
                localStorage.setItem('role', response.role);
                navigate(from, { replace: true });
            }
        } catch (error) {
            setError(error.response?.data?.message || error.message);
            setTimeout(() => setError(''), 5000);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 p-4">
            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl">
                <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">Login to Your Account</h2>
                {error && (
                    <div className="mb-4 text-red-600 text-sm font-medium bg-red-100 px-4 py-2 rounded-md">
                        {error}
                    </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition duration-300"
                    >
                        Login
                    </button>
                </form>
                <p className="mt-6 text-sm text-center text-gray-600">
                    Don't have an account?{' '}
                    <a href="/register" className="text-indigo-600 font-medium hover:underline">
                        Register here
                    </a>
                </p>
            </div>
        </div>
    );
}

export default LoginPage;
