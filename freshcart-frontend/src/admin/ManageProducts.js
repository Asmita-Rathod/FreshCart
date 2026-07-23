import React, { useState } from "react";
import {Link} from "react-router-dom";


function ManageProducts({products,setProducts}){

    const [search, setSearch] = useState("");



    const filteredProducts = products.filter((product)=>


        product.name
        .toLowerCase()
        .includes(search.toLowerCase())


    );



    return(

        <div className="product-page">


            <div className="page-header">


                <h1>
                    Manage Products
                </h1>


                <button className="add-btn">

                    + Add Product

                </button>


            </div>



            <input

                className="search-box"

                type="text"

                placeholder="Search Product..."

                value={search}

                onChange={(e)=>setSearch(e.target.value)}

            />




            <table>


                <thead>

                    <tr>

                        <th>ID</th>

                        <th>Name</th>

                        <th>Category</th>

                        <th>Price</th>

                        <th>Stock</th>

                        <th>Action</th>


                    </tr>


                </thead>



                <tbody>


                {
                    filteredProducts.map((product)=>(


                        <tr key={product.id}>


                            <td>
                                {product.id}
                            </td>


                            <td>
                                {product.name}
                            </td>


                            <td>
                                {product.category}
                            </td>


                            <td>
                                ₹{product.price}
                            </td>


                            <td>
                                {product.stock}
                            </td>



                            <td>


                                <Link

                                to={`/admin/edit-product/${product.id}`}

                                >

                                <button className="edit-btn">

                                Edit

                                </button>


                                </Link>


                                <button

                                className="delete-btn"

                                onClick={()=>{


                                const confirmDelete = window.confirm(
                                "Delete this product?"
                                );


                                if(confirmDelete){


                                setProducts(

                                products.filter(

                                (item)=>item.id !== product.id

                                )

                                );


                                }



                                }}

                                >

                                Delete

                                </button>


                            </td>



                        </tr>


                    ))
                }


                </tbody>


            </table>



        </div>

    );

}


export default ManageProducts;