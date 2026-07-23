import "./Hero.css";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <h1>
          Groceries Delivered
          <br />
          <span>in 10 Minutes</span>
        </h1>

        <p>
          Fresh fruits, vegetables, dairy products, bakery items,
          snacks and daily essentials delivered at your doorstep.
        </p>

        <div className="hero-buttons">

          <Link to="/products">
            <button className="shop-btn">
              Shop Now
            </button>
          </Link>

          <Link to="/products">
            <button className="explore-btn">
              Explore Products
            </button>
          </Link>

        </div>

      </div>

      <div className="hero-right">

        <div className="hero-circle">

          🛒🥛🍎🥦🥕🍞🥚

        </div>

      </div>

    </section>
  );
}

export default Hero;