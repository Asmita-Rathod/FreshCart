import "./Products.css";
import { useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";


function Products({

    products,

    cartItems,
    setCartItems,
    wishlistItems,
    setWishlistItems

}){

    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    const [sort, setSort] = useState("name");

    let filteredProducts = products.filter((product) => {

        const matchesSearch =
            product.name.toLowerCase().includes(search.toLowerCase());

        const matchesCategory =
            category === "All" || product.category === category;

        return matchesSearch && matchesCategory;
    });

    if (sort === "price-low") {
        filteredProducts.sort((a, b) => a.price - b.price);
    }

    if (sort === "price-high") {
        filteredProducts.sort((a, b) => b.price - a.price);
    }

    if (sort === "name") {
        filteredProducts.sort((a, b) =>
            a.name.localeCompare(b.name)
        );
    }

    return (

        <section className="products-page">

            <div className="products-header">

                <h1>🛒 All Products</h1>

                <p>
                    Fresh groceries delivered to your doorstep.
                </p>

            </div>

            <div className="products-toolbar">

                <input
                    type="text"
                    placeholder="🔍 Search products..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >

                    <option>All</option>
                    <option>Fruits</option>
                    <option>Vegetables</option>
                    <option>Dairy</option>
                    <option>Bakery</option>
                    <option>Beverages</option>
                    <option>Snacks</option>
                    <option>Chocolates</option>

                </select>

                <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                >

                    <option value="name">Name : A-Z</option>
                    <option value="price-low">
                        Price : Low to High
                    </option>
                    <option value="price-high">
                        Price : High to Low
                    </option>

                </select>

            </div>

            <p className="product-count">
                Showing <strong>{filteredProducts.length}</strong> products
            </p>

            <div className="products-grid">

                {
                    filteredProducts.map((product) => (

                        <ProductCard
                            key={product.id}
                            {...product}
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

export default Products;