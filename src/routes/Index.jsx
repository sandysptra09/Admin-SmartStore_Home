import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layout
import Admin from "../layouts/admin/Admin";

// import from views
import AnalyticsDashboard from "../views/admin/Analytics Dashboard/AnalyticsDashboard";

// import form views
import Products from "../views/admin/Shop/Products";
import Categories from "../views/admin/Shop/Categories";
import Brands from "../views/admin/Shop/Brands";
import Reviews from "../views/admin/Shop/Reviews";

// import from views
import Orders from "../views/admin/Order/Orders";
import RefundOrders from "../views/admin/Order/RefundOrders";

// import from views
import Customer from "../views/admin/Customer/Customer";

// import from views
import Profile from "../views/admin/Profile/Profile";
import ProfileAdmin from "../views/admin/Profile/ProfileAdmin";
import Login from "../views/auth/Login/Login";
import Settings from "../views/admin/Setting/Settings";

// import from views
import ReportOrders from "../views/admin/Report/ReportOrders";

// // import from views CRUD
import AddProduct from "../views/admin/Shop/Product/AddProduct";
import UpdateProduct from "../views/admin/Shop/Product/UpdateProduct";
import ViewProduct from "../views/admin/Shop/Product/ViewProduct";

import AddCategory from "../views/admin/Shop/Category/AddCategory";
import UpdateCategory from "../views/admin/Shop/Category/UpdateCategory";
import ViewCategory from "../views/admin/Shop/Category/ViewCategory";

import AddBrand from "../views/admin/Shop/Brand/AddBrand";
import UpdateBrand from "../views/admin/Shop/Brand/UpdateBrand";
import ViewBrand from "../views/admin/Shop/Brand/ViewBrand";


// import from views
import NotFound from "../views/auth/NotFound/NotFound";

export default function RoutesPath() {


    return (
        <Router>
            <Routes>
                {/* Add Routes with Layout  */}
                <Route exact path="/" Component={Admin} >

                    {/* Nested Routes */}
                    <Route index Component={AnalyticsDashboard} />

                    {/* route for catalog shop */}
                    <Route path="/categories" Component={Categories} />
                    <Route path="/brands" Component={Brands} />
                    <Route path="/products" Component={Products} />
                    <Route path="/reviews" Component={Reviews} />

                    {/* route for customer */}
                    <Route path="/customers" Component={Customer} />

                    {/* route for menu order */}
                    <Route path="/orders" Component={Orders} />
                    <Route path="/refund-orders" Component={RefundOrders} />

                    {/* route for report order */}
                    <Route path="/report-orders" Component={ReportOrders} />

                    {/* route for profile */}
                    <Route path="/profile" Component={ProfileAdmin} />
                    <Route path="/profile-customer" Component={Profile} />
                    <Route path="/settings" Component={Settings} />


                    {/* route for CRUD category */}
                    <Route path="/categories/add-category" Component={AddCategory} />
                    <Route path="/categories/update-category/:id" Component={UpdateCategory} />
                    <Route path="/categories/detail-category/:slug" Component={ViewCategory} />

                    {/* route for CRUD brand */}
                    <Route path="/brands/add-brand" Component={AddBrand} />
                    <Route path="/brands/update-brand/:id" Component={UpdateBrand} />
                    <Route path="/brands/detail-brand/:slug" Component={ViewBrand} />

                    {/* route for CRUD product */}
                    <Route path="/products/add-product" Component={AddProduct} />
                    <Route path="/products/update-product/:slug" Component={UpdateProduct} />
                    <Route path="/products/detail-product/:slug" Component={ViewProduct} />

                </Route>

                {/* route for admin login */}
                <Route path="/login" Component={Login} />

                {/* route for 404 not found */}
                <Route path="*" Component={NotFound} />
            </Routes>
        </Router>
    )
}