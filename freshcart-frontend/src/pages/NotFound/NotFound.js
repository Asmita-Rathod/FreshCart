import "./NotFound.css";
import { Link } from "react-router-dom";

function NotFound() {

    return (

        <div className="notfound-page">

            <div className="notfound-card">

                <h1>404</h1>

                <h2>Oops! Page Not Found</h2>

                <p>
                    The page you are looking for doesn't exist or has been moved.
                </p>

                <Link to="/">

                    <button>
                        🏠 Back To Home
                    </button>

                </Link>

            </div>

        </div>

    );

}

export default NotFound;