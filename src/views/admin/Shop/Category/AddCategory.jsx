import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

// import sweetalert2
import Swal from 'sweetalert2';

export default function AddCategory() {

    // initate state
    const [categoryName, setCategoryName] = useState('');
    const [categorySlug, setCategorySlug] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false)


    // function for add category
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // show sweetalert confirmation before add a category
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: 'Do you want to add this category?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, add it!'
        });

        if (result.isConfirmed) {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.post('http://localhost:8080/api/smartstore/category', {
                    category_name: categoryName,
                    slug: categorySlug,
                }, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                
                console.log('Category added:', response.data);
                setCategoryName('');
                setCategorySlug('');

                // Tampilkan pesan SweetAlert untuk konfirmasi kategori telah ditambahkan
                Swal.fire(
                    'Added!',
                    'Your category has been added.',
                    'success'
                );

            } catch (error) {
                console.error('Error adding category:', error);
            } finally {
                setIsSubmitting(false);
            }
        }
    };


    return (
        <div className="sm:container grid lg:px-6 sm:px-4 px-2 mx-auto overflow-y-auto overflow-x-hidden">
            <h1 className="my-2 mt-6 text-lg font-bold text-neutral-600 dark:text-neutral-600">
                Add Category
            </h1>
            <p className="text-sm font-normal text-neutral-600 dark:text-neutral-600">
                Add your category  and necessary information from here
            </p>
            <hr className="mt-4" />

            {/* add Category */}
            <div className="">
                <form onSubmit={handleSubmit} className="">
                    <div className="px-6 pt-4 flex-grow w-full h-full max-h-full pb-40 md:pb-32 lg:pb-32 xl:pb-32">
                        {/* Category Name */}
                        <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                            <label className="block text-1sm text-neutral-800 dark:text-neutral-400 col-span-4 sm:col-span-2 font-medium text-sm">
                                Category Name
                            </label>
                            <div className="col-span-8 sm:col-span-4">
                                <input
                                    className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-neutral-700 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-white focus:border-neutral-200 border-neutral-200 dark:border-neutral-200 dark:focus:border-neutral-400 dark:bg-neutral-200"
                                    type="text"
                                    value={categoryName}
                                    onChange={(e) => setCategoryName(e.target.value)}
                                    name="category_name"
                                    placeholder="Category Name"
                                />
                            </div>
                        </div>

                        {/* Category Slug */}
                        <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                            <label className="block text-1sm text-neutral-800 dark:text-neutral-400 col-span-4 sm:col-span-2 font-medium text-sm">
                                Slug
                            </label>
                            <div className="col-span-8 sm:col-span-4">
                                <input
                                    className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-neutral-700 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-white focus:border-neutral-200 border-neutral-200 dark:border-neutral-200 dark:focus:border-neutral-400 dark:bg-neutral-200"
                                    type="text"
                                    value={categorySlug}
                                    onChange={(e) => setCategorySlug(e.target.value)}
                                    name="categpry_slug"
                                    placeholder="Category Slug"
                                />
                            </div>
                        </div>

                        {/* Category Images */}
                        <div className="grid grid-cols-6 gap-3 mt-8 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                            <label className="block text-1sm text-neutral-800 dark:text-neutral-400 col-span-4 sm:col-span-2 font-medium text-sm">
                                Category Images
                            </label>
                            <div className="col-span-8 sm:col-span-4">
                                <div className="w-full text-center">
                                    <div className="border-2 border-neutral-300 dark:border-neutral-300 border-dashed rounded-md cursor-pointer bg-white px-6 pt-5 pb-6">
                                        <input
                                            className="hidden"
                                            accept="image/*,.jpeg,.jpg,.png,.webp"
                                            multiple=""
                                            type="file"
                                        />
                                        <span className="mx-auto flex justify-center">
                                            <svg
                                                stroke="currentColor"
                                                fill="none"
                                                strokeWidth="2"
                                                viewBox="0 0 24 24"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="text-3xl text-emerald-500"
                                                height="1em"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <polyline points="16 16 12 12 8 16"></polyline>
                                                <line x1="12" y1="12" x2="12" y2="21"></line>
                                                <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path>
                                                <polyline points="16 16 12 12 8 16"></polyline>
                                            </svg>
                                        </span>
                                        <p className="text-sm mt-2 text-neutral-700">
                                            Drag your images here
                                        </p>
                                        <em className="text-xs text-neutral-400">
                                            (Only *.jpeg, *.webp and *.png images will be accepted)
                                        </em>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="px-6 grid gap-4 lg:gap-6 xl:gap-6 dark:text-gray-300">
                        <div className="flex justify-between">
                            <Link to='/categories'
                                className="no-underline inline-flex items-center justify-center leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-gray-600 border-gray-200 border dark:text-red-400 rounded-lg border bg-neutral-200 border-gray-200 w-full mr-3 flex items-center justify-center cursor-pointer h-12 bg-white text-red-500 hover:bg-red-50 hover:border-red-100 hover:text-red-600 dark:bg-white dark:border-neutral-300 dark:text-gray-500 dark:hover:bg-red-100 dark:hover:text-red-400"
                                type="button"
                            >
                                Cancel
                            </Link>
                            <button
                                className="inline-flex items-center justify-center leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-emerald-500 border border-transparent active:bg-emerald-600 hover:bg-emerald-600 w-full h-12"
                                type="submit"
                                disabled={isSubmitting}
                            >
                                <span>Add Category</span>
                            </button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}
