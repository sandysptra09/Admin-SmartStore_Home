import React, { useState } from "react";

// import css
import "./Sidebar.css";

// import disclosure from headles ui
import { Disclosure } from "@headlessui/react";

// import icon from react-icons
import { FcBullish } from "react-icons/fc";
import { FaRegUser, FaCog, FaSignOutAlt } from "react-icons/fa";
import {
    HiOutlineRectangleGroup,
    HiOutlineChevronUp,
    HiOutlineChevronDown,
} from "react-icons/hi2";
import { IoCartOutline } from "react-icons/io5";
import { BsBox, BsPeople } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { CiShoppingTag } from "react-icons/ci";
import { RiRefundLine } from "react-icons/ri";
import { TbInbox, TbMessage, TbReportAnalytics } from "react-icons/tb";

// Import navigation from react-router
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
    const location = useLocation();

    return (
        <div className="bg-white w-60 p-3 flex flex-col border border-gray-200 text-white ">
            <div className="flex flex-row items-center gap-2 px-1 py-3">
                <div className="">
                    <img
                        className=""
                        src="/assets/images/logo/SmartStore-Logo.png"
                        alt=""
                    />
                </div>
                {/* <span className='text-neutral-900 font-bold text-lg'>SmartStore</span> */}
            </div>
            <hr />
            <div className="overflow-y-auto overflow-x-hidden flex-grow custom-scrollbar">
                <div className="flex-1">
                    <ul className="flex flex-col py-4 space-y-1">
                        <li>
                            <Link
                                to="/"
                                className={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-neutral-900 font-bold hover:text-emerald-500 border-l-4 border-transparent hover:border-emerald-500 pr-6 ${location.pathname === "/"
                                    ? "bg-gray-100 text-emerald-500 border-emerald-500"
                                    : ""
                                    }`}

                            >
                                <span className="inline-flex justify-center items-center ml-4">
                                    <AiOutlineHome fontSize={20} />
                                </span>
                                <span className="ml-2 text-sm tracking-wide truncate">
                                    Dashboard
                                </span>
                            </Link>
                        </li>
                    </ul>

                    {/* <ul className="flex flex-col py-4 space-y-1">

                        <li>
                            <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-emerald-500 border-l-4 border-transparent hover:border-emerald-500 pr-6">
                                <span className="inline-flex justify-center items-center ml-4">
                                    <TbInbox fontSize={20} />
                                </span>
                                <span className="ml-2 text-sm tracking-wide truncate">Inbox</span>
                                <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-emerald-500 bg-indigo-50 rounded-full">New</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-emerald-500 border-l-4 border-transparent hover:border-emerald-500 pr-6">
                                <span className="inline-flex justify-center items-center ml-4">
                                    <IoNotificationsOutline fontSize={20} />
                                </span>
                                <span className="ml-2 text-sm tracking-wide truncate">Notifications</span>
                                <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-red-50 rounded-full">1.2k</span>
                            </a>
                        </li>


                    </ul> */}

                    {/* Shop Menu */}
                    <Disclosure defaultOpen={false}>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex justify-between w-full px-5 py-2 text-sm font-medium text-left text-neutral-400">
                                    <div className="text-sm font-bold tracking-wide text-neutral-900 font-bold">
                                        Shop
                                    </div>
                                    {open ? (
                                        <HiOutlineChevronUp className="w-5 h-5 text-neutral-900" />
                                    ) : (
                                        <HiOutlineChevronDown className="w-5 h-5 text-neutral-900 " />
                                    )}
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 py-2 text-sm text-gray-600">
                                    <ul className="flex flex-col py-4 space-y-1">
                                        <li>
                                            <Link
                                                to="/categories"
                                                className={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-neutral-500 font-bold hover:text-emerald-500 border-l-4 border-transparent hover:border-emerald-500 pr-6 ${location.pathname === "/categories"
                                                    ? "bg-gray-100 text-emerald-500 border-emerald-500"
                                                    : ""
                                                    }`}
                                            >
                                                <span className="inline-flex justify-center items-center ml-4">
                                                    <HiOutlineRectangleGroup fontSize={20} />
                                                </span>
                                                <span className="ml-2 text-sm tracking-wide truncate">
                                                    Categories
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/brands"
                                                className={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-neutral-500 font-bold hover:text-emerald-500 border-l-4 border-transparent hover:border-emerald-500 pr-6 ${location.pathname === "/brands"
                                                    ? "bg-gray-100 text-emerald-500 border-emerald-500"
                                                    : ""
                                                    }`}
                                            >
                                                <span className="inline-flex justify-center items-center ml-4">
                                                    <CiShoppingTag fontSize={20} />
                                                </span>
                                                <span className="ml-2 text-sm tracking-wide truncate">
                                                    Brands
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/products"
                                                className={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-neutral-500 font-bold hover:text-emerald-500 border-l-4 border-transparent hover:border-emerald-500 pr-6 ${location.pathname === "/products"
                                                    ? "bg-gray-100 text-emerald-500 border-emerald-500"
                                                    : ""
                                                    }`}
                                            >
                                                <span className="inline-flex justify-center items-center ml-4">
                                                    <BsBox fontSize={18} />
                                                </span>
                                                <span className="ml-2.5 text-sm tracking-wide truncate">
                                                    Products
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/reviews"
                                                className={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-neutral-500 font-bold hover:text-emerald-500 border-l-4 border-transparent hover:border-emerald-500 pr-6 ${location.pathname === "/reviews"
                                                    ? "bg-gray-100 text-emerald-500 border-emerald-500"
                                                    : ""
                                                    }`}
                                            >
                                                <span className="inline-flex justify-center items-center ml-4">
                                                    <TbMessage fontSize={20} />
                                                </span>
                                                <span className="ml-2 text-sm tracking-wide truncate">
                                                    Reviews
                                                </span>
                                            </Link>
                                        </li>
                                    </ul>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>

                    {/* Customer */}
                    <ul className="flex flex-col py-4 space-y-1">
                        <li>
                            <Link
                                to="/customers"
                                className={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-neutral-500 font-bold hover:text-emerald-500 border-l-4 border-transparent hover:border-emerald-500 pr-6 ${location.pathname === "/customers"
                                    ? "bg-gray-100 text-emerald-500 border-emerald-500"
                                    : ""
                                    }`}
                            >
                                <span className="inline-flex justify-center items-center ml-4">
                                    <BsPeople fontSize={20} />
                                </span>
                                <span className="ml-2 text-sm tracking-wide truncate ">
                                    Customer
                                </span>
                            </Link>
                        </li>
                    </ul>

                    {/* Transaction Menu */}
                    <ul className="flex flex-col py-4 space-y-1">
                        <li className="px-5">
                            <div className="flex flex-row items-center h-8">
                                <div className="text-sm font-bold tracking-wide text-neutral-900 font-bold">
                                    Transaction
                                </div>
                            </div>
                        </li>
                        <li>
                            <Link
                                to="/orders"
                                className={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-neutral-500 font-bold hover:text-emerald-500 border-l-4 border-transparent hover:border-emerald-500 pr-6 ${location.pathname === "/orders"
                                    ? "bg-gray-100 text-emerald-500 border-emerald-500"
                                    : ""
                                    }`}
                            >
                                <span className="inline-flex justify-center items-center ml-4">
                                    <IoCartOutline fontSize={20} />
                                </span>
                                <span className="ml-2 text-sm tracking-wide truncate">
                                    Orders
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/refund-orders"
                                className={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-neutral-500 font-bold hover:text-emerald-500 border-l-4 border-transparent hover:border-emerald-500 pr-6 ${location.pathname === "/refund-orders"
                                    ? "bg-gray-100 text-emerald-500 border-emerald-500"
                                    : ""
                                    }`}
                            >
                                <span className="inline-flex justify-center items-center ml-4">
                                    <RiRefundLine fontSize={18} />
                                </span>
                                <span className="ml-3 text-sm tracking-wide truncate">
                                    Refund Orders
                                </span>
                            </Link>
                        </li>
                    </ul>

                    {/* Report Orders Menu */}
                    <ul className="flex flex-col py-4 space-y-1">
                        <li>
                            <Link
                                to="/report-orders"
                                className={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-neutral-500 font-bold hover:text-emerald-500 border-l-4 border-transparent hover:border-emerald-500 pr-6 ${location.pathname === "/report-orders"
                                    ? "bg-gray-100 text-emerald-500 border-emerald-500"
                                    : ""
                                    }`}
                            >
                                <span className="inline-flex justify-center items-center ml-4">
                                    <TbReportAnalytics fontSize={20} />
                                </span>
                                <span className="ml-2 text-sm tracking-wide truncate">
                                    Report
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="">
                    {/* Setting Menu */}
                    <ul className="flex flex-col py-4 space-y-1">
                        <li className="px-5">
                            <div className="flex flex-row items-center h-8">
                                <div className="text-sm font-bold tracking-wide text-neutral-900 font-bold">
                                    Settings
                                </div>
                            </div>
                        </li>
                        <li>
                            <Link
                                to="/profile"
                                className={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-neutral-500 font-bold hover:text-emerald-500 border-l-4 border-transparent hover:border-emerald-500 pr-6 ${location.pathname === "/profile"
                                    ? "bg-gray-100 text-emerald-500 border-emerald-500"
                                    : ""
                                    }`}
                            >
                                <span className="inline-flex justify-center items-center ml-4">
                                    <FaRegUser />
                                </span>
                                <span className="ml-2 text-sm tracking-wide truncate">
                                    Profile
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/settings"
                                className={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-neutral-500 font-bold hover:text-emerald-500 border-l-4 border-transparent hover:border-emerald-500 pr-6 ${location.pathname === "/settings"
                                    ? "bg-gray-100 text-emerald-500 border-emerald-500"
                                    : ""
                                    }`}
                            >
                                <span className="inline-flex justify-center items-center ml-4">
                                    <FaCog />
                                </span>
                                <span className="ml-2 text-sm tracking-wide truncate">
                                    Settings
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/login"
                                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-neutral-500 font-bold hover:text-emerald-500 border-l-4 border-transparent hover:border-emerald-500 hover:border-emerald-500 pr-6"
                            >
                                <span className="inline-flex justify-center items-center ml-4">
                                    <FaSignOutAlt />
                                </span>
                                <span className="ml-2 text-sm tracking-wide truncate">
                                    Logout
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
