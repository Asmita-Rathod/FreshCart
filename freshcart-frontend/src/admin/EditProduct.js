import React, {useState} from "react";
import {useParams, useNavigate} from "react-router-dom";


function EditProduct({products,setProducts}){


const {id}=useParams();

const navigate=useNavigate();



const productData = products.find(

(product)=>product.id === Number(id)

);



const [product,setProduct]=useState({

name:productData.name,

category:productData.category,

price:productData.price,

stock:productData.stock

});




const handleChange=(e)=>{


setProduct({

...product,

[e.target.name]:e.target.value

});


};




const handleSubmit=(e)=>{


e.preventDefault();



const updatedProducts = products.map((item)=>{


if(item.id === Number(id)){


return{

...item,

name:product.name,

category:product.category,

price:Number(product.price),

stock:Number(product.stock)

};


}


return item;


});




setProducts(updatedProducts);



alert("Product Updated Successfully");


navigate("/admin/products");


};





return(


<div className="add-product-page">


<h1>
Edit Product
</h1>



<form

className="product-form"

onSubmit={handleSubmit}

>


<label>
Product Name
</label>


<input

name="name"

value={product.name}

onChange={handleChange}

/>



<label>
Category
</label>


<input

name="category"

value={product.category}

onChange={handleChange}

/>



<label>
Price
</label>


<input

name="price"

value={product.price}

onChange={handleChange}

/>



<label>
Stock
</label>


<input

name="stock"

value={product.stock}

onChange={handleChange}

/>



<button

className="save-product-btn"

>

Update Product

</button>



</form>



</div>


);


}


export default EditProduct;