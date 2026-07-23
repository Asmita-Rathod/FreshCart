import "./WhyChooseUs.css";

function WhyChooseUs() {

    return (

        <section className="why">

            <div className="why-heading">

                <h2>Why Choose FreshCart?</h2>

                <p>
                    Experience grocery shopping that's fast, fresh, and affordable.
                    We deliver quality products right to your doorstep.
                </p>

            </div>

            <div className="why-container">

                <div className="why-card">

                    <div className="why-icon">🚚</div>

                    <h3>Lightning Fast Delivery</h3>

                    <p>
                        Get your groceries delivered in as little as 10–30 minutes.
                    </p>

                </div>

                <div className="why-card">

                    <div className="why-icon">🥬</div>

                    <h3>Farm Fresh Products</h3>

                    <p>
                        Carefully selected fruits, vegetables and dairy delivered fresh every day.
                    </p>

                </div>

                <div className="why-card">

                    <div className="why-icon">💳</div>

                    <h3>Secure Payments</h3>

                    <p>
                        Pay safely using UPI, Cards, Net Banking or Cash on Delivery.
                    </p>

                </div>

                <div className="why-card">

                    <div className="why-icon">⭐</div>

                    <h3>Premium Quality</h3>

                    <p>
                        Every product goes through quality checks before reaching you.
                    </p>

                </div>

            </div>

        </section>

    );

}

export default WhyChooseUs;