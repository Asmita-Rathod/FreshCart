import "./OfferSection.css";

function OfferSection() {

    return (

        <section className="offer-section">

            <div className="offer-card orange">

                <div>

                    <h2>🥬 Fresh Vegetables</h2>

                    <p>
                        Get up to <strong>25% OFF</strong> on fresh vegetables.
                    </p>

                    <button>Shop Now</button>

                </div>

            </div>

            <div className="offer-card purple">

                <div>

                    <h2>🥛 Dairy Special</h2>

                    <p>
                        Buy 2 Get 1 FREE on selected dairy products.
                    </p>

                    <button>Explore</button>

                </div>

            </div>

        </section>

    );

}

export default OfferSection;