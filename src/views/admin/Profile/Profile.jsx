import React from "react";

import "./Profile.css";

export default function Profile() {
    return (
        <div className="sm:container grid lg:px-6 sm:px-4 px-2 mx-auto">
            <div className="min-w-0 mt-8 rounded-lg overflow-y-auto overflow-x-hidden bg-white dark:bg-white min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 rounded-t-lg rounded-0 mb-4">
                <form className="">
                    <div className="p-6 flex-grow w-full max-h-full">
                        <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                            <label className="block text-sm text-neutral-700 dark:text-neutral-700 col-span-4 sm:col-span-2 font-medium text-sm">
                                Username
                            </label>
                            <div className="col-span-8 sm:col-span-4">
                                <input
                                    className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-neutral-700 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-white focus:border-neutral-200 border-neutral-200 dark:border-neutral-200 dark:focus:border-neutral-400 dark:bg-neutral-200 mr-2 h-12 p-2"
                                    type="text"
                                    name="username"
                                    placeholder="Your Username"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                            <div className="col-span-6 sm:col-span-3">
                                <label className="block text-sm text-neutral-700 mb-4 dark:text-neutral-700 font-medium text-sm">
                                    First Name
                                </label>
                                <input
                                    className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-neutral-700 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-white focus:border-neutral-200 border-neutral-200 dark:border-neutral-200 dark:focus:border-neutral-400 dark:bg-neutral-200 mr-2 h-12 p-2"
                                    type="text"
                                    name="firstname"
                                    placeholder="Your First Name"
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label className="block text-sm text-neutral-700 mb-4 dark:text-neutral-700 font-medium text-sm">
                                    Last Name
                                </label>
                                <input
                                    className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-neutral-700 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-white focus:border-neutral-200 border-neutral-200 dark:border-neutral-200 dark:focus:border-neutral-400 dark:bg-neutral-200 mr-2 h-12 p-2"
                                    type="text"
                                    name="lastname"
                                    placeholder="Your Last Name"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                            <label className="block text-sm text-neutral-700 mt-4 dark:text-neutral-700 col-span-4 sm:col-span-2 font-medium text-sm">
                                Phone
                            </label>
                            <div className="col-span-8 sm:col-span-4">
                                <input
                                    className="phone-input block w-full h-12 border px-3 py-1 mt-4 text-sm focus:outline-none dark:text-neutral-700 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-white focus:border-neutral-200 border-neutral-200 dark:border-neutral-200 dark:focus:border-neutral-400 dark:bg-neutral-200 mr-2 h-12 p-2"
                                    type="number"
                                    name="phone"
                                    placeholder="Phone Number"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                            <div className="col-span-6 sm:col-span-3">
                                <label className="block text-sm text-neutral-700 mb-4 dark:text-neutral-700 font-medium text-sm">
                                    Address 1
                                </label>
                                <textarea
                                    className="block w-full border px-3 py-1 text-sm focus:outline-none dark:text-neutral-700 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-white focus:border-neutral-200 border-neutral-200 dark:border-neutral-200 dark:focus:border-neutral-400 dark:bg-neutral-200 mr-2 p-2 resize-none"
                                    name="address1"
                                    placeholder="Your Address 1"
                                    rows="5"
                                ></textarea>
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label className="block text-sm text-neutral-700 mb-4 dark:text-neutral-700 font-medium text-sm">
                                    Address 2
                                </label>
                                <textarea
                                    className="block w-full border px-3 py-1 text-sm focus:outline-none dark:text-neutral-700 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-white focus:border-neutral-200 border-neutral-200 dark:border-neutral-200 dark:focus:border-neutral-400 dark:bg-neutral-200 mr-2 p-2 resize-none"
                                    name="address2"
                                    placeholder="Your Address 2"
                                    rows="5"
                                ></textarea>
                            </div>
                        </div>

                        <div className="grid grid-cols-9 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                            <div className="col-span-6 sm:col-span-3">
                                <label className="block text-sm text-neutral-700 mb-4 dark:text-neutral-700 font-medium text-sm">
                                    Province
                                </label>
                                <input
                                    className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-neutral-700 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-white focus:border-neutral-200 border-neutral-200 dark:border-neutral-200 dark:focus:border-neutral-400 dark:bg-neutral-200 mr-2 h-12 p-2"
                                    type="text"
                                    name="province"
                                    placeholder="Your Province"
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label className="block text-sm text-neutral-700 mb-4 dark:text-neutral-700 font-medium text-sm">
                                    City
                                </label>
                                <input
                                    className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-neutral-700 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-white focus:border-neutral-200 border-neutral-200 dark:border-neutral-200 dark:focus:border-neutral-400 dark:bg-neutral-200 mr-2 h-12 p-2"
                                    type="text"
                                    name="city"
                                    placeholder="Your City"
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label className="block text-sm text-neutral-700 mb-4 dark:text-neutral-700 font-medium text-sm">
                                    Post Code
                                </label>
                                <input
                                    className="input-post-code block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-neutral-700 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-white focus:border-neutral-200 border-neutral-200 dark:border-neutral-200 dark:focus:border-neutral-400 dark:bg-neutral-200 mr-2 h-12 p-2"
                                    type="number"
                                    name="post_code"
                                    placeholder="Your Post Code"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                            <label className="block text-sm text-neutral-700 mt-4 dark:text-neutral-700 col-span-4 sm:col-span-2 font-medium text-sm">
                                Email
                            </label>
                            <div className="col-span-8 sm:col-span-4">
                                <input
                                    className="phone-input block w-full h-12 border px-3 py-1 mt-4 text-sm focus:outline-none dark:text-neutral-700 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-white focus:border-neutral-200 border-neutral-200 dark:border-neutral-200 dark:focus:border-neutral-400 dark:bg-neutral-200 mr-2 h-12 p-2"
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
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
    );
}
