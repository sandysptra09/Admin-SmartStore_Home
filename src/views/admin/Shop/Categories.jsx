import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';

import AddPrintView from '../../../components/Category/AddPrintView'
import FilterCategories from '../../../components/Category/FilterCategories'
import CategoriesTablesCRUD from '../../../components/Category/CategoriesTablesCRUD'
import PaginationCategories from '../../../components/Category/PaginationCategories';

export default function Categories() {

    // State initialization
    const [categories, setCategories] = useState([]);
    const [searchKeyword, setSearchKeyword] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);

    // handle search keyword changes
    const handleSearchChange = (searchKeyword) => {
        setSearchKeyword(searchKeyword);

        // reset to first page when filtering
        setCurrentPage(1);
    };

    // fetch categories data
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get("http://localhost:8080/api/smartstore/categories");
                setCategories(response.data.data.rows);
            } catch (error) {
                console.error("Error fetching categories: ", error);
            }
        };

        fetchCategories();
    }, []);

    // use useMemo to avoid repeated calculations on filter results
    const filteredCategories = useMemo(() => {
        return categories.filter((category) =>
            category.category_name.toLowerCase().includes(searchKeyword.toLowerCase())
        );
    }, [categories, searchKeyword]);

    // calculate total pages based on the amount of filtered data
    const totalPages = Math.ceil(filteredCategories.length / itemsPerPage);

    // change the current page
    const handleChangePage = (page) => {
        setCurrentPage(page);
    };

    // calculate the start and end indices of the data to be displayed on the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentCategories = filteredCategories.slice(startIndex, endIndex);

    return (
        <div className='sm:container grid lg:px-6 sm:px-4 px-2 mx-auto'>
            <h1 className="my-6 text-lg font-bold text-neutral-600 dark:text-neutral-600">
                Categories
            </h1>

            <AddPrintView data={categories} />

            <FilterCategories onSearchChange={handleSearchChange} />

            <div className='w-full overflow-hidden border border-neutral-200 dark:border-neutral-300 rounded-lg mb-8 rounded-b-lg'>
                <CategoriesTablesCRUD categories={currentCategories} setCategories={setCategories} />

                <PaginationCategories currentPage={currentPage} totalPages={totalPages} onPageChange={handleChangePage} />
            </div>
        </div>
    )
}
