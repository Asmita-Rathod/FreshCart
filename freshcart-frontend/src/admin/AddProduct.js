import React, { useState } from "react";


function AddProduct({products,setProducts}){


    const [product, setProduct] = useState({

        name:"",
        category:"",
        price:"",
        stock:"",
        description:""

    });



    const handleChange = (e)=>{

        setProduct({

            ...product,

            [e.target.name]: e.target.value

        });

    };



const handleSubmit = (e)=>{

e.preventDefault();


const categoryEmoji = {

    Fruits:"🍎",

    Vegetables:"🥦",

    Dairy:"🥛",

    Bakery:"🍞",

    Beverages:"🥤",

    Snacks:"🍿",

    Chocolates:"🍫"

};



const newProduct={

id:Date.now(),

emoji:
categoryEmoji[product.category] || "🥬",

name:product.name,

category:product.category,

price:Number(product.price),

stock:Number(product.stock),

description:product.description

};



setProducts([

...products,

newProduct

]);



alert("Product Added Successfully");



};



    return(


        <div className="add-product-page">


            <h1>
                Add New Product
            </h1>



            <form 
            className="product-form"
            onSubmit={handleSubmit}
            >



                <label>
                    Product Name
                </label>


                <input

                    type="text"

                    name="name"

                    placeholder="Enter product name"

                    value={product.name}

                    onChange={handleChange}

                />




                <label>
                    Category
                </label>


                <select

                    name="category"

                    value={product.category}

                    onChange={handleChange}

                >

                    <option value="">
                        Select Category
                    </option>

                    <option>
                        Fruits
                    </option>

                    <option>
                        Vegetables
                    </option>

                    <option>
                        Dairy
                    </option>

                    <option>
                        Bakery
                    </option>

                    <option>
                        Beverages
                    </option>


                </select>





                <label>
                    Product Price
                </label>


                <input

                    type="number"

                    name="price"

                    placeholder="Enter price"

                    value={product.price}

                    onChange={handleChange}

                />





                <label>
                    Stock Quantity
                </label>


                <input

                    type="number"

                    name="stock"

                    placeholder="Enter stock"

                    value={product.stock}

                    onChange={handleChange}

                />





                <label>
                    Product Image
                </label>


                <input

                    type="file"

                />





                <label>
                    Description
                </label>


                <textarea

                    name="description"

                    placeholder="Enter product description"

                    value={product.description}

                    onChange={handleChange}

                />





                <button
                className="save-product-btn"
                type="submit"
                >

                    Add Product

                </button>



            </form>


        </div>


    );

}


export default AddProduct;