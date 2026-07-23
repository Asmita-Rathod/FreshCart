import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Cart from "./pages/Cart/Cart";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Wishlist from "./pages/Wishlist/Wishlist";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import NotFound from "./pages/NotFound/NotFound";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


// Admin
import AdminLayout from "./admin/AdminLayout";
import AdminDashboard from "./admin/AdminDashboard";
import ManageProducts from "./admin/ManageProducts";
import AddProduct from "./admin/AddProduct";
import EditProduct from "./admin/EditProduct";
import ManageOrders from "./admin/ManageOrders";
import ManageUsers from "./admin/ManageUsers";
import AdminLogin from "./admin/AdminLogin";
import AdminRoute from "./admin/AdminRoute";



function App(){



const [cartItems,setCartItems]=useState(()=>{

return JSON.parse(
localStorage.getItem("cart")
)||[];

});



const [wishlistItems,setWishlistItems]=useState(()=>{

return JSON.parse(
localStorage.getItem("wishlist")
)||[];

});




// MAIN PRODUCTS STATE

const [products,setProducts]=useState(()=>{


return JSON.parse(

localStorage.getItem("products")

)||[


{
id:1,
emoji:"🍎",
name:"Apple",
category:"Fruits",
price:120,
stock:50,
description:"Fresh Apple"
},


{
id:2,
emoji:"🍅",
name:"Tomato",
category:"Vegetables",
price:40,
stock:80,
description:"Fresh Tomato"
},


{
id:3,
emoji:"🥛",
name:"Milk",
category:"Dairy",
price:60,
stock:100,
description:"Fresh Milk"
},


{
id:4,
emoji:"🍞",
name:"Bread",
category:"Bakery",
price:45,
stock:30,
description:"Soft Bread"
}


];


});




useEffect(()=>{

localStorage.setItem(

"cart",

JSON.stringify(cartItems)

);

},[cartItems]);





useEffect(()=>{

localStorage.setItem(

"wishlist",

JSON.stringify(wishlistItems)

);

},[wishlistItems]);





useEffect(()=>{

localStorage.setItem(

"products",

JSON.stringify(products)

);

},[products]);





const isAdmin =
window.location.pathname.startsWith("/admin");





return(

<BrowserRouter>


<div className="app">


{
!isAdmin &&

<Navbar

cartCount={cartItems.length}

wishlistCount={wishlistItems.length}

/>

}





<main className="main-content">


<Routes>



<Route

path="/"

element={

<Home

products={products}

cartItems={cartItems}

setCartItems={setCartItems}

wishlistItems={wishlistItems}

setWishlistItems={setWishlistItems}

/>

}

/>




<Route

path="/products"

element={

<Products

products={products}

cartItems={cartItems}

setCartItems={setCartItems}

wishlistItems={wishlistItems}

setWishlistItems={setWishlistItems}

/>

}

/>




<Route

path="/cart"

element={

<Cart

cartItems={cartItems}

setCartItems={setCartItems}

/>

}

/>



<Route path="/login" element={<Login/>}/>


<Route path="/register" element={<Register/>}/>




<Route

path="/products/:id"

element={

<ProductDetails

products={products}

cartItems={cartItems}

setCartItems={setCartItems}

wishlistItems={wishlistItems}

setWishlistItems={setWishlistItems}

/>

}

/>





<Route

path="/wishlist"

element={

<Wishlist

wishlistItems={wishlistItems}

setWishlistItems={setWishlistItems}

cartItems={cartItems}

setCartItems={setCartItems}

/>

}

/>





{/* ADMIN */}


<Route

path="/admin-login"

element={<AdminLogin/>}

/>




<Route

path="/admin"

element={

<AdminRoute>

<AdminLayout/>

</AdminRoute>

}

>



<Route

index

element={

<AdminDashboard

products={products}

/>

}

/>




<Route

path="products"

element={

<ManageProducts

products={products}

setProducts={setProducts}

/>

}

/>




<Route

path="add-product"

element={

<AddProduct

products={products}

setProducts={setProducts}

/>

}

/>




<Route

path="edit-product/:id"

element={

<EditProduct

products={products}

setProducts={setProducts}

/>

}

/>



<Route

path="orders"

element={<ManageOrders/>}

/>



<Route

path="users"

element={<ManageUsers/>}

/>



</Route>





<Route

path="*"

element={<NotFound/>}

/>




</Routes>


</main>





<ToastContainer

position="top-right"

autoClose={2000}

/>



{
!isAdmin &&
<Footer/>
}



</div>


</BrowserRouter>

);


}


export default App;