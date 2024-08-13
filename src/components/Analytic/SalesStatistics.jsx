import React from "react";

// import icon from react-icons
import { IoCartOutline } from "react-icons/io5";
import { ImCreditCard } from "react-icons/im";

export default function SalesStatistics() {
    return (
        <div className="grid gap-2 mb-8 xl:grid-cols-5 md:grid-cols-2">
            <div className="min-w-0 rounded-lg overflow-hidden bg-white dark:bg-gray-800 flex justify-center h-full">
                <div className="p-4 border border-neutral-100 justify-between dark:border-neutral-500 w-full p-6 rounded-lg text-white dark:text-emerald-100 bg-teal-600">
                    <div className="text-center xl:mb-0 mb-3">
                        <div className="text-center inline-block text-3xl text-white dark:text-emerald-100 bg-teal-600">
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                version="1.1"
                                viewBox="0 0 16 16"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M16 5l-8-4-8 4 8 4 8-4zM8 2.328l5.345 2.672-5.345 2.672-5.345-2.672 5.345-2.672zM14.398 7.199l1.602 0.801-8 4-8-4 1.602-0.801 6.398 3.199zM14.398 10.199l1.602 0.801-8 4-8-4 1.602-0.801 6.398 3.199z"></path>
                            </svg>
                        </div>
                        <div>
                            <p className="mb-3 text-base font-medium text-gray-50 dark:text-gray-100">
                                Today Orders
                            </p>
                            <p className="text-1xl font-bold leading-none text-gray-50 dark:text-gray-50">
                                Rp. 368.000
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="min-w-0 rounded-lg overflow-hidden bg-white dark:bg-gray-800 flex justify-center h-full">
                <div className="p-4 border border-neutral-100 justify-between dark:border-neutral-500 w-full p-6 rounded-lg text-white dark:text-orange-100 bg-orange-400">
                    <div className="text-center xl:mb-0 mb-3">
                        <div className="text-center inline-block text-3xl text-white dark:text-orange-100 bg-orange-400">
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                version="1.1"
                                viewBox="0 0 16 16"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M16 5l-8-4-8 4 8 4 8-4zM8 2.328l5.345 2.672-5.345 2.672-5.345-2.672 5.345-2.672zM14.398 7.199l1.602 0.801-8 4-8-4 1.602-0.801 6.398 3.199zM14.398 10.199l1.602 0.801-8 4-8-4 1.602-0.801 6.398 3.199z"></path>
                            </svg>
                        </div>
                        <div>
                            <p className="mb-3 text-base font-medium text-gray-50 dark:text-gray-100">
                                Yesterday Orders
                            </p>
                            <p className="text-1xl font-bold leading-none text-gray-50 dark:text-gray-50">
                                Rp. 789.500
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="min-w-0 rounded-lg overflow-hidden bg-white dark:bg-gray-800 flex justify-center text-center h-full">
                <div className="p-4 border border-neutral-100 dark:border-neutral-500 w-full p-6 rounded-lg text-white dark:text-emerald-100 bg-blue-500">
                    <div className="text-center inline-block text-3xl text-white dark:text-emerald-100 bg-blue-500">
                        <IoCartOutline fontSize={34} />
                    </div>
                    <div>
                        <p className="mb-3 text-base font-medium text-gray-50 dark:text-gray-100">
                            This Month
                        </p>
                        <p className="text-1xl font-bold leading-none text-gray-50 dark:text-gray-50">
                            Rp. 2.972.970
                        </p>
                    </div>
                </div>
            </div>
            <div className="min-w-0 rounded-lg overflow-hidden bg-white dark:bg-gray-800 flex justify-center text-center h-full">
                <div className="p-4 border border-neutral-100 dark:border-neutral-500 w-full p-6 rounded-lg text-white dark:text-teal-100 bg-cyan-600">
                    <div className="text-center inline-block text-3xl text-white dark:text-teal-100 bg-cyan-600">
                        <ImCreditCard fontSize={34} />
                    </div>
                    <div>
                        <p className="mb-3 text-base font-medium text-gray-50 dark:text-gray-100">
                            Last Month
                        </p>
                        <p className="text-1xl font-bold leading-none text-gray-50 dark:text-gray-50">
                            Rp. 5.910.650
                        </p>
                    </div>
                </div>
            </div>
            <div className="min-w-0 rounded-lg overflow-hidden bg-white dark:bg-gray-800 flex justify-center text-center h-full">
                <div className="p-4 border border-neutral-100 dark:border-neutral-500 w-full p-6 rounded-lg text-white dark:text-emerald-100 bg-emerald-600">
                    <div className="text-center inline-block text-3xl text-white dark:text-emerald-100 bg-emerald-600">
                        <ImCreditCard fontSize={34} />
                    </div>
                    <div>
                        <p className="mb-3 text-base font-medium text-gray-50 dark:text-gray-100">
                            All-Time Sales
                        </p>
                        <p className="text-1xl font-bold leading-none text-gray-50 dark:text-gray-50">
                            Rp. 11.750.000
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
