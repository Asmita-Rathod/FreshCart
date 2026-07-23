import "./CategoriesGrid.css";

function CategoriesGrid() {

   const categories = [

    {
        emoji:"🥬",
        name:"Fruits",
        count:"24 Products"
    },

    {
        emoji:"🥛",
        name:"Dairy",
        count:"18 Products"
    },

    {
        emoji:"🍞",
        name:"Bakery",
        count:"12 Products"
    },

    {
        emoji:"🥤",
        name:"Beverages",
        count:"30 Products"
    },

    {
        emoji:"🥕",
        name:"Vegetables",
        count:"21 Products"
    },

    {
        emoji:"🍫",
        name:"Chocolates",
        count:"14 Products"
    },

    {
        emoji:"🍪",
        name:"Snacks",
        count:"35 Products"
    },

    {
        emoji:"🥚",
        name:"Eggs",
        count:"9 Products"
    }

];

    return (

        <section className="categories-grid">

            <h2>Shop by Category</h2>

            <div className="grid">

                {
                    categories.map((item,index)=>(

                        <div
                            key={index}
                            className="category-card"
                        >

                            <div className="category-icon">

                                {item.emoji}

                            </div>

                            <h3>{item.name}</h3>
                            <p>{item.count}</p>

                        </div>

                    ))
                }

            </div>

        </section>

    );

}

export default CategoriesGrid;