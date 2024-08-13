import React from "react"
import { Outlet } from "react-router-dom"
import Sidebar from "../../components/Sidebar/Sidebar"
import Header from "../../components/Header/Header"


// import components

// import views

export default function Admin() {
    return (
        <div className="flex flex-row bg-neutral-100 h-screen w-screen ">
            <Sidebar />
            <div className="flex flex-col flex-1">
                <div className="sticky top-0 z-10">
                    <Header />
                </div>
                <div className="overflow-y-auto flex-1">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}