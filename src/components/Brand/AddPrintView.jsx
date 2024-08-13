import React from 'react'
import { Link } from 'react-router-dom'

// import form react-icons
import { FaFileExcel, FaFilePdf } from "react-icons/fa6";

// import from utils
import { exportBrandToExcel } from '../../utils/export/exportUtilsBrands';
import { exporBrandTotPdf } from '../../utils/export/exportUtilsBrands';

export default function AddPrintView({ data }) {

    // handle for export as excel
    const handleExportExcel = () => {
        exportBrandToExcel(data, 'Data Brands Smartstore Home');
        console.log("Download data brands as excel file is successful");
    };

    // handle for export as pdf
    const handleExportPdf = () => {
        exporBrandTotPdf(data, 'Data Brands Smartstore Home');
        console.log("Download data brands as PDF file is successful");
    };

    return (
        <div className='min-w-0 rounded-lg overflow-hidden bg-white dark:bg-white min-w-0 shadow-xs overflow-hidden bg-white dark:bg-white mb-5'>
            <div className='p-4'>
                <div className="py-3 md:pb-0 grid gap-4 lg:gap-6 xl:gap-6 xl:flex">
                    <div className="flex-grow-0 sm:flex-grow md:flex-grow lg:flex-grow xl:flex-grow">
                        <div className="lg:flex md:flex flex-grow-0">
                            <div className="flex">
                                <div className="lg:flex-1 md:flex-1 mr-3 sm:flex-none">
                                    <button onClick={handleExportExcel} className="border flex justify-center items-center border-neutral-300 hover:border-emerald-400 hover:text-emerald-400 dark:text-neutral-700 cursor-pointer h-10 w-20 rounded-md focus:outline-none" title='Export as XLSX'>
                                        {/* <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="mr-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                            <polyline points="17 8 12 3 7 8"></polyline>
                                            <line x1="12" y1="3" x2="12" y2="15"></line>
                                        </svg> */}
                                        <span className="text-xs mr-0.5">Export</span>
                                        <FaFileExcel fontSize={20} />
                                    </button>
                                </div>
                                <div className="lg:flex-1 md:flex-1 mr-3  sm:flex-none">
                                    <button onClick={handleExportPdf} className="border flex justify-center items-center h-10 w-20 hover:text-red-500  border-gray-300 dark:text-neutral-700 cursor-pointer  py-2 hover:border-red-500 rounded-md focus:outline-none" title='Export as PDF'>
                                        {/* <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="mr-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                            <polyline points="17 8 12 3 7 8"></polyline>
                                            <line x1="12" y1="3" x2="12" y2="15"></line>
                                        </svg> */}

                                        <span className="text-xs mr-1">Export</span>
                                        <FaFilePdf fontSize={20} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                            <button className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-neutral-900 dark:bg-neutral-300 border border-transparent opacity-50  w-full rounded-md h-12 btn-gray" disabled="" type="button">
                                <span className="mr-2">
                                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                                    </svg>
                                </span>
                                Bulk Action
                            </button>
                        </div>
                        <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                            <button className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-emerald-500 border border-transparent opacity-1000  w-full rounded-md h-12 bg-red-400 disabled btn-red" disabled="" type="button">
                                <span className="mr-2">
                                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <polyline points="3 6 5 6 21 6"></polyline>
                                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                        <line x1="10" y1="11" x2="10" y2="17"></line>
                                        <line x1="14" y1="11" x2="14" y2="17"></line>
                                    </svg>
                                </span>
                                Delete
                            </button>
                        </div>
                        <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                            <Link to='/brands/add-brand' className="no-underline align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-emerald-500 border border-transparent active:bg-emerald-600 hover:bg-emerald-600 w-full rounded-md h-12" type="button">
                                <span className="mr-2">
                                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <line x1="12" y1="5" x2="12" y2="19"></line>
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                    </svg>
                                </span>
                                Add Brand
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
