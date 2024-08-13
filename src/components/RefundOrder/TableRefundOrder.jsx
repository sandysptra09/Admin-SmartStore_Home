import React from 'react'
import PaginationOrder from '../Order/PaginationOrder'

export default function TableRefundOrder() {
    return (
        <div className="w-full overflow-hidden border border-neutral-200 dark:border-neutral-300 rounded-lg mb-8">
            <div className="w-full overflow-x-auto custom-scrollbar">
                <table className="w-full whitespace-nowrap">
                    <thead className="text-xs font-semibold tracking-wide text-left text-neutral-700 uppercase border-b border-gray-200 dark:border-gray-700 bg-neutral-100 dark:text-neutral-700 dark:bg-neutral-200">
                        <tr>
                            <th className="px-4 py-2">INVOICE NO</th>
                            <th className="px-4 py-2">ORDER TIME</th>
                            <th className="px-4 py-2">Customer Name</th>
                            <th className="px-4 py-2">METHOD</th>
                            <th className="px-4 py-2">AMOUNT</th>
                            <th className="px-4 py-2">STATUS</th>
                            <th className="px-4 py-2 text-right">INVOICE</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-white text-gray-800 dark:text-gray-400">
                        <tr>
                            <td className="px-4 py-2">
                                <span className="font-semibold text-neutral-700 uppercase text-xs">10731</span>
                            </td>
                            <td className="px-4 py-2 font-semibold text-neutral-500">
                                <span className="text-sm">Feb 23, 2024 11:53 AM</span>
                            </td>
                            <td className="px-4 py-2 text-xs font-semibold text-neutral-500">
                                <span className="text-sm">Sanchie</span>{" "}
                            </td>
                            <td className="px-4 py-2">
                                <span className="text-sm font-bold text-neutral-700">GoPay</span>
                            </td>
                            <td className="px-4 py-2">
                                <span className="text-sm font-bold text-neutral-700">Rp. 5.999.000</span>
                            </td>
                            <td className="px-4 py-2 text-xs ">
                                <span>
                                    <span className="inline-flex px-2 text-xs font-medium leading-5 rounded-full text-red-500 bg-red-100 dark:text-red-500 dark:bg-red-100">Cancel</span>
                                </span>
                            </td>
                            <td className="px-4 py-2 text-right flex justify-end">
                                <div className="flex justify-between items-center">
                                    <button
                                        type="button"
                                        className="ml-2 p-2 cursor-pointer text-gray-500 hover:text-emerald-600 focus:outline-none"
                                    >
                                        <p data-tip="true" data-for="receipt" className="text-xl text-neutral-500">
                                            <svg
                                                stroke="currentColor"
                                                fill="none"
                                                strokeWidth="2"
                                                viewBox="0 0 24 24"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                height="1em"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <polyline points="6 9 6 2 18 2 18 9"></polyline>
                                                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                                                <rect x="6" y="14" width="12" height="8"></rect>
                                            </svg>
                                        </p>
                                    </button>
                                    <span className="p-2 cursor-pointer text-gray-400 hover:text-emerald-600">
                                        <a href="">
                                            <p data-tip="true" data-for="view" className="text-xl hover:text-emerald-600 text-neutral-500">
                                                <svg
                                                    stroke="currentColor"
                                                    fill="none"
                                                    strokeWidth="2"
                                                    viewBox="0 0 24 24"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    height="1em"
                                                    width="1em"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <circle cx="11" cy="11" r="8"></circle>
                                                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                                    <line x1="11" y1="8" x2="11" y2="14"></line>
                                                    <line x1="8" y1="11" x2="14" y2="11"></line>
                                                </svg>
                                            </p>
                                        </a>
                                    </span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2">
                                <span className="font-semibold text-neutral-700 uppercase text-xs">10732</span>
                            </td>
                            <td className="px-4 py-2 font-semibold text-neutral-500">
                                <span className="text-sm">Mar 06, 2024 21:09 PM</span>
                            </td>
                            <td className="px-4 py-2 text-xs font-semibold text-neutral-500">
                                <span className="text-sm">Ryuuchan</span>{" "}
                            </td>
                            <td className="px-4 py-2">
                                <span className="text-sm font-bold text-neutral-700">Bank Transfer</span>
                            </td>
                            <td className="px-4 py-2">
                                <span className="text-sm font-bold text-neutral-700">Rp. 350.0000</span>
                            </td>
                            <td className="px-4 py-2 text-xs ">
                                <span>
                                    <span className="inline-flex px-2 text-xs font-medium leading-5 rounded-full text-red-500 bg-red-100 dark:text-red-500 dark:bg-red-100">Cancel</span>
                                </span>
                            </td>
                            <td className="px-4 py-2 text-right flex justify-end">
                                <div className="flex justify-between items-center">
                                    <button
                                        type="button"
                                        className="ml-2 p-2 cursor-pointer text-gray-500 hover:text-emerald-600 focus:outline-none"
                                    >
                                        <p data-tip="true" data-for="receipt" className="text-xl text-neutral-500">
                                            <svg
                                                stroke="currentColor"
                                                fill="none"
                                                strokeWidth="2"
                                                viewBox="0 0 24 24"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                height="1em"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <polyline points="6 9 6 2 18 2 18 9"></polyline>
                                                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                                                <rect x="6" y="14" width="12" height="8"></rect>
                                            </svg>
                                        </p>
                                    </button>
                                    <span className="p-2 cursor-pointer text-gray-400 hover:text-emerald-600">
                                        <a href="">
                                            <p data-tip="true" data-for="view" className="text-xl hover:text-emerald-600 text-neutral-500">
                                                <svg
                                                    stroke="currentColor"
                                                    fill="none"
                                                    strokeWidth="2"
                                                    viewBox="0 0 24 24"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    height="1em"
                                                    width="1em"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <circle cx="11" cy="11" r="8"></circle>
                                                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                                    <line x1="11" y1="8" x2="11" y2="14"></line>
                                                    <line x1="8" y1="11" x2="14" y2="11"></line>
                                                </svg>
                                            </p>
                                        </a>
                                    </span>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <PaginationOrder />
        </div>
    )
}
