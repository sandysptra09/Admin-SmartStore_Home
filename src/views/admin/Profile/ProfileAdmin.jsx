import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function ProfileAdmin() {

    // initiate state
    const [userData, setUserData] = useState(null);

    // fetch data 
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            console.log("User not found");
            return;
        }

        const fetchUserData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/smartstore/user/me', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setUserData(response.data);
            } catch (error) {
                console.error('Error fetching user data: ', error);
            }
        }
        fetchUserData();
    }, [])

    // function for handle update data profile
    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        if (!token) {
            console.log("User not found");
            return;
        }

        try {
            await axios.put(`http://localhost:8080/api/smartstore/user/${userData.id}`, userData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log("Profile updated successfully!");
        } catch (error) {
            console.error('Error updating profile: ', error);
        }
    }

    // function to handle input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    }

    return (
        <div className='sm:container grid lg:px-6 sm:px-4 px-2 mx-auto'>
            <div className='min-w-0 mt-8 rounded-lg overflow-y-auto overflow-x-hidden bg-white dark:bg-white min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 rounded-t-lg rounded-0 mb-4'>
                <form onSubmit={handleSubmit}>
                    <div className='p-6 flex-grow w-full max-h-full'>

                        <div className="flex justify-center items-center mb-6">
                            <img
                                src="https://d2sfqo51tiwost.cloudfront.net/voice-models/images/h3B_dKECSXLs1kGJSR0Ax.jpg"
                                className="rounded-full h-40 w-40 object-cover"
                                alt="Profile"
                            />
                        </div>

                        {/* Name */}
                        <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                            <label className="block text-sm text-neutral-700 dark:text-neutral-700 col-span-4 sm:col-span-2 font-medium text-sm">
                                Username
                            </label>
                            <div className="col-span-8 sm:col-span-4">
                                <input
                                    className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-neutral-700 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-white focus:border-neutral-200 border-neutral-200 dark:border-neutral-200 dark:focus:border-neutral-400 dark:bg-neutral-200 mr-2 h-12 p-2"
                                    type="text"
                                    name="username"
                                    value={userData?.username || ''}
                                    placeholder="Your Username"
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                            <label className="block text-sm text-neutral-700 mt-4 dark:text-neutral-700 col-span-4 sm:col-span-2 font-medium text-sm">
                                Email
                            </label>
                            <div className="col-span-8 sm:col-span-4">
                                <input
                                    className="phone-input block w-full h-12 border px-3 py-1 mt-4 text-sm focus:outline-none dark:text-neutral-700 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-white focus:border-neutral-200 border-neutral-200 dark:border-neutral-200 dark:focus:border-neutral-400 dark:bg-neutral-200 mr-2 h-12 p-2"
                                    type="email"
                                    name="email"
                                    value={userData?.email || ''}
                                    placeholder="Your Email"
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        {/* Contact number */}
                        <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                            <label className="block text-sm text-neutral-700 mt-4 dark:text-neutral-700 col-span-4 sm:col-span-2 font-medium text-sm">
                                Contact Number
                            </label>
                            <div className="col-span-8 sm:col-span-4">
                                <input
                                    className="phone-input block w-full h-12 border px-3 py-1 mt-4 text-sm focus:outline-none dark:text-neutral-700 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-white focus:border-neutral-200 border-neutral-200 dark:border-neutral-200 dark:focus:border-neutral-400 dark:bg-neutral-200 mr-2 h-12 p-2"
                                    type="number"
                                    name="phone"
                                    value={userData?.phone || ''}
                                    placeholder="Contact Number"
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        {/* Role */}
                        <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                            <label className="block text-sm text-neutral-700 dark:text-neutral-700 col-span-4 sm:col-span-2 font-medium text-sm">
                                Role
                            </label>
                            <div className="col-span-8 sm:col-span-4">
                                <input
                                    className="block w-full h-12 border px-3 py-1 mt-4 text-sm focus:outline-none dark:text-neutral-700 capitalize leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-white focus:border-neutral-200 border-neutral-200 dark:border-neutral-200 dark:focus:border-neutral-400 dark:bg-neutral-200 mr-2 h-12 p-2"
                                    type="text"
                                    name="role"
                                    value={userData?.role_name || ''}
                                    placeholder="Your Role"
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row-reverse pr-6 pb-6">
                        <button
                            className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-emerald-500 border border-transparent active:bg-emerald-600 hover:bg-emerald-600 h-12 px-6"
                            type="submit"
                        >
                            {" "}
                            Update Profile
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
