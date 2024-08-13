import React from 'react'
import DownloadFilter from '../../../components/Order/DownloadFilter'
import OrdersTableCRUD from '../../../components/Order/OrdersTableCRUD'

export default function Orders() {
    return (
        <div className='sm:container grid lg:px-6 sm:px-4 px-2 mx-auto'>
            <h1 className="my-6 text-lg font-bold text-neutral-600 dark:text-neutral-600">
                Orders
            </h1>

            <DownloadFilter />

            <OrdersTableCRUD />

        </div>
    )
}
