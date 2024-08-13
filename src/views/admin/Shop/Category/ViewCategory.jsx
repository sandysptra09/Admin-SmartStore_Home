import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';

export default function ViewCategory() {

    // initiate state
    const [category, setCategory] = useState(null);
    const { slug } = useParams();

    useEffect(() => {
        const fetchCategoryBySlug = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/smartstore/category-by-slug/${slug}`);
                setCategory(response.data);
            } catch (error) {
                console.error('Error fetching detail category by slug: ', error);
            }
        };

        fetchCategoryBySlug();
    }, [slug]);

    return (
        <div className="sm:container grid lg:px-6 sm:px-4 px-2 mx-auto overflow-y-auto overflow-x-hidden">
            <h1 className="my-2 mt-4 text-lg font-bold text-neutral-600 dark:text-neutral-600">
                Category Details
            </h1>
            <hr className="mt-2 mb-4" />

            {
                category && (

                    <div className="flex flex-col lg:flex-row md:flex-row w-full overflow-hidden">
                        <div className="flex-shrink-0 flex items-center justify-center h-auto">
                            <img
                                src="https://via.placeholder.com/300"
                                alt="Category"
                                className="mx-auto rounded-lg"
                            />
                        </div>
                        <div className="w-full flex flex-col p-5 md:p-8 text-left">
                            <div className="">
                                <h2 className="text-2xl font-semibold text-neutral-600 dark:text-neutral-600">
                                    {category.category_name}
                                </h2>
                                <p className="mt-2 text-sm mb-1 font-medium text-neutral-500 dark:text-neutral-500">
                                    Efficient and smart robotic vacuum cleaner for hassle-free
                                    cleaning
                                </p>
                            </div>

                        </div>
                    </div>
                )
            }
        </div>
    )
}
