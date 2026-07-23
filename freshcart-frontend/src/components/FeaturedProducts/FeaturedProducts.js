import "./FeaturedProducts.css";
import ProductCard from "../ProductCard/ProductCard";
import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";


function FeaturedProducts({

    products,

    cartItems,
    setCartItems,
    wishlistItems,
    setWishlistItems

}){
    const [search, setSearch] = useState("");


    return (
        <section className="featured-products">

            <h2>Featured Products</h2>
                    <p className="subtitle">
            Fresh products handpicked for you.
        </p>
            <SearchBar
                search={search}
                setSearch={setSearch}
            />
            <div className="product-container">

                {
                    products
                        .filter((product) =>
                            product.name.toLowerCase().includes(search.toLowerCase())
                        )
                        .map((product) => (
                            <ProductCard
    key={product.id}
    id={product.id}
    emoji={product.emoji}
    name={product.name}
    price={product.price}
    category={product.category}
    description={product.description}
    cartItems={cartItems}
    setCartItems={setCartItems}
    wishlistItems={wishlistItems}
    setWishlistItems={setWishlistItems}
/>
                    ))
                }

            </div>

        </section>
    );
}

export default FeaturedProducts;