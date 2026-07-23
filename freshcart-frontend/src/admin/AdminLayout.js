import React from "react";
import { Outlet, Link } from "react-router-dom";
import {
    FaHome,
    FaBox,
    FaShoppingCart,
    FaUsers,
    FaPlusCircle
} from "react-icons/fa";

import "./Admin.css";


function AdminLayout(){

    return(

        <div className="admin-container">


            <aside className="sidebar">


                <div className="admin-logo">

                    🛒 FreshCart

                    <span>
                        Admin
                    </span>

                </div>



                <nav>


                    <Link to="/admin">

                        <FaHome />

                        Dashboard

                    </Link>



                    <Link to="/admin/products">

                        <FaBox />

                        Products

                    </Link>



                    <Link to="/admin/add-product">

                        <FaPlusCircle />

                        Add Product

                    </Link>



                    <Link to="/admin/orders">

                        <FaShoppingCart />

                        Orders

                    </Link>



                    <Link to="/admin/users">

                        <FaUsers />

                        Users

                    </Link>



                </nav>



            </aside>



            <main className="admin-content">


                <header className="admin-navbar">


                    <h3>
                        FreshCart Dashboard
                    </h3>



                    <button>
                        Logout
                    </button>


                </header>



                <Outlet />


            </main>


        </div>


    );

}


export default AdminLayout;