import React from "react";

export default function PaginationOrder() {
    return (
        <div className="px-4 py-3 border-t border-neutral-200 dark:border-neutral-300 bg-white text-neutral-500 dark:text-gray-400 dark:bg-neutral-200">
            <div className="flex flex-col justify-between text-xs sm:flex-row text-gray-600 dark:text-gray-400">
                <span className="flex items-center font-semibold tracking-wide uppercase">
                    Showing 1-20 of 731
                </span>
                <div className="flex mt-2 sm:mt-auto sm:justify-end">
                    <nav aria-label="Table navigation">
                        <ul className="inline-flex items-center">
                            <li>
                                <button
                                    className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none p-2 rounded-md text-gray-600 dark:text-gray-400 focus:outline-none border border-transparent opacity-50 cursor-not-allowed"
                                    disabled=""
                                    type="button"
                                    aria-label="Previous"
                                >
                                    <svg
                                        className="h-3 w-3"
                                        aria-hidden="true"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                            fillRule="evenodd"
                                        ></path>
                                    </svg>
                                </button>
                            </li>
                            <li>
                                <button
                                    className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-3 py-1 rounded-md text-xs text-white bg-emerald-500 border border-transparent active:bg-emerald-600 hover:bg-emerald-600"
                                    type="button"
                                >
                                    1
                                </button>
                            </li>
                            <li>
                                <button
                                    className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-3 py-1 rounded-md text-xs text-neutral-600 dark:text-neutral-400 focus:outline-none border border-transparent active:bg-transparent hover:bg-gray-100 dark:hover:bg-gray-500 dark:hover:text-neutral-400 dark:hover:bg-opacity-10"
                                    type="button"
                                >
                                    2
                                </button>
                            </li>
                            <li>
                                <button
                                    className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-3 py-1 rounded-md text-xs text-neutral-600 dark:text-neutral-400 focus:outline-none border border-transparent active:bg-transparent hover:bg-gray-100 dark:hover:bg-gray-500 dark:hover:text-neutral-400 dark:hover:bg-opacity-10"
                                    type="button"
                                >
                                    3
                                </button>
                            </li>
                            <li>
                                <button
                                    className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-3 py-1 rounded-md text-xs text-neutral-600 dark:text-neutral-400 focus:outline-none border border-transparent active:bg-transparent hover:bg-gray-100 dark:hover:bg-gray-500 dark:hover:text-neutral-400 dark:hover:bg-opacity-10"
                                    type="button"
                                >
                                    4
                                </button>
                            </li>
                            <li>
                                <button
                                    className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-3 py-1 rounded-md text-xs text-neutral-600 dark:text-neutral-400 focus:outline-none border border-transparent active:bg-transparent hover:bg-gray-100 dark:hover:bg-gray-500 dark:hover:text-neutral-400 dark:hover:bg-opacity-10"
                                    type="button"
                                >
                                    5
                                </button>
                            </li>
                            <li>
                                <span className="px-2 py-1">...</span>
                            </li>
                            <li>
                                <button
                                    className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-3 py-1 rounded-md text-xs text-neutral-600 dark:text-neutral-400 focus:outline-none border border-transparent active:bg-transparent hover:bg-gray-100 dark:hover:bg-gray-500 dark:hover:text-neutral-400 dark:hover:bg-opacity-10"
                                    type="button"
                                >
                                    10
                                </button>
                            </li>
                            <li>
                                <button
                                    className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none p-2 rounded-md text-gray-600 dark:text-gray-400 focus:outline-none border border-transparent active:bg-transparent hover:bg-gray-100 dark:hover:bg-gray-500 dark:hover:text-gray-300 dark:hover:bg-opacity-10"
                                    type="button"
                                    aria-label="Next"
                                >
                                    <svg
                                        className="h-3 w-3"
                                        aria-hidden="true"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                            clipRule="evenodd"
                                            fillRule="evenodd"
                                        ></path>
                                    </svg>
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}
