import React, { useState, useEffect } from "react";

// lodash
import { debounce } from "lodash";

export default function FilterProducts({ onSearchChange, selectedCategory, setSelectedCategory, priceRange, setPriceRange }) {

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
                            name="search"
                            placeholder="Search Product..."
                            onChange={(e) => handleSearchChange(e.target.value)}
                            value={searchKeyword}
                        />
                        <button
                            type="submit"
                            className="absolute right-0 top-0 mt-5 mr-1"
                        ></button>
                    </div>
                    <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                        <select
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-neutral-700 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-white focus:border-neutral-200 border-neutral-200 dark:border-neutral-200 dark:focus:border-neutral-400 dark:bg-neutral-200"
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                        >
                            <option value="All">All</option>
                            <option value="Vacum">Vacum</option>
                            <option value="TV">TV</option>
                            <option value="Smart Door">Smart Door</option>
                            <option value="CCTV">CCTV</option>
                            <option value="Smart Lamp">Smart Lamp</option>

                        </select>
                    </div>
                    <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                        <select
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-neutral-700 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-white focus:border-neutral-200 border-neutral-200 dark:border-neutral-200 dark:focus:border-neutral-400 dark:bg-neutral-200"
                            value={`${priceRange.min}-${priceRange.max}`}
                            onChange={(e) => {
                                const [min, max] = e.target.value.split('-');
                                setPriceRange({ min: parseInt(min), max: parseInt(max) });
                            }}
                        >
                            <option value="All">All</option>
                            <option value="100000-500000">Rp 100.000 - Rp 500.000</option>
                            <option value="500001-1000000">Rp 500.000 - Rp 1.000.000</option>
                            <option value="1000001-5000000">Rp 1.000.000 - Rp 5.000.000</option>
                            <option value="5000001-10000000">Rp 5.000.000 - Rp 10.000.000</option>
                            <option value="10000001-14490000">Rp 10.000.000 - Rp 14.490.000</option>
                            {/* Tambahkan pilihan rentang harga lainnya di sini */}
                        </select>
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
                                className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-neutral-700 border-gray-200 border dark:text-neutral-700 focus:outline-none rounded-lg border bg-gray-200 border-gray-200 px-4 w-full mr-3 flex items-center justify-center cursor-pointer h-12 px-4 md:py-1 py-2 h-12 text-sm dark:bg-neutral-200"
                                type="reset"
                            >
                                <span className="text-black dark:text-neutral-700">Reset</span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
