import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({
    cartCount,
    wishlistCount
}) {

    const categories = [
        "🥬 Fruits",
        "🥛 Dairy",
        "🍞 Bakery",
        "🥤 Beverages",
        "🍪 Snacks",
        "🥕 Vegetables",
        "🍫 Chocolates"
    ];

    return (
        <>

            <nav className="navbar">

                <div className="logo">
                    <h2>🛒 FreshCart</h2>
                    <span>Fresh groceries in minutes</span>
                </div>

                <div className="search-box">

                    <input
                        type="text"
                        placeholder="🔍 Search fruits, vegetables, snacks..."
                    />

                </div>

                <div className="nav-right">

                    <Link to="/login">
                        <button className="login-btn">
                            👤 Login
                        </button>
                    </Link>

                    <Link to="/wishlist" className="wishlist-btn">

                        ❤️

                        {
                            wishlistCount > 0 && (
                                <span className="wishlist-count">
                                    {wishlistCount}
                                </span>
                            )
                        }

                    </Link>

                    <Link to="/cart">
                        <button className="cart-btn">
                            🛒 Cart {cartCount}
                        </button>
                    </Link>

                </div>

            </nav>

            <div className="category-bar">

                {
                    categories.map((category, index) => (

                        <span key={index}>
                            {category}
                        </span>

                    ))
                }

            </div>

        </>
    );
}

export default Navbar;