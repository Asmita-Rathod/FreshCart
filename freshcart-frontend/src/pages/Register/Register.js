import "./Register.css";
import { Link } from "react-router-dom";

function Register() {

    return (

        <div className="register-page">

            <div className="register-card">

                <h1>🛍️ Create Account</h1>

                <p>
                    Join FreshCart and start shopping fresh groceries.
                </p>

                <form>

                    <input
                        type="text"
                        placeholder="Full Name"
                    />

                    <input
                        type="email"
                        placeholder="Email Address"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                    />

                    <input
                        type="password"
                        placeholder="Confirm Password"
                    />

                    <button>
                        Create Account
                    </button>

                </form>

                <div className="register-links">

                    <p>

                        Already have an account?

                        <Link to="/login">
                            Login
                        </Link>

                    </p>

                </div>

            </div>

        </div>

    );

}

export default Register;