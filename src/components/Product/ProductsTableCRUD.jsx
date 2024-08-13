import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PaginationProducts from './PaginationProducts'

import './ComponentsProducts.css'
import { Link } from 'react-router-dom'

// formatter rupiah
function formatRupiah(angka) {
    const formatter = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    });

    return formatter.format(angka);
}

// slice word
function limitWords(text, limit) {
    const words = text.split(' ');
    if (words.length > limit) {
        return words.slice(0, limit).join(' ') + '...';
    }
    return text;
}

export default function ProductsTableCRUD({ products, setProducts, setFilteredProducts }) {

    // delete product by id
    const handleDelete = async (id) => {
        try {
            // retrieve token from localStorage
            const token = localStorage.getItem('token');

            await axios.delete(`http://localhost:8080/api/smartstore/product/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const updatedProducts = products.filter(product => product.id !== id);
            setProducts(updatedProducts);
            setFilteredProducts(updatedProducts);
            console.log("Deletion successful");

        } catch (error) {
            console.error("Error deleting product: ", error);
        }
    }

    return (

        <div className='w-full overflow-x-auto custom-scrollbar'>
            <table className='w-full whitespace-nowrap'>
                <thead className='text-xs font-semibold tracking-wide text-left text-neutral-700 uppercase border-b border-gray-200 dark:border-gray-700 bg-neutral-100 dark:text-neutral-700 dark:bg-neutral-200'>
                    <tr>
                        <td className='px-4 py-2'>
                            <input id="selectAll" name="selectAll" type="checkbox" />
                        </td>
                        <td className="px-4 py-2">Product Name</td>
                        <td className="px-4 py-2">Category</td>
                        <td className="px-4 py-2">Price</td>
                        <td className="px-4 py-2">Description</td>
                        <td className="px-4 py-2">Stock</td>
                        <td className="px-4 py-2">Status</td>
                        <td className="px-4 py-2 text-center">View</td>
                        <td className="px-4 py-2 text-center">Published</td>
                        <td className="px-4 py-2 text-right">Actions</td>
                    </tr>
                </thead>
                <tbody className='bg-white divide-y divide-gray-100 dark:divide-gray-700 dark:bg-white text-gray-800 dark:text-gray-400'>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td className="px-4 py-2">
                                <input id={product.id} name="Test" type="checkbox" />
                            </td>
                            <td className='px-4 py-2'>
                                <div className='flex items-center'>
                                    <div className='relative rounded-full inline-block w-8 h-8'>
                                        <img className="object-cover w-full h-full rounded-full" src="https://res.cloudinary.com/ahossain/image/upload/v1655097002/placeholder_kvepfp.png" alt="product" loading="lazy" />
                                        <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                                    </div>
                                    <div>
                                        <h2 className="text-sm font-bold text-neutral-700">{limitWords(product.product_name, 3)}</h2>
                                    </div>
                                    <div>
                                        <h2 className='text-sm font-medium '></h2>
                                    </div>
                                </div>
                            </td>
                            <td className='px-4 py-2'>
                                <span className="text-sm font-medium text-neutral-700">
                                    {product.Category ? product.Category.category_name : 'Unknown Category'}
                                </span>
                            </td>
                            <td className='px-4 py-2'>
                                <span className="text-sm text-neutral-700 font-bold">{formatRupiah(product.price)}</span>
                            </td>
                            <td className='px-4 py-2'>
                                <span className="text-sm text-neutral-700 font-semibold truncate overflow-ellipsis ">{limitWords(product.short_description, 3)}</span>
                            </td>
                            <td className='px-4 py-2'>
                                <span className="text-sm text-neutral-700">{product.stock}</span>
                            </td>
                            <td className='px-4 py-2'>
                                <span className={`inline-flex px-2 text-xs font-medium leading-5 rounded-full text-${product.status === 'available' ? 'green' : 'red'}-500 bg-${product.status === 'available' ? 'green' : 'red'}-100 capitalize`}>
                                    {product.status}
                                </span>
                            </td>
                            <td className="px-4 py-2">
                                <Link to={`/products/detail-product/${product.slug}`} className="flex justify-center text-neutral-700 hover:text-emerald-600">
                                    <p data-tip="true" data-for="view" className="text-xl">
                                        <svg
                                            className="stroke-current"
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
                            </td>
                            <td className="px-4 py-2 text-center">
                                <div className="react-switch md:ml-0" style={{ position: "relative", display: "inline-block", textAlign: "left", opacity: 1, direction: "ltr", borderRadius: "7.5px", transition: "opacity 0.25s ease 0s", touchAction: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", userSelect: "none" }}>
                                    <div className="react-switch-bg" style={{ height: "15px", width: "30px", margin: "0px", position: "relative", background: product.status === 'unavailable' ? "rgb(229, 62, 62)" : "rgb(52, 211, 153)", borderRadius: "7.5px", cursor: "pointer", transition: "background 0.25s ease 0s" }}>
                                        <div style={{ height: "15px", width: "17px", position: "relative", opacity: 0, pointerEvents: "none", transition: "opacity 0.25s ease 0s" }}>
                                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "73px", height: "100%", fontSize: "14px", color: "white", paddingLeft: "20px", paddingTop: "1px" }}></div>
                                        </div>
                                        <div style={{ height: "15px", width: "17px", position: "absolute", opacity: 1, right: "0px", top: "0px", pointerEvents: "none", transition: "opacity 0.25s ease 0s" }}>
                                            <div style={{ display: "flex", alignItems: "center", height: "100%", width: "120px", fontSize: "14px", color: "white", paddingRight: "22px", paddingTop: "1px" }}></div>
                                        </div>
                                    </div>
                                    <div className="react-switch-handle" style={{ height: "13px", width: "13px", background: "rgb(255, 255, 255)", display: "inline-block", cursor: "pointer", borderRadius: "50%", position: "absolute", transform: "translateX(1px)", top: "1px", outline: "0px", border: "0px", transition: "backgroundColor 0.25s ease 0s, transform 0.25s ease 0s, boxShadow 0.15s ease 0s" }}></div>
                                    <input type="checkbox" role="switch" aria-checked="false" checked={product.status === 'available'} style={{ border: "0px", clip: "rect(0px, 0px, 0px, 0px)", height: "1px", margin: "-1px", overflow: "hidden", padding: "0px", position: "absolute", width: "1px" }} />
                                </div>
                            </td>
                            <td className="px-4 py-2">
                                <div className="flex justify-end text-right">
                                    <Link to={`/products/update-product/${product.slug}`} className="p-2 cursor-pointer text-neutral-700 hover:text-emerald-600 focus:outline-none">
                                        <p data-tip="true" data-for="edit" className="text-xl">
                                            <svg
                                                className="stroke-current"
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
                                        onClick={() => handleDelete(product.id)}
                                        className="p-2 cursor-pointer text-neutral-700 hover:text-red-600 focus:outline-none">
                                        <p data-tip="true" data-for="delete" className="text-xl">
                                            <svg
                                                className="stroke-current"
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
