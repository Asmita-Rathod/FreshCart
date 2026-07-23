import "./ProductCard.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
function ProductCard({
    id,
    emoji,
    name,
    price,
    category,
    description,
    cartItems,
    setCartItems,wishlistItems,
    setWishlistItems
}) {

    return (

        <div className="product-card">

            <div
    className="wishlist"
    onClick={() => {

        const existing = wishlistItems.find(
            item => item.id === id
        );

        if(existing){

            setWishlistItems(

                wishlistItems.filter(
                    item => item.id !== id
                )   

            );
            toast.info("Removed from Wishlist 🤍");

        }

        else{

            setWishlistItems([

                ...wishlistItems,

                {
                    id,
                    emoji,
                    name,
                    price,
                    category,
                    description
                }

            ]);

        }
        toast.success("Added to Wishlist ❤️");

    }}
>

{
    wishlistItems.find(item => item.id === id)

    ?

    "❤️"

    :

    "🤍"

}


</div>

            <div className="product-image">
                {emoji}
            </div>

            <Link to={`/products/${id}`} className="product-link">
                <h3>{name}</h3>
            </Link>

            <p className="rating">
                ⭐⭐⭐⭐⭐ <span>4.8</span>
            </p>

            <p className="description">
                {description}
            </p>

            <div className="bottom">

                <div>

                    <h2>₹{price}</h2>

                </div>

                <button

                    onClick={() => {

                        const product = {

                            id,
                            emoji,
                            name,
                            price,
                            category,
                            description,
                            quantity:1

                        };

                        const existingProduct = cartItems.find(

                            item => item.id === id

                        );

                        if(existingProduct){

                            const updatedCart = cartItems.map(item =>

                                item.id === id

                                ? {

                                    ...item,

                                    quantity:item.quantity + 1

                                }

                                : item

                            );

                            setCartItems(updatedCart);
                            toast.success("Added to Cart 🛒");

                        }

                        else{

                            setCartItems([

                                ...cartItems,

                                product

                            ]);

                        }

                    }}

                >

                    + Add

                </button>

            </div>

        </div>

    );

}

export default ProductCard;