import React from "react";

import {
    FaBox,
    FaShoppingCart,
    FaUsers,
    FaRupeeSign
} from "react-icons/fa";


import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,

    PieChart,
    Pie,
    Cell
} from "recharts";



function AdminDashboard({products}){


    const salesData = [

        {
            month:"Jan",
            sales:4000
        },

        {
            month:"Feb",
            sales:7000
        },

        {
            month:"Mar",
            sales:5000
        },

        {
            month:"Apr",
            sales:9000
        },

        {
            month:"May",
            sales:12000
        },

        {
            month:"Jun",
            sales:15000
        }

    ];



    const orderData = [

        {
            name:"Delivered",
            value:70
        },

        {
            name:"Pending",
            value:20
        },

        {
            name:"Cancelled",
            value:10
        }

    ];




    return(


        <div className="dashboard">


            <h1>
                Dashboard
            </h1>



            {/* Cards */}

            <div className="cards">


                <div className="card">

                    <FaBox size={30}/>

                    <h3>
                        Products
                    </h3>

                    <h2>
                    {products.length}
                    </h2>

                </div>



                <div className="card">

                    <FaShoppingCart size={30}/>

                    <h3>
                        Orders
                    </h3>

                    <h2>
                        85
                    </h2>

                </div>



                <div className="card">

                    <FaUsers size={30}/>

                    <h3>
                        Users
                    </h3>

                    <h2>
                        250
                    </h2>

                </div>



                <div className="card">

                    <FaRupeeSign size={30}/>

                    <h3>
                        Revenue
                    </h3>

                    <h2>
                        ₹50,000
                    </h2>

                </div>


            </div>





            {/* Charts */}


            <div className="charts-container">



                <div className="chart-box">


                    <h2>
                        Sales Overview
                    </h2>


                    <ResponsiveContainer 
                    width="100%" 
                    height={300}
                    >

                        <LineChart data={salesData}>


                            <CartesianGrid 
                            strokeDasharray="3 3"
                            />


                            <XAxis 
                            dataKey="month"
                            />


                            <YAxis />


                            <Tooltip />


                            <Line

                            type="monotone"

                            dataKey="sales"

                            strokeWidth={3}

                            />



                        </LineChart>


                    </ResponsiveContainer>



                </div>





                <div className="chart-box">


                    <h2>
                        Order Status
                    </h2>



                    <ResponsiveContainer
                    width="100%"
                    height={300}
                    >


                        <PieChart>


                            <Pie

                            data={orderData}

                            dataKey="value"

                            nameKey="name"

                            outerRadius={100}

                            label

                            >


                            {
                                orderData.map(
                                    (entry,index)=>(

                                    <Cell 
                                    key={index}
                                    />

                                    )
                                )
                            }


                            </Pie>


                            <Tooltip />


                        </PieChart>



                    </ResponsiveContainer>



                </div>



            </div>





        </div>


    );

}



export default AdminDashboard;