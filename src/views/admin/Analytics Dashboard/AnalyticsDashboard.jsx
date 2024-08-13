import React, { useState, useEffect } from 'react'
import axios from 'axios'

// import css

// import from components order
import './AnalyticsDashboard.css'


import Statistics from '../../../components/Analytic/Statistics'
import SalesStatistics from '../../../components/Analytic/SalesStatistics'
import ChartStatistics from '../../../components/Analytic/ChartStatistics'
import OrdersTableCRUD from '../../../components/Order/OrdersTableCRUD'

export default function AnalyticsDashboard() {

    // initiate state
    const [totalProducts, setTotalProducts] = useState(0);

    // fetch data products
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get("http://localhost:8080/api/smartstore/products");
                setTotalProducts(response.data.data.count);
            } catch (error) {
                console.error("Error fetching products: ", error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className='sm:container grid lg:px-6 sm:px-4 px-2 mx-auto overflow-y-auto overflow-x-hidden'>
            <h1 className="my-6 text-lg font-bold text-neutral-600 dark:text-neutral-600">
                Dashboard Overview
            </h1>

            <SalesStatistics />

            <Statistics totalProducts={totalProducts} />

            <ChartStatistics />

            {/* import from components order */}
            <OrdersTableCRUD />
        </div>
    )
}   