import React, { useState, useEffect } from 'react'

import { debounce } from 'lodash'

export default function FilterCategories({ onSearchChange }) {

    // initiate state
    const [searchKeyword, setSearchKeyword] = useState("");

    const handleSearchChange = debounce((value) => {
        setSearchKeyword(value);
        onSearchChange(value);
    }, 300);

    useEffect(() => {
        return () => {
            handleSearchChange.cancel();
        };
    }, []);

    return (
        <div className="min-w-0 rounded-lg overflow-hidden bg-white dark:bg-white min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 rounded-t-lg rounded-0 mb-4">
            <div className="p-4">
                <form className="py-3 grid gap-4 lg:gap-6 xl:gap-6 md:flex xl:flex">
                    <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                        <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-neutral-700 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-white focus:border-neutral-200 border-neutral-200 dark:border-neutral-200 dark:focus:border-neutral-400 dark:bg-neutral-200"
                            type="search"
                            placeholder="Search by Category name"
                            onChange={(e) => handleSearchChange(e.target.value)}
                            value={searchKeyword}
                        />
                    </div>
                    <div className="flex items-center gap-2 flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                        <div className="w-full mx-1">
                            <button
                                className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-emerald-500 border border-transparent active:bg-emerald-600 hover:bg-emerald-600 h-12 w-full bg-emerald-700"
                                type="submit"
                            >
                                Filter
                            </button>
                        </div>
                        <div className="w-full mx-1">
                            <button
                                className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm V border dark:text-neutral-700 focus:outline-none rounded-lg border bg-gray-200 border-gray-200 px-4 w-full mr-3 flex items-center justify-center cursor-pointer h-12 px-4 md:py-1 py-2 h-12 text-sm dark:bg-neutral-200"
                                type="reset"
                            >
                                <span className="text-black dark:text-neutral-700">Reset</span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    )
}
