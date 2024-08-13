import React from "react";

// import icon from react-icons
import { BsBox } from "react-icons/bs";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineLocalShipping, MdOutlineDone } from "react-icons/md";


export default function Statistics({ totalProducts }) {
    return (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">

            {/* Total Products */}
            <div className="min-w-0 rounded-lg overflow-hidden bg-white dark:bg-white flex h-full">
                <div className="p-4 flex items-center border border-neutral-200 dark:border-neutral-300 w-full rounded-lg">
                    <div className="flex items-center justify-center p-3 rounded-full h-12 w-12 text-center mr-4 text-lg text-blue-600 dark:text-blue-500 bg-blue-100 dark:bg-blue-100">
                        <BsBox />
                    </div>
                    <div>
                        <h6 className="text-sm mb-1 font-medium text-neutral-500 dark:text-neutral-500">
                            <span>Total Product</span>
                        </h6>
                        <p className="text-2xl font-bold leading-none text-gray-600 dark:text-neutral-600">
                            {totalProducts}
                        </p>
                    </div>
                </div>
            </div>

            {/* Total Orders */}
            <div className="min-w-0 rounded-lg overflow-hidden bg-white dark:bg-white flex h-full">
                <div className="p-4 flex items-center border border-neutral-200 dark:border-neutral-300 w-full rounded-lg">
                    <div className="flex items-center justify-center p-3 rounded-full h-12 w-12 text-center mr-4 text-lg text-orange-600 dark:text-orange-500 bg-orange-100 dark:bg-orange-100">
                        <IoCartOutline fontSize={22} />
                    </div>
                    <div>
                        <h6 className="text-sm mb-1 font-medium text-neutral-500 dark:text-neutral-500">
                            <span>Total Order</span>{" "}
                        </h6>
                        <p className="text-2xl font-bold leading-none text-gray-600 dark:text-neutral-600">
                            740
                        </p>
                    </div>
                </div>
            </div>

            {/* Orders Processing */}
            <div className="min-w-0 rounded-lg overflow-hidden bg-white dark:bg-white flex h-full">
                <div className="p-4 flex items-center border border-neutral-200 dark:border-neutral-300 w-full rounded-lg">
                    <div className="flex items-center justify-center p-3 rounded-full h-12 w-12 text-center mr-4 text-lg text-teal-600 dark:text-teal-500 bg-teal-100 dark:bg-teal-100">
                        <MdOutlineLocalShipping fontSize={22} />
                    </div>
                    <div>
                        <h6 className="text-sm mb-1 font-medium text-neutral-500 dark:text-neutral-500">
                            <span>Orders Processing</span>
                        </h6>
                        <p className="text-2xl font-bold leading-none text-gray-600 dark:text-neutral-600">
                            84
                        </p>
                    </div>
                </div>
            </div>

            {/* Orders Delivered */}
            <div className="min-w-0 rounded-lg overflow-hidden bg-white dark:bg-white flex h-full">
                <div className="p-4 flex items-center border border-neutral-200 dark:border-neutral-300 w-full rounded-lg">
                    <div className="flex items-center justify-center p-3 rounded-full h-12 w-12 text-center mr-4 text-lg text-teal-600 dark:text-teal-500 bg-teal-100 dark:bg-teal-100">
                        <MdOutlineDone fontSize={22} />
                    </div>
                    <div>
                        <h6 className="text-sm mb-1 font-medium text-neutral-500 dark:text-neutral-500">
                            <span>Orders Delivered</span>
                        </h6>
                        <p className="text-2xl font-bold leading-none text-gray-600 dark:text-neutral-600">
                            84
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
