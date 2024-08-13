import React from 'react'

export default function PaginationCategories({ currentPage, totalPages, onPageChange }) {

    // create array of pages from 1 to totalPages
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

    return (
        <div className="px-4 py-3 border-t border-neutral-200 dark:border-neutral-300 bg-white text-neutral-500 dark:text-gray-400 dark:bg-neutral-200">
            <div className="flex flex-col justify-between text-xs sm:flex-row text-gray-600 dark:text-gray-400">
                <span className="flex items-center font-semibold tracking-wide uppercase dark:text-neutral-500">
                    Showing {currentPage} of {totalPages}
                </span>
                <div className="flex mt-2 sm:mt-auto sm:justify-end">
                    <nav aria-label="Product Page Navigation">
                        <ul className="inline-flex items-center">
                            {pages.map((page) => (
                                <li key={page}>
                                    <button
                                        className={`align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-3 py-1 rounded-md text-xs text-gray-600 dark:text-neutral-500 focus:outline-none border border-transparent ${currentPage === page ? 'bg-emerald-600 dark:text-white' : 'hover:bg-gray-100 dark:hover:bg-emerald-600 dark:hover:text-white'}`}
                                        type="button"
                                        onClick={() => onPageChange(page)}
                                    >
                                        {page}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}
