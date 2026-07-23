import "./ProductDetails.css";
import { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../../data/products";
import ProductCard from "../../components/ProductCard/ProductCard";

function ProductDetails({
    cartItems,
    setCartItems
}) {

    const { id } = useParams();
    const [quantity, setQuantity] = useState(1);

    const product = products.find(
        (item) => item.id === Number(id)
    );

    if (!product) {
        return <h2>Product Not Found</h2>;
    }

    return (

        <div className="product-details">

            <div className="product-box">
                

                {/* Left Side */}
                <div className="product-image-section">

                    <div className="big-image">
                        {product.emoji}
                    </div>

                </div>

                {/* Right Side */}
                <div className="product-info">

                    <h1>{product.name}</h1>

                    <p className="rating">
                        ⭐⭐⭐⭐⭐ <span>4.8</span>
                    </p>

                    <h2 className="price">
                        ₹{product.price}
                    </h2>

                    <p className="category">
                        Category: <strong>{product.category}</strong>
                    </p>

                    <div className="delivery-box">

                        <p>⚡ Delivery in 10 Minutes</p>

                        <p>✔ In Stock</p>

                        <p>🔄 Easy Return</p>

                    </div>

                    <p className="description">
                        {product.description}
                    </p>

                    <div className="features">

                        <h4>Product Highlights</h4>

                        <ul>

                            <li>🌿 Farm Fresh Quality</li>

                            <li>🥇 Premium Grade</li>

                            <li>🚚 Fast Delivery</li>

                            <li>💯 Quality Checked</li>

                        </ul>

                    </div>

                    <div className="cart-actions">

                        <div className="quantity-box">

                            <button
                                onClick={() => {
                                    if (quantity > 1) {
                                        setQuantity(quantity - 1);
                                    }
                                }}
                            >
                                -
                            </button>

                            <span>{quantity}</span>

                            <button
                                onClick={() => setQuantity(quantity + 1)}
                            >
                                +
                            </button>

                        </div>

                        <button
                            className="cart-btn"
                            onClick={() => {

                                const existingProduct = cartItems.find(
                                    item => item.id === product.id
                                );

                                if (existingProduct) {

                                    const updatedCart = cartItems.map(item =>

                                        item.id === product.id

                                            ? {
                                                ...item,
                                                quantity: item.quantity + quantity
                                            }

                                            : item

                                    );

                                    setCartItems(updatedCart);

                                } else {

                                    setCartItems([

                                        ...cartItems,

                                        {
                                            ...product,
                                            quantity
                                        }

                                    ]);

                                }

                            }}
                        >

                            🛒 Add To Cart

                        </button>

                    </div>

                    <button className="buy-btn">

                        ⚡ Buy Now

                    </button>

                </div>

            </div>
                    <div className="related-products">

            <h2>You May Also Like</h2>

            <div className="related-grid">

                {products
                    .filter(
                        item =>
                            item.category === product.category &&
                            item.id !== product.id
                    )
                    .slice(0, 4)
                    .map(item => (

                        <ProductCard
                            key={item.id}
                            {...item}
                            cartItems={cartItems}
                            setCartItems={setCartItems}
                        />

                    ))}

            </div>

        </div>

        </div>
        

    );

}

export default ProductDetails;