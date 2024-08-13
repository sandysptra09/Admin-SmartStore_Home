import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// import css
import "./AddProduct.css";

export default function AddProduct() {

    // initiate state
    const [productName, setProductName] = useState('');
    const [slug, setSlug] = useState('');
    const [shortDescription, setShortDescription] = useState('');
    const [description, setDescription] = useState('');
    const [howToInstall, setHowToInstall] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');
    const [weight, setWeight] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [status, setStatus] = useState('');
    const [brandId, setBrandId] = useState('');
    const [categoryId, setCategoryId] = useState('');

    const [isSubmitting, setIsSubmitting] = useState(false)

    // fetch data category and brands
    const [categories, setCategories] = useState([]);
    const [brands, setBrands] = useState([]);

    useEffect(() => {
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

        fetchBrandsAndCategories();
    }, []);


    // function for add product
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // retrieve token from localStorage
            const token = localStorage.getItem('token');

            const response = await axios.post('http://localhost:8080/api/smartstore/product', {
                product_name: productName,
                slug: slug,
                short_description: shortDescription,
                description: description,
                how_to_install: howToInstall,
                price: parseInt(price),
                stock: parseInt(stock),
                weight: parseInt(weight),
                image_url: imageUrl,
                status: status,
                category_id: categoryId ? parseInt(categoryId) : null,
                brand_id: brandId ? parseInt(brandId) : null,
            }, {
                headers: {
                    // include the token in the Authorization header
                    Authorization: `Bearer ${token}`
                }
            });

            console.log('Product added:', response.data);

            // Reset form values
            setProductName('');
            setSlug('');
            setShortDescription('');
            setDescription('');
            setHowToInstall('');
            setPrice('');
            setStock('');
            setWeight('');
            setImageUrl('');
            setStatus('');
            setBrandId('');
            setCategoryId('');

        } catch (error) {
            console.error('Error adding category:', error);
        } finally {
            setIsSubmitting(false); // Set isSubmitting menjadi false setelah permintaan selesai
        }
    }

    return (
        <div className="sm:container grid lg:px-6 sm:px-4 px-2 mx-auto overflow-y-auto overflow-x-hidden">
            <h1 className="my-2 mt-4 text-lg font-bold text-neutral-600 dark:text-neutral-600">
                Add Product
            </h1>
            <p className="text-sm font-normal text-neutral-600 dark:text-neutral-600">
                Add your product and necessary information from here
            </p>
            <hr className="mt-4" />

            {/* add product */}
            <div className="">
                <form onSubmit={handleSubmit} className="">
                    <div className="px-6 pt-8 flex-grow w-full h-full max-h-full pb-40 md:pb-32 lg:pb-32 xl:pb-32">
                        {/* Product Name */}
                        <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                            <label htmlFor="product_name" className="block text-1sm text-neutral-800 dark:text-neutral-400 col-span-4 sm:col-span-2 font-medium text-sm">
                                Product Name
                            </label>
                            <div className="col-span-8 sm:col-span-4">
                                <input
                                    id="product_name"
                                    className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-neutral-700 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-white focus:border-neutral-200 border-neutral-200 dark:border-neutral-200 dark:focus:border-neutral-400 dark:bg-neutral-200"
                                    type="text"
                                    value={productName}
                                    onChange={(e) => setProductName(e.target.value)}
                                    name="product_name"
                                    placeholder="Product Name"
                                    required
                                />
                            </div>
                        </div>

                        {/* Product Slug */}
                        <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                            <label htmlFor="slug" className="block text-1sm text-neutral-800 dark:text-neutral-400 col-span-4 sm:col-span-2 font-medium text-sm">
                                Slug
                            </label>
                            <div className="col-span-8 sm:col-span-4">
                                <input
                                    id="slug"
                                    className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-neutral-700 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-white focus:border-neutral-200 border-neutral-200 dark:border-neutral-200 dark:focus:border-neutral-400 dark:bg-neutral-200"
                                    type="text"
                                    value={slug}
                                    onChange={(e) => setSlug(e.target.value)}
                                    name="slug"
                                    placeholder="Product Slug"
                                    required
                                />
                            </div>
                        </div>


                        {/* Short Description */}
                        <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                            <label htmlFor="short_description" className="block text-1sm text-neutral-800 dark:text-neutral-400 col-span-4 sm:col-span-2 font-medium text-sm">
                                Short Description
                            </label>
                            <div className="col-span-8 sm:col-span-4">
                                <textarea
                                    id="short_description"
                                    className="block w-full border px-3 py-1 text-sm focus:outline-none dark:text-neutral-700 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-white focus:border-neutral-200 border-neutral-200 dark:border-neutral-200 dark:focus:border-neutral-400 dark:bg-neutral-200 mr-2 p-2 resize-none"
                                    name="short_description"
                                    value={shortDescription}
                                    onChange={(e) => setShortDescription(e.target.value)}
                                    placeholder="Short Description..."
                                    rows="3"
                                    required

                                ></textarea>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                            <label htmlFor="description" className="block text-1sm text-neutral-800 dark:text-neutral-400 col-span-4 sm:col-span-2 font-medium text-sm">
                                Description
                            </label>
                            <div className="col-span-8 sm:col-span-4">
                                <textarea
                                    id="description"
                                    className="block w-full border px-3 py-1 text-sm focus:outline-none dark:text-neutral-700 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-white focus:border-neutral-200 border-neutral-200 dark:border-neutral-200 dark:focus:border-neutral-400 dark:bg-neutral-200 mr-2 p-2 resize-none"
                                    name="description"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    placeholder="Product Description..."
                                    rows="10"
                                    required

                                ></textarea>
                            </div>
                        </div>

                        {/* How to Install */}
                        <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                            <label htmlFor="how_to_install" className="block text-1sm text-neutral-800 dark:text-neutral-400 col-span-4 sm:col-span-2 font-medium text-sm">
                                How to Install
                            </label>
                            <div className="col-span-8 sm:col-span-4">
                                <textarea
                                    id="how_to_install"
                                    className="block w-full border px-3 py-1 text-sm focus:outline-none dark:text-neutral-700 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-white focus:border-neutral-200 border-neutral-200 dark:border-neutral-200 dark:focus:border-neutral-400 dark:bg-neutral-200 mr-2 p-2 resize-none"
                                    name="how_to_install"
                                    value={howToInstall}
                                    onChange={(e) => setHowToInstall(e.target.value)}
                                    placeholder="How to Install Product..."
                                    rows="10"
                                    required

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
                                    <span className="inline-flex items-center px-3 rounded rounded-r-none border border-r-0 border-neutral-200 bg-gray-50 text-gray-500 text-sm focus:border-emerald-300 dark:bg-white dark:text-neutral-400 dark:border-neutral-200 dark:border-neutral-300">
                                        Rp
                                    </span>
                                    <input
                                        className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-neutral-700 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-white focus:border-neutral-200 border-gray-200 dark:border-neutral-200 dark:focus:border-neutral-400 dark:bg-neutral-200 mr-2 p-2 rounded-l-none"
                                        type="number"
                                        name="price"
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                        placeholder="Product Price"
                                        required
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
                                    name="stock"
                                    value={stock}
                                    onChange={(e) => setStock(e.target.value)}
                                    placeholder="Product Stock"
                                    required

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
                                    name="weight"
                                    value={weight}
                                    onChange={(e) => setWeight(e.target.value)}
                                    placeholder="Product Weight"
                                    required

                                />
                            </div>
                        </div>

                        {/* Product Name */}
                        <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                            <label htmlFor="product_name" className="block text-1sm text-neutral-800 dark:text-neutral-400 col-span-4 sm:col-span-2 font-medium text-sm">
                                Image Url
                            </label>
                            <div className="col-span-8 sm:col-span-4">
                                <input
                                    id="image_url"
                                    className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-neutral-700 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-white focus:border-neutral-200 border-neutral-200 dark:border-neutral-200 dark:focus:border-neutral-400 dark:bg-neutral-200"
                                    type="text"
                                    value={imageUrl}
                                    onChange={(e) => setImageUrl(e.target.value)}
                                    name="image_url"
                                    placeholder="Product Name"
                                    required
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
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value)}
                                    required
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
                                    value={categoryId}
                                    onChange={(e) => setCategoryId(e.target.value)}
                                    required
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
                                    value={brandId}
                                    onChange={(e) => setBrandId(e.target.value)}
                                    required
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
                                disabled={isSubmitting}
                            >
                                <span>Add Product</span>
                            </button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    );
}
