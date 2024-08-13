import React from 'react'
import TableRefundOrder from '../../../components/RefundOrder/TableRefundOrder'

export default function RefundOrders() {
    return (
        <div className='sm:container grid lg:px-6 sm:px-4 px-2 mx-auto'>
            <h1 className="my-6 text-lg font-bold text-neutral-600 dark:text-neutral-600">
                Refund Orders
            </h1>

            <TableRefundOrder />
        </div>
    )
}
