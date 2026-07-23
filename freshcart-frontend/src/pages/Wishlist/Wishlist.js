import "./Wishlist.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
function Wishlist({

    wishlistItems,
    setWishlistItems,
    cartItems,
    setCartItems

}){

    const removeItem = (id)=>{

    setWishlistItems(

        wishlistItems.filter(

            item=>item.id!==id

        )

    );

    toast.error("Removed from Wishlist ❤️");

};
    const addToCart = (product)=>{

        const existing = cartItems.find(

            item=>item.id===product.id

        );

        if(existing){

            const updated = cartItems.map(item=>

                item.id===product.id

                ?

                {

                    ...item,

                    quantity:item.quantity+1

                }

                :

                item

            );

            setCartItems(updated);
            toast.success("Added to Cart 🛒");

        }

        else{

            setCartItems([

                ...cartItems,

                {

                    ...product,

                    quantity:1

                }
                

            ]);
            toast.success("Added to Cart 🛒");

        }

    };

    return(

        <div className="wishlist-page">

            <h1>

                ❤️ My Wishlist

            </h1>

            {

                wishlistItems.length===0

                ?

                <div className="empty">

                    <h2>

                        Your Wishlist is Empty

                    </h2>

                    <Link to="/products">

                        <button>

                            Browse Products

                        </button>

                    </Link>

                </div>

                :

                wishlistItems.map(item=>(

                    <div
                        className="wishlist-card"
                        key={item.id}
                    >

                        <div className="left">

                            <div className="emoji">

                                {item.emoji}

                            </div>

                            <div>

                                <h2>

                                    {item.name}

                                </h2>

                                <p>

                                    {item.description}

                                </p>

                                <h3>

                                    ₹{item.price}

                                </h3>

                            </div>

                        </div>

                        <div className="right">

                            <button
                                className="cart-btn"
                                onClick={()=>addToCart(item)}
                            >
                                
                                🛒 Add To Cart

                            </button>

                            <button
                                className="remove-btn"
                                onClick={()=>removeItem(item.id)}
                                
                            >

                                Remove

                            </button>
                        
                        </div>

                    </div>
                    

                ))

            }

        </div>

    );

}

export default Wishlist;