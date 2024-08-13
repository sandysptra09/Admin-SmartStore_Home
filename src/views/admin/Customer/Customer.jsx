import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';

import AddPrintView from '../../../components/Customer/AddPrintView'
import FilterCustomers from '../../../components/Customer/FilterCustomers'
import CustomersTableCRUD from '../../../components/Customer/CustomersTableCRUD'
import PaginationCustomer from '../../../components/Customer/PaginationCustomer';

export default function Customer() {

    // state initialization
    const [customers, setCustomers] = useState([]);
    const [searchKeyword, setSearchKeyword] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);

    // handle search keyword changes
    const handleSearchChange = (searchKeyword) => {
        setSearchKeyword(searchKeyword);
        setCurrentPage(1); // Reset to first page when filtering
    };

    // fetch customers data
    useEffect(() => {
        const fetchCustomers = async () => {
            try {
                const response = await axios.get("http://localhost:8080/api/smartstore/users");
                const formattedCustomers = response.data.rows.map(customer => {
                    const createdAt = new Date(customer.createdAt);
                    const formattedDate = `${getMonthName(createdAt.getMonth())} ${createdAt.getDate()}, ${createdAt.getFullYear()}`;
                    return { ...customer, createdAt: formattedDate };
                });
                setCustomers(formattedCustomers);
            } catch (error) {
                console.error("Error fetching data customer", error);
            }
        };

        fetchCustomers();
    }, [])

    const getMonthName = (monthIndex) => {
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return months[monthIndex];
    }

    // use useMemo to avoid repeated calculations on filter results
    const filteredCustomers = useMemo(() => {
        return customers.filter((customer) =>
            customer.username.toLowerCase().includes(searchKeyword.toLowerCase())
        );
    }, [customers, searchKeyword]);

    // calculate total pages based on the amount of filtered data
    const totalPages = Math.ceil(filteredCustomers.length / itemsPerPage);

    // change the current page
    const handleChangePage = (page) => {
        setCurrentPage(page);
    };

    // calculate the start and end indices of the data to be displayed on the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentCustomers = filteredCustomers.slice(startIndex, endIndex);

    return (
        <div className='sm:container grid lg:px-6 sm:px-4 px-2 mx-auto'>
            <h1 className="my-6 text-lg font-bold text-neutral-600 dark:text-neutral-600">
                Customers
            </h1>

            <AddPrintView data={customers} />

            <FilterCustomers onSearchChange={handleSearchChange} />

            <div className='w-full overflow-hidden border border-neutral-200 dark:border-neutral-300 rounded-lg mb-8 rounded-b-lg'>
                <CustomersTableCRUD customers={currentCustomers} setCustomers={setCustomers} />

                <PaginationCustomer currentPage={currentPage} totalPages={totalPages} onPageChange={handleChangePage} />
            </div>
        </div>
    )
}
