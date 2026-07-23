import "./Cart.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


function Cart({ cartItems, setCartItems }) {


    const navigate = useNavigate();



    const totalPrice = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );


    const totalItems = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );


    const discount = totalPrice >= 500 ? 20 : 0;


    const finalTotal = totalPrice - discount;





    const increaseQuantity = (id) => {


        const updatedCart = cartItems.map((item) => {


            if (item.id === id) {


                return {

                    ...item,

                    quantity: item.quantity + 1

                };


            }


            return item;


        });



        setCartItems(updatedCart);

        toast.success("Quantity Updated");


    };





    const decreaseQuantity = (id) => {


        const updatedCart = cartItems

            .map((item) => {


                if (item.id === id) {


                    return {

                        ...item,

                        quantity: item.quantity - 1

                    };


                }


                return item;


            })

            .filter((item) => item.quantity > 0);



        setCartItems(updatedCart);

        toast.info("Quantity Updated");


    };





    const removeItem = (id) => {


        setCartItems(

            cartItems.filter(

                (item) => item.id !== id

            )

        );


        toast.error("Item Removed");


    };





    // CREATE ORDER

    const placeOrder = () => {



        const newOrder = {


            id: Date.now(),


            customer:"Guest User",


            products: cartItems.map((item)=>(

                {

                    name:item.name,

                    quantity:item.quantity

                }

            )),


            amount:finalTotal,


            status:"Pending",


            date:new Date().toLocaleDateString()


        };





        const existingOrders = JSON.parse(

            localStorage.getItem("orders")

        ) || [];





        localStorage.setItem(

            "orders",

            JSON.stringify(

                [

                    ...existingOrders,

                    newOrder

                ]

            )

        );





        setCartItems([]);





        toast.success(

            "Order Placed Successfully 🎉"

        );





        navigate("/");


    };







    return (


        <div className="cart-page">



            <h1>
                🛒 Shopping Cart
            </h1>





            {


                cartItems.length === 0 ?



                (



                    <div className="empty-cart">



                        <h2>
                            Your Cart is Empty 😔
                        </h2>




                        <Link to="/products">


                            <button>


                                Start Shopping


                            </button>


                        </Link>



                    </div>



                )



                :



                (



                    <>


                    {


                        cartItems.map((item)=>(



                            <div

                            className="cart-item"

                            key={item.id}

                            >



                                <div className="cart-left">



                                    <div className="cart-image">


                                        {item.emoji}


                                    </div>




                                    <div>


                                        <h2>

                                            {item.name}

                                        </h2>



                                        <p>

                                            {item.category}

                                        </p>



                                        <h3>

                                            ₹{item.price}

                                        </h3>



                                    </div>



                                </div>






                                <div className="cart-right">



                                    <div className="quantity-box">



                                        <button

                                        onClick={()=>
                                            decreaseQuantity(item.id)
                                        }

                                        >

                                            -

                                        </button>



                                        <span>

                                            {item.quantity}

                                        </span>




                                        <button

                                        onClick={()=>
                                            increaseQuantity(item.id)
                                        }

                                        >

                                            +

                                        </button>



                                    </div>





                                    <h3>

                                        ₹{item.price * item.quantity}

                                    </h3>





                                    <button

                                    className="remove-btn"

                                    onClick={()=>
                                        removeItem(item.id)
                                    }

                                    >


                                        🗑 Remove


                                    </button>





                                </div>



                            </div>



                        ))


                    }





                    <div className="order-summary">





                        <h2>

                            📋 Order Summary

                        </h2>






                        <div className="summary-row">


                            <span>

                                Items ({totalItems})

                            </span>


                            <span>

                                ₹{totalPrice}

                            </span>


                        </div>





                        <div className="summary-row">


                            <span>

                                Delivery

                            </span>


                            <span>

                                FREE

                            </span>


                        </div>





                        <div className="summary-row">


                            <span>

                                Discount

                            </span>


                            <span>

                                -₹{discount}

                            </span>


                        </div>





                        <hr />





                        <div className="summary-total">



                            <span>

                                Total

                            </span>



                            <span>

                                ₹{finalTotal}

                            </span>



                        </div>





                        <p className="saved">


                            🎉 You saved ₹{discount} today!


                        </p>






                        <button

                        className="checkout-btn"

                        onClick={placeOrder}

                        >


                            Proceed To Checkout


                        </button>







                        <Link to="/products">


                            <button

                            className="continue-btn"

                            >


                                ← Continue Shopping


                            </button>


                        </Link>






                    </div>




                    </>


                )



            }




        </div>


    );


}



export default Cart;