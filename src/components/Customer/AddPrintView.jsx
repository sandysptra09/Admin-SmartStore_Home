import React from 'react'

// import form react-icons
import { FaFileExcel, FaFilePdf } from "react-icons/fa6";

// import from utils
import { exportCustomerExcel } from '../../utils/export/exportUtilsCustomers';
import { exportCustomerPdf } from '../../utils/export/exportUtilsCustomers';

export default function AddPrintView({ data }) {

    // handle for export as excel
    const handleExportExcel = () => {
        exportCustomerExcel(data, 'Data Customers Smartstore Home');
        console.log("Download data customer as excel file is successful");
    };

    // handle for export as pdf
    const handleExportPdf = () => {
        exportCustomerPdf(data, 'Data Customers Smartstore Home');
        console.log("Download data customer as PDF file is successful");
    };

    return (
        <div className="min-w-0 rounded-lg overflow-hidden bg-white dark:bg-white min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 mb-5">
            <div className="p-4">
                <div className="py-3 grid gap-4 lg:gap-6 xl:gap-6 md:flex xl:flex">
                    <div className="items-center">
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
                </div>
            </div>
        </div>

    )
}
