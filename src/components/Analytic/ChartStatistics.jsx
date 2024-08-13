import React, { Fragment, useState, useEffect } from 'react'

// import from headless ui
import { Tab } from '@headlessui/react';

// import css
import './ChartStatistics.css';

// import sub-component
import VerticalBar from './sub-components/VerticalBar';
import Pie from './sub-components/Pie';
import VerticalBarOrders from './sub-components/VerticalBarOrders';

export default function ChartStatistics() {

    return (
        <div className='grid gap-4 md:grid-cols-2 my-8'>
            <div className='min-w-0 p-4 bg-white rounded-lg shadow-xs dark:bg-white'>
                <p class="mb-4 font-semibold text-neutral-800 dark:text-neutral-600">Monthly Sales</p>
                <Tab.Group>
                    <Tab.List className='text-sm font-semibold text-neutral-600'>
                        <Tab as={Fragment}>
                            {({ selected }) => (
                                <button className={selected ? 'text-emerald-500 mr-4 focus:outline-none' : 'bg-white mr-4'}>
                                    Sales
                                </button>
                            )}
                        </Tab>
                        <Tab as={Fragment}>
                            {({ selected }) => (
                                <button className={selected ? 'text-orange-500 focus:outline-none' : 'bg-white'}>
                                    Orders
                                </button>
                            )}
                        </Tab>
                    </Tab.List>
                    <hr className="my-2" />
                    <Tab.Panels>
                        <Tab.Panel>
                            <VerticalBar />
                        </Tab.Panel>
                        <Tab.Panel>
                            <VerticalBarOrders />
                        </Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
            </div>

            <div className='min-w-0 p-4 bg-white rounded-lg shadow-xs dark:bg-white'>
                <p class="mb-4 font-semibold text-neutral-800 dark:text-neutral-600">Best Selling Products By Category</p>

                <div className='mt-10'>
                    <Pie />
                </div>
            </div>
        </div>
    )
}
