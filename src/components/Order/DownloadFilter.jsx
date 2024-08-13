import React from "react";

export default function DownloadFilter() {
    return (
        <div className="min-w-0 rounded-lg overflow-hidden bg-white dark:bg-white shadow-xs overflow-hidden mb-5">
            <div className="p-4">
                <form className="">
                    <div className="grid gap-4 lg:gap-4 xl:gap-6 md:gap-2 md:grid-cols-5 py-2">
                        <div>
                            <input
                                className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-neutral-700 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-white focus:border-neutral-200 border-neutral-200 dark:border-neutral-200 dark:focus:border-neutral-400 dark:bg-neutral-200"
                                type="search"
                                name="search"
                                placeholder="Search by Customer Name"
                            />
                        </div>
                        <div>
                            <select className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-neutral-700 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-white focus:border-neutral-200 border-neutral-200 dark:border-neutral-200 dark:focus:border-neutral-400 dark:bg-neutral-200 leading-5">
                                <option value="Status" hidden="">
                                    Status
                                </option>
                                <option value="Delivered">Delivered</option>
                                <option value="Pending">Pending</option>
                                <option value="Processing">Processing</option>
                                <option value="Cancel">Cancel</option>
                            </select>
                        </div>
                        <div>
                            <select className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-neutral-700 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-white focus:border-neutral-200 border-neutral-200 dark:border-neutral-200 dark:focus:border-neutral-400 dark:bg-neutral-200 leading-5">
                                <option value="Order limits" hidden="">
                                    Order limits
                                </option>
                                <option value="5">Last 5 days orders</option>
                                <option value="7">Last 7 days orders</option>
                                <option value="15">Last 15 days orders</option>
                                <option value="30">Last 30 days orders</option>
                            </select>
                        </div>
                        <div>
                            <select className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-neutral-700 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-white focus:border-neutral-200 border-neutral-200 dark:border-neutral-200 dark:focus:border-neutral-400 dark:bg-neutral-200 leading-5">
                                <option value="Method" hidden="">
                                    Method
                                </option>
                                <option value="Cash">Cash</option>
                                <option value="Card">Card</option>
                                <option value="Credit">Credit</option>
                            </select>
                        </div>
                        <div>
                            <button
                                type="button"
                                className="flex items-center justify-center text-sm leading-5 h-12 w-full text-center transition-colors duration-150 font-medium px-6 py-2 rounded-md text-white bg-emerald-500 border border-transparent active:bg-emerald-600 hover:bg-emerald-600"
                            >
                                Download All Orders
                                <span className="ml-2 text-base">
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 512 512"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="32"
                                            d="M320 336h76c55 0 100-21.21 100-75.6s-53-73.47-96-75.6C391.11 99.74 329 48 256 48c-69 0-113.44 45.79-128 91.2-60 5.7-112 35.88-112 98.4S70 336 136 336h56m0 64.1l64 63.9 64-63.9M256 224v224.03"
                                        ></path>
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className="grid gap-4 lg:gap-6 xl:gap-6 lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 py-2">
                        <div>
                            <label htmlFor="startDate" className="block text-sm text-neutral-800 dark:text-neutral-500">
                                Start Date
                            </label>
                            <input
                                className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-neutral-700 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-white focus:border-neutral-200 border-neutral-200 dark:border-neutral-200 dark:focus:border-neutral-400 dark:bg-neutral-200"
                                type="date"
                                id="startDate"
                                name="startDate"
                            />
                        </div>
                        <div>
                            <label htmlFor="endDate" className="block text-sm text-neutral-800 dark:text-neutral-500">
                                End Date
                            </label>
                            <input
                                className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-neutral-700 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-white focus:border-neutral-200 border-neutral-200 dark:border-neutral-200 dark:focus:border-neutral-400 dark:bg-neutral-200"
                                type="date"
                                id="endDate"
                                name="endDate"
                            />
                        </div>
                        <div className="mt-2 md:mt-0 flex items-center xl:gap-x-4 gap-x-1 flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                            <div className="w-full mx-1 mt-5">
                                <button
                                    className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-emerald-500 border border-transparent active:bg-emerald-600 hover:bg-emerald-600 h-12 w-full"
                                    type="submit"
                                >
                                    Filter
                                </button>
                            </div>
                            <div className="w-full mx-1 mt-5">
                                <button
                                    className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-neutral-700 border-gray-200 border dark:text-neutral-700 focus:outline-none rounded-lg border bg-gray-200 border-gray-200 px-4 w-full mr-3 flex items-center justify-center cursor-pointer h-12 px-4 md:py-1 py-2 dark:bg-neutral-200"
                                    type="reset"
                                >
                                    <span className="text-black dark:text-neutral-700">Reset</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
