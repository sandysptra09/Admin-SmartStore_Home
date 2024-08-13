import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./ViewProduct.css";


// formatter rupiah
function formatRupiah(angka) {
    const formatter = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    });

    return formatter.format(angka);
}

export default function ViewProduct() {

    // initiate state
    const [product, setProduct] = useState(null);
    const { slug } = useParams();

    useEffect(() => {
        const fetchProductBySlug = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/smartstore/product-by-slug/${slug}`);
                setProduct(response.data.data);
                console.log("Successfully get detail product by slug.", response.data);
            } catch (error) {
                console.error('Error fetching detail product by slug', error);
            }
        };

        fetchProductBySlug();
    }, [slug])

    return (
        <div className="sm:container grid lg:px-6 sm:px-4 px-2 mx-auto overflow-y-auto overflow-x-hidden">
            <h1 className="my-2 mt-4 text-lg font-bold text-neutral-600 dark:text-neutral-600">
                Product Details
            </h1>
            <hr className="mt-2 mb-4" />

            {
                product && (
                    <div>
                        <div className="flex flex-col lg:flex-row md:flex-row w-full overflow-hidden">
                            <div className="flex-shrink-0 flex items-center justify-center h-auto">
                                <img
                                    src="https://via.placeholder.com/300"
                                    alt="Product"
                                    className="mx-auto rounded-lg"
                                />
                            </div>
                            <div className="w-full flex flex-col p-5 md:p-8 text-left">
                                <div className="">
                                    <h2 className="text-2xl font-semibold text-neutral-600 dark:text-neutral-600">
                                        {product.product_name}
                                    </h2>
                                    <p className="mt-2 text-sm mb-1 font-medium text-neutral-500 dark:text-neutral-500">
                                        {product.short_description}
                                    </p>
                                </div>
                                <div className="mt-4">
                                    <h1 className="text-1lg font-semibold text-neutral-600 dark:text-neutral-600">
                                        Additional Information :
                                    </h1>
                                    <div className="mt-2 flex flex-col gap-2">
                                        <div className="flex flex-row justify-between gap-2 w-40">
                                            <h5 className="text-sm font-semibold text-neutral-600 dark:text-neutral-600">Category</h5>
                                            <span className="ml-0.5 text-neutral-600 dark:text-neutral-600">:</span>
                                            <h5 className="text-sm font-medium text-neutral-500 dark:text-neutral-500">{product.Category.category_name}</h5>
                                        </div>
                                        <div className="flex flex-row justify-between gap-2 w-40">
                                            <h5 className="text-sm font-semibold text-neutral-600 dark:text-neutral-600">Brand</h5>
                                            <span className="ml-6 text-neutral-600 dark:text-neutral-600">:</span>
                                            <h5 className="text-sm font-medium mr-1 text-neutral-500 dark:text-neutral-500">{product.Brand.brand_name}</h5>
                                        </div>
                                        <div className="text-sm font-medium text-neutral-500 dark:text-neutral-500">
                                            <p className="mb-2">{product.stock} in Stock</p>
                                            <p>{product.weight} gram</p>
                                        </div>
                                        <p className="text-2sm font-semibold text-emerald-500 dark:text-emerald-500">{formatRupiah(product.price)}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="py-2 mt-4">
                            <h1 className="my-2 mt-6 text-1lg font-semibold text-neutral-600 dark:text-neutral-600">
                                Description :
                            </h1>
                            <p
                                className="mt-2 text-sm mb-1 font-medium text-neutral-500 dark:text-neutral-500"
                                dangerouslySetInnerHTML={{ __html: product.description }}
                            ></p>
                        </div>

                        <div className="py-4 mb-4">
                            <h1 className="my-2 mt-6 text-1lg font-semibold text-neutral-600 dark:text-neutral-600">
                                How to install :
                            </h1>

                            <ol
                                className="ml-8 text-sm mb-1 font-medium text-neutral-500 dark:text-neutral-500"
                                dangerouslySetInnerHTML={{ __html: product.how_to_install }}
                            ></ol>
                        </div>
                    </div>
                )
            }
        </div>
    );
}
