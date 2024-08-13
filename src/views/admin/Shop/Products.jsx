import React, { useState, useEffect, useMemo } from 'react'
import axios from 'axios';

// import from component
import AddPrintView from '../../../components/Product/AddPrintView';
import FilterProducts from '../../../components/Product/FilterProducts';
import ProductsTableCRUD from '../../../components/Product/ProductsTableCRUD';
import PaginationProducts from '../../../components/Product/PaginationProducts';

export default function Products() {

    // initiate state
    const [products, setProducts] = useState([]);
    const [searchKeyword, setSearchKeyword] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);

    const [selectedCategory, setSelectedCategory] = useState('All');
    const [priceRange, setPriceRange] = useState({ min: 0, max: 14490000 });

    // handle price range change
    const handlePriceRangeChange = (min, max) => {
        // set the new price range
        setPriceRange({ min, max });

        // reset to first page when filtering
        setCurrentPage(1);
    };

    // handle changes to the search
    const handleSearchChange = (searchKeyword) => {
        setSearchKeyword(searchKeyword);

        // reset to first page when filtering
        setCurrentPage(1);
    };

    // fetch data products
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get("http://localhost:8080/api/smartstore/products");
                setProducts(response.data.data.rows);
            } catch (error) {
                console.error("Error fetching products: ", error);
            }
        };

        fetchProducts();
    }, []);

    // use useMemo to avoid repeated calculations on filter results
    const filteredProducts = useMemo(() => {
        return products.filter((product) =>
            (selectedCategory === 'All' || product.Category.category_name === selectedCategory) &&
            product.product_name.toLowerCase().includes(searchKeyword.toLowerCase()) &&
            product.price >= priceRange.min && product.price <= priceRange.max
        );
    }, [products, searchKeyword, selectedCategory, priceRange]);

    // calculates total pages based on the amount of filtered data
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

    // change the current page
    const handleChangePage = (page) => {
        setCurrentPage(page);
    }

    // calculate the start and end indices of the data to be displayed on the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentProducts = filteredProducts.slice(startIndex, endIndex);

    return (
        <div className='sm:container grid lg:px-6 sm:px-4 px-2 mx-auto'>
            <h1 className="my-6 text-lg font-bold text-neutral-600 dark:text-neutral-600">
                Products
            </h1>

            <AddPrintView data={products} />

            <FilterProducts onSearchChange={handleSearchChange} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} priceRange={priceRange} setPriceRange={setPriceRange} />

            <div className='w-full overflow-hidden border border-neutral-200 dark:border-neutral-300 rounded-lg mb-8 rounded-b-lg'>
                <ProductsTableCRUD products={currentProducts} setProducts={setProducts} />

                <PaginationProducts currentPage={currentPage} totalPages={totalPages} onPageChange={handleChangePage} />
            </div>


        </div>
    );
}
