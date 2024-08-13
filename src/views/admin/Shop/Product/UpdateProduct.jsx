import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate, Link } from 'react-router-dom'

export default function UpdateProduct() {

    // get slug from url
    const { slug } = useParams();

    // initiate state
    const [product, setProduct] = useState({
        product_name: '',
        slug: '',
        short_description: '',
        description: '',
        how_to_install: '',
        price: '',
        stock: '',
        weight: '',
        status: '',
        category_id: '',
        brand_id: ''
    })

    // state for list brand and category
    const [brands, setBrands] = useState([]);
    const [categories, setCategories] = useState([]);

    const navigate = useNavigate();

    // get product information
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/smartstore/product-by-slug/${slug}`);
                setProduct(response.data.data);
            } catch (error) {
                console.error("Error fetching product", error);
            }
        };

        const fetchBrandsAndCategories = async () => {
            try {
                const brandsResponse = await axios.get('http://localhost:8080/api/smartstore/brands');
                setBrands(brandsResponse.data.data.rows);

                const categoriesResponse = await axios.get('http://localhost:8080/api/smartstore/categories');
                setCategories(categoriesResponse.data.data.rows);
            } catch (error) {
                console.error("Error fetching brands and categories", error);
            }
        };

        fetchProduct();
        fetchBrandsAndCategories();
    }, [slug]);

    // function for update category and navigate to products CRUD
    const handleUpdate = async (e) => {
        e.preventDefault();
        try {

            // get token in localstorage
            const token = localStorage.getItem('token');

            const updatedProduct = {
                product_name: product.product_name,
                slug: product.slug,
                short_description: product.short_description,
                description: product.description,
                how_to_install: product.how_to_install,
                price: parseInt(product.price),
                stock: parseInt(product.stock),
                weight: parseInt(product.weight),
                status: product.status,
                category_id: product.category_id,
                brand_id: product.brand_id
            };

            const response = await axios.put(`http://localhost:8080/api/smartstore/product-by-slug/${slug}`, updatedProduct, {
                headers: {
                    // include the token in the Authorization header
                    Authorization: `Bearer ${token}`
                }
            });
            console.log("Update successful", response.data);
            navigate("/products");
        } catch (error) {
            console.error("Error updating product: ", error);
        }
    };

    // function for change input
    const handleChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="sm:container grid lg:px-6 sm:px-4 px-2 mx-auto overflow-y-auto overflow-x-hidden">
            <h1 className="my-2 mt-4 text-lg font-bold text-neutral-600 dark:text-neutral-600">
                Update Product
            </h1>
            <p className="text-sm font-normal text-neutral-600 dark:text-neutral-600">
                Update your product and necessary information from here
            </p>
            <hr className="mt-4" />

            {/* add product */}
            <div className="">
                <form onSubmit={handleUpdate} className="">
                    <div className="px-6 pt-8 flex-grow w-full h-full max-h-full pb-40 md:pb-32 lg:pb-32 xl:pb-32">
                        {/* Product Name */}
                        <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                            <label className="block text-1sm text-neutral-800 dark:text-neutral-400 col-span-4 sm:col-span-2 font-medium text-sm">
                                Product Name
                            </label>
                            <div className="col-span-8 sm:col-span-4">
                                <input
                                    className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-neutral-700 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-white focus:border-neutral-200 border-neutral-200 dark:border-neutral-200 dark:focus:border-neutral-400 dark:bg-neutral-200"
                                    type="text"
                                    value={product.product_name}
                                    onChange={handleChange}
                                    name="product_name"
                                    placeholder="Product Name"
                                />
                            </div>
                        </div>

                        {/* Product Slug */}
                        <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                            <label className="block text-1sm text-neutral-800 dark:text-neutral-400 col-span-4 sm:col-span-2 font-medium text-sm">
                                Slug
                            </label>
                            <div className="col-span-8 sm:col-span-4">
                                <input
                                    className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-neutral-700 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-white focus:border-neutral-200 border-neutral-200 dark:border-neutral-200 dark:focus:border-neutral-400 dark:bg-neutral-200"
                                    type="text"
                                    value={product.slug}
                                    onChange={handleChange}
                                    name="slug"
                                    placeholder="Product Slug"
                                />
                            </div>
                        </div>

                        {/* Short Description */}
                        <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                            <label className="block text-1sm text-neutral-800 dark:text-neutral-400 col-span-4 sm:col-span-2 font-medium text-sm">
                                Short Description
                            </label>
                            <div className="col-span-8 sm:col-span-4">
                                <textarea
                                    className="block w-full border px-3 py-1 text-sm focus:outline-none dark:text-neutral-700 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-white focus:border-neutral-200 border-neutral-200 dark:border-neutral-200 dark:focus:border-neutral-400 dark:bg-neutral-200 mr-2 p-2 resize-none"
                                    name="short_description"
                                    value={product.short_description}
                                    onChange={handleChange}
                                    placeholder="Short Description..."
                                    rows="3"
                                ></textarea>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                            <label className="block text-1sm text-neutral-800 dark:text-neutral-400 col-span-4 sm:col-span-2 font-medium text-sm">
                                Description
                            </label>
                            <div className="col-span-8 sm:col-span-4">
                                <textarea
                                    className="block w-full border px-3 py-1 text-sm focus:outline-none dark:text-neutral-700 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-white focus:border-neutral-200 border-neutral-200 dark:border-neutral-200 dark:focus:border-neutral-400 dark:bg-neutral-200 mr-2 p-2 resize-none"
                                    name="description"
                                    value={product.description}
                                    onChange={handleChange}
                                    placeholder="Product Description..."
                                    rows="10"
                                ></textarea>
                            </div>
                        </div>

                        {/* How to Install */}
                        <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                            <label className="block text-1sm text-neutral-800 dark:text-neutral-400 col-span-4 sm:col-span-2 font-medium text-sm">
                                How to Install
                            </label>
                            <div className="col-span-8 sm:col-span-4">
                                <textarea
                                    className="block w-full border px-3 py-1 text-sm focus:outline-none dark:text-neutral-700 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-white focus:border-neutral-200 border-neutral-200 dark:border-neutral-200 dark:focus:border-neutral-400 dark:bg-neutral-200 mr-2 p-2 resize-none"
                                    name="how_to_install"
                                    value={product.how_to_install}
                                    onChange={handleChange}
                                    placeholder="How to Install Product..."
                                    rows="10"
                                ></textarea>
                            </div>
                        </div>

                        {/* Price, Stock and Weight */}
                        <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                            {/* Input Price */}
                            <div className="col-span-2">
                                <label className="block text-1sm mb-2 text-neutral-800 dark:text-neutral-400 font-medium text-sm">
                                    Price
                                </label>
                                <div className="flex flex-row">
                                    <span class="inline-flex items-center px-3 rounded rounded-r-none border border-r-0 border-neutral-200 bg-gray-50 text-gray-500 text-sm focus:border-emerald-300 dark:bg-white dark:text-neutral-400 dark:border-neutral-200 dark:border-neutral-300">
                                        Rp
                                    </span>
                                    <input
                                        className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-neutral-700 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-white focus:border-neutral-200 border-gray-200 dark:border-neutral-200 dark:focus:border-neutral-400 dark:bg-neutral-200 mr-2 p-2 rounded-l-none"
                                        type="number"
                                        value={product.price}
                                        onChange={handleChange}
                                        name="price"
                                        placeholder="Product Price"
                                        defaultValue={product.price}
                                    />
                                </div>
                            </div>
                            {/* Input Stock */}
                            <div className="col-span-2">
                                <label className="block text-1sm mb-2 text-neutral-800 dark:text-neutral-400 font-medium text-sm">
                                    Stock
                                </label>
                                <input
                                    className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-neutral-700 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-white focus:border-neutral-200 border-neutral-200 dark:border-neutral-200 dark:focus:border-neutral-400 dark:bg-neutral-200"
                                    type="number"
                                    value={product.stock}
                                    onChange={handleChange}
                                    name="stock"
                                    placeholder="Product Stock"
                                    defaultValue={product.stock}
                                />
                            </div>
                            {/* Input Weight */}
                            <div className="col-span-2">
                                <label className="block text-1sm mb-2 text-neutral-800 dark:text-neutral-400 font-medium text-sm">
                                    Weight
                                </label>
                                <input
                                    className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-neutral-700 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-white focus:border-neutral-200 border-neutral-200 dark:border-neutral-200 dark:focus:border-neutral-400 dark:bg-neutral-200"
                                    type="number"
                                    value={product.weight}
                                    onChange={handleChange}
                                    name="weight"
                                    placeholder="Product Weight"
                                    defaultValue={product.weight}
                                />
                            </div>
                        </div>

                        {/* Product Images */}
                        <div className="grid grid-cols-6 gap-3 mt-8 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                            <label className="block text-1sm text-neutral-800 dark:text-neutral-400 col-span-4 sm:col-span-2 font-medium text-sm">
                                Product Images
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

                        {/* Product Status */}
                        <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                            <label className="block text-1sm text-neutral-800 dark:text-neutral-400 col-span-4 sm:col-span-2 font-medium text-sm">
                                Status
                            </label>
                            <div className="col-span-8 sm:col-span-4">
                                <select
                                    className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-neutral-700 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-white focus:border-neutral-200 border-neutral-200 dark:border-neutral-200 dark:focus:border-neutral-400 dark:bg-neutral-200"
                                    name="status"
                                    value={product.status}
                                    onChange={handleChange}
                                >
                                    <option value="" disabled>
                                        Select Status
                                    </option>
                                    <option value="available">Available</option>
                                    <option value="unavailable">Unavailable</option>
                                </select>
                            </div>
                        </div>

                        {/* Category and Brand of Product */}
                        <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                            {/* Category */}
                            <div className="col-span-3">
                                <label className="block text-1sm mb-2 text-neutral-800 dark:text-neutral-400 font-medium text-sm">
                                    Category
                                </label>
                                <select
                                    className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-neutral-700 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-white focus:border-neutral-200 border-neutral-200 dark:border-neutral-200 dark:focus:border-neutral-400 dark:bg-neutral-200"
                                    name="category_id"
                                    value={product.category_id}
                                    onChange={handleChange}
                                >
                                    <option value="" disabled>
                                        Select Category
                                    </option>
                                    {categories.map((category) => (
                                        <option key={category.id} value={category.id}>
                                            {category.category_name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Brand */}
                            <div className="col-span-3">
                                <label className="block text-1sm mb-2 text-neutral-800 dark:text-neutral-400 font-medium text-sm">
                                    Brand
                                </label>
                                <select
                                    className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-neutral-700 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-white focus:border-neutral-200 border-neutral-200 dark:border-neutral-200 dark:focus:border-neutral-400 dark:bg-neutral-200"
                                    name="brand_id"
                                    value={product.brand_id}
                                    onChange={handleChange}
                                >
                                    <option value="" disabled>
                                        Select Brand
                                    </option>
                                    {brands.map((brand) => (
                                        <option key={brand.id} value={brand.id}>
                                            {brand.brand_name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="py-4 lg:py-8 px-6 grid gap-4 lg:gap-6 xl:gap-6 dark:text-gray-300">
                        <div className="flex justify-between">
                            <Link to='/products'
                                className="no-underline inline-flex items-center justify-center leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-gray-600 border-gray-200 border dark:text-red-400 rounded-lg border bg-neutral-200 border-gray-200 w-full mr-3 flex items-center justify-center cursor-pointer h-12 bg-white text-red-500 hover:bg-red-50 hover:border-red-100 hover:text-red-600 dark:bg-white dark:border-neutral-300 dark:text-gray-500 dark:hover:bg-red-100 dark:hover:text-red-400"
                                type="button"
                            >
                                Cancel
                            </Link>
                            <button
                                className="inline-flex items-center justify-center leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-emerald-500 border border-transparent active:bg-emerald-600 hover:bg-emerald-600 w-full h-12"
                                type="submit"
                            >
                                <span>Update Product</span>
                            </button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}
