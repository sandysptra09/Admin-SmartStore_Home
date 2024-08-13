import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';

// Import components
import AddPrintView from '../../../components/Brand/AddPrintView';
import FilterBrands from '../../../components/Brand/FilterBrands';
import BrandsTableCRUD from '../../../components/Brand/BrandsTableCRUD';
import PaginationBrands from '../../../components/Brand/PaginationBrands';

export default function Brands() {
    // state initialization
    const [brands, setBrands] = useState([]);
    const [searchKeyword, setSearchKeyword] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);

    // handle search keyword changes
    const handleSearchChange = (searchKeyword) => {
        setSearchKeyword(searchKeyword);

        // reset to first page when filtering
        setCurrentPage(1);
    };

    // fetch brands data
    useEffect(() => {
        const fetchBrands = async () => {
            try {
                const response = await axios.get("http://localhost:8080/api/smartstore/brands");
                setBrands(response.data.data.rows);
            } catch (error) {
                console.error("Error fetching brands: ", error);
            }
        };

        fetchBrands();
    }, []);

    // use useMemo to avoid repeated calculations on filter results
    const filteredBrands = useMemo(() => {
        return brands.filter((brand) =>
            brand.brand_name.toLowerCase().includes(searchKeyword.toLowerCase())
        );
    }, [brands, searchKeyword]);

    // calculate total pages based on the amount of filtered data
    const totalPages = Math.ceil(filteredBrands.length / itemsPerPage);

    // change the current page
    const handleChangePage = (page) => {
        setCurrentPage(page);
    };

    // calculate the start and end indices of the data to be displayed on the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentBrands = filteredBrands.slice(startIndex, endIndex);

    return (
        <div className='sm:container grid lg:px-6 sm:px-4 px-2 mx-auto'>
            <h1 className="my-6 text-lg font-bold text-neutral-600 dark:text-neutral-600">
                Brands
            </h1>

            <AddPrintView data={brands} />

            <FilterBrands onSearchChange={handleSearchChange} />

            <div className='w-full overflow-hidden border border-neutral-200 dark:border-neutral-300 rounded-lg mb-8 rounded-b-lg'>
                <BrandsTableCRUD brands={currentBrands} setBrands={setBrands} />

                <PaginationBrands currentPage={currentPage} totalPages={totalPages} onPageChange={handleChangePage} />
            </div>
        </div>
    );
}
