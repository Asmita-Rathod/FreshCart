import "./Categories.css";

function Categories() {

    const categories = [
        "🥬 Vegetables",
        "🍎 Fruits",
        "🥛 Dairy",
        "🍞 Bakery",
        "🥤 Beverages",
        "🍪 Snacks",
        "🍚 Rice",
        "🌶️ Spices"
    ];

    return (
        <section className="categories">

            <h2>Shop By Category</h2>

            <div className="category-container">

                {
                    categories.map((category, index) => (

                        <div className="category-card" key={index}>

                            {category}

                        </div>

                    ))
                }

            </div>

        </section>
    );
}

export default Categories;