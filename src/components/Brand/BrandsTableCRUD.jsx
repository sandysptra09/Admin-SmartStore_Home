import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PaginationBrands from './PaginationBrands'

// import css
import './ComponentsBrands.css'
import { Link } from 'react-router-dom'

export default function BrandsTableCRUD({ brands, setBrands, setFilteredBrands }) {

    // delete brand
    const handleDelete = async (id) => {
        try {
            // retrieve token from localStorage
            const token = localStorage.getItem('token');

            await axios.delete(`http://localhost:8080/api/smartstore/brand/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const updateBrands = brands.filter(brand => brand.id !== id);
            setBrands(updateBrands);
            setFilteredBrands(updateBrands)
            console.log("Deletion successful");
        } catch (error) {
            console.error("Error deleting brand: ", error);
        }
    };

    return (

        <div className="w-full overflow-x-auto">
            <table className="w-full whitespace-nowrap">
                <thead className="text-xs font-semibold tracking-wide text-left text-neutral-700 uppercase border-b border-gray-200 dark:border-gray-700 bg-neutral-100 dark:text-neutral-700 dark:bg-neutral-200">
                    <tr>
                        <th className="px-4 py-2">
                            <input id="selectAll" name="selectAll" type="checkbox" />
                        </th>
                        <th className="px-4 py-2">Thumbnail</th>
                        <th className="px-4 py-2">Name</th>
                        <th className="px-4 py-2">Description</th>
                        <th className="px-4 py-2 text-right">ACTIONS</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-100 dark:divide-gray-700 dark:bg-white text-gray-800 dark:text-gray-400">
                    {brands.map((brand) => (
                        <tr key={brand.id}>
                            <td className="px-4 py-2">
                                <input
                                    id=""
                                    name="category"
                                    type="checkbox"
                                />
                            </td>
                            <td className="px-4 py-2">
                                <div className="relative rounded-full inline-block w-8 h-8 hidden mr-3 md:block bg-gray-50 p-1">
                                    <img
                                        className="object-cover w-full h-full rounded-full"
                                        src="https://res.cloudinary.com/ahossain/image/upload/v1708347307/category/device.png"
                                        loading="lazy"
                                    />
                                    <div
                                        className="absolute inset-0 rounded-full shadow-inner"
                                        aria-hidden="true"
                                    ></div>
                                </div>
                            </td>
                            <td className="px-4 py-2 font-medium text-sm">
                                <a className="text-neutral-700 font-bold" href="">
                                    {brand.brand_name}
                                </a>
                            </td>
                            <td className="px-4 py-2 text-sm font-semibold text-neutral-700">
                                PT BARDI Solusi Automation is a technology company...
                            </td>
                            <td className="px-4 py-2">
                                <div className="flex justify-end text-right">
                                    <Link
                                        className="p-2 cursor-pointer text-neutral-700 hover:text-emerald-600 focus:outline-none"
                                        to={`/brands/detail-brand/${brand.slug}`}
                                    >
                                        <p data-tip="true" data-for="view" className="text-xl">
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
                                    </Link>
                                    <Link to={`/brands/update-brand/${brand.id}`} className="p-2 cursor-pointer text-neutral-700 hover:text-emerald-600 focus:outline-none">
                                        <p data-tip="true" data-for="edit" className="text-xl">
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
                                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                                            </svg>
                                        </p>
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(brand.id)}
                                        className="p-2 cursor-pointer text-neutral-700 hover:text-red-600 focus:outline-none">
                                        <p data-tip="true" data-for="delete" className="text-xl">
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
                                                <polyline points="3 6 5 6 21 6"></polyline>
                                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                                <line x1="10" y1="11" x2="10" y2="17"></line>
                                                <line x1="14" y1="11" x2="14" y2="17"></line>
                                            </svg>
                                        </p>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
