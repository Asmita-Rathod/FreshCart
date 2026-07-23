import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {

    return (

        <footer className="footer">

            <div className="footer-container">

                {/* Company */}

                <div className="footer-section">

                    <h2>🛒 FreshCart</h2>

                    <p>
                        Fresh groceries delivered to your doorstep in minutes.
                        Quality products, affordable prices and lightning-fast delivery.
                    </p>

                </div>

                {/* Quick Links */}

                <div className="footer-section">

                    <h3>Quick Links</h3>

                    <ul>

                        <li>
                            <Link to="/">Home</Link>
                        </li>

                        <li>
                            <Link to="/products">Products</Link>
                        </li>

                        <li>
                            <Link to="/cart">Cart</Link>
                        </li>

                        <li>
                            <Link to="/login">Login</Link>
                        </li>

                        <li>
                            <Link to="/register">Register</Link>
                        </li>

                    </ul>

                </div>

                {/* Categories */}

                <div className="footer-section">

                    <h3>Categories</h3>

                    <ul>

                        <li>🥬 Vegetables</li>

                        <li>🍎 Fruits</li>

                        <li>🥛 Dairy</li>

                        <li>🍞 Bakery</li>

                    </ul>

                </div>

                {/* Contact */}

                <div className="footer-section">

                    <h3>Contact</h3>

                    <p>📍 Ahmedabad, Gujarat</p>

                    <p>📞 +91 98765 43210</p>

                    <p>✉ support@freshcart.com</p>

                    <div className="social-icons">

                        <span>📘</span>

                        <span>📸</span>

                        <span>🐦</span>

                        <span>▶</span>

                    </div>

                </div>

            </div>

            <hr />

            <p className="copyright">

                © 2026 FreshCart. Made with ❤️ using React.

            </p>

        </footer>

    );

}

export default Footer;