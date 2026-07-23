import "./Home.css";

import Hero from "../../components/Hero/Hero";
import OfferSection from "../../components/OfferSection/OfferSection";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import CategoriesGrid from "../../components/CategoriesGrid/CategoriesGrid";

function Home({
products,
cartItems,
setCartItems,
wishlistItems,
setWishlistItems
}) {
    return (
        <div>

            <Hero />
            <CategoriesGrid />

<FeaturedProducts

products={products}

cartItems={cartItems}

setCartItems={setCartItems}

wishlistItems={wishlistItems}

setWishlistItems={setWishlistItems}

/>
            <OfferSection />

            <WhyChooseUs />

        </div>
    );
}

export default Home;