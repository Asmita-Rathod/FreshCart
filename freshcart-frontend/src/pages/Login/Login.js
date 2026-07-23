import "./Login.css";
import { Link } from "react-router-dom";

function Login() {

    return (

        <div className="login-page">

            <div className="login-card">

                <h1>👋 Welcome Back</h1>

                <p>
                    Login to continue shopping with FreshCart
                </p>

                <form>

                    <input
                        type="email"
                        placeholder="Email Address"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                    />

                    <button>
                        Login
                    </button>

                </form>

                <div className="login-links">

                    <Link to="#">
                        Forgot Password?
                    </Link>

                    <p>
                        Don't have an account?

                        <Link to="/register">
                            Register
                        </Link>

                    </p>

                </div>

            </div>

        </div>

    );

}

export default Login;