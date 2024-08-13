import React, { useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })

    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!formData.username || !formData.password) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Username or password cannot be empty!',
                });
                return;
            }

            const response = await axios.post('http://localhost:8080/api/smartstore/auth/login', formData);
            if (response.data.token) {
                localStorage.setItem('token', response.data.token);
                console.log("Login successfully", response.data);
                navigate("/");
                toast.success("Login successfully", {
                    autoClose: 3500,
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Username or password incorrect!',
                });
            }
        } catch (error) {
            if (error.response) {
                const { data } = error.response;
                if (data.message === 'Username not found') {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Username not found!',
                    });
                } else if (data.message === 'Password incorrect') {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Password incorrect!',
                    });
                }
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Error logging in. Please try again later!',
                });
            }
        }
    };

    return (
        <div>
            <div className="flex items-center min-h-screen p-6 bg-white dark:bg-white">
                <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-white">
                    <div className="flex flex-col overflow-y-auto md:flex-row">
                        <div className="h-32 md:h-auto md:w-1/2">
                            <img
                                aria-hidden="true"
                                className="object-cover w-full h-full dark:hidden"
                                src="/assets/images/thumbnail/background/Login-Admin-Images.jpeg"
                                alt="Office"
                            />
                            <img
                                aria-hidden="true"
                                className="hidden object-cover w-full h-full dark:block"
                                src="/assets/images/thumbnail/background/Login-Admin-Images.jpeg"
                                alt="Office"
                            />
                        </div>
                        <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
                            <div className="w-full">
                                <h1 className="mb-6 text-2xl font-semibold text-neutral-700 dark:text-neutral-700">
                                    Login
                                </h1>
                                {error && <p>{error}</p>}
                                <form onSubmit={handleSubmit}>
                                    <label className="block text-sm text-neutral-800 dark:text-neutral-700 col-span-4 sm:col-span-2 font-medium text-sm">
                                        Username
                                    </label>
                                    <input
                                        className="block w-full h-12 mt-2 border px-3 py-1 text-sm focus:outline-none dark:text-neutral-700 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-white focus:border-neutral-200 border-neutral-200 dark:border-neutral-200 dark:focus:border-neutral-400 dark:bg-neutral-200 mr-2 h-12 p-2"
                                        type="text"
                                        name="username"
                                        placeholder="Your Username"
                                        autoComplete="username"
                                        value={formData.username}
                                        onChange={handleChange}
                                        
                                    />

                                    <div className="mt-6"></div>

                                    <label className="block text-sm text-neutral-800 dark:text-neutral-700 col-span-4 sm:col-span-2 font-medium text-sm">
                                        Password
                                    </label>
                                    <input
                                        className="block w-full h-12 mt-2 border px-3 py-1 text-sm focus:outline-none dark:text-neutral-700 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-white focus:border-neutral-200 border-neutral-200 dark:border-neutral-200 dark:focus:border-neutral-400 dark:bg-neutral-200 mr-2 h-12 p-2"
                                        type="password"
                                        name="password"
                                        placeholder="Your Password"
                                        autoComplete="current-password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        
                                    />

                                    <button
                                        className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-emerald-500 border border-transparent active:bg-emerald-600 hover:bg-emerald-600 mt-4 h-12 w-full"
                                        type="submit"
                                    >
                                        Login
                                    </button>
                                </form>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    );
}
