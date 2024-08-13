import React from 'react'

import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <div className="py-8 px-16 mx-auto max-w-screen-xl lg:py-44">
            <div className="flex items-center">
                <div className="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
                    <div className="max-w-lg mb-8">
                        <img src="https://i.imgur.com/vGrypCk.png" alt="Page Not Found" />
                    </div>
                    <div className="max-w-md">
                        <div className="text-5xl text-emerald-500 font-bold mb-4">404</div>
                        <p
                            className="text-2xl md:text-3xl text-neutral-700 leading-normal mb-4"
                        >Sorry we couldn't find this page. </p>
                        <p className="mb-8 text-neutral-700">But dont worry, you can find plenty of other things on our homepage.</p>

                        <Link to='/' className="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-emerald-500 active:bg-emerald-500 hover:bg-emerald-500 no-underline">back to homepage</Link>
                    </div>


                </div>
            </div>
        </div>
    )
}
