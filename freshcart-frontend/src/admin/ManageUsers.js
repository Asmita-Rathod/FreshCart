import React, { useState } from "react";


function ManageUsers(){


    const [users, setUsers] = useState([

        {
            id:1,
            name:"Rahul Sharma",
            email:"rahul@gmail.com",
            phone:"9876543210",
            orders:5,
            status:"Active"
        },


        {
            id:2,
            name:"Priya Patel",
            email:"priya@gmail.com",
            phone:"9876543211",
            orders:8,
            status:"Active"
        },


        {
            id:3,
            name:"Amit Shah",
            email:"amit@gmail.com",
            phone:"9876543212",
            orders:2,
            status:"Blocked"
        }


    ]);




    const changeStatus = (id)=>{


        setUsers(

            users.map((user)=>


                user.id === id

                ?

                {

                    ...user,

                    status:
                    user.status === "Active"
                    ?
                    "Blocked"
                    :
                    "Active"

                }

                :

                user


            )

        );


    };




    return(


        <div className="user-page">


            <h1>
                Manage Users
            </h1>




            <table>


                <thead>


                    <tr>

                        <th>
                            ID
                        </th>

                        <th>
                            Name
                        </th>

                        <th>
                            Email
                        </th>

                        <th>
                            Phone
                        </th>

                        <th>
                            Orders
                        </th>

                        <th>
                            Status
                        </th>

                        <th>
                            Action
                        </th>


                    </tr>


                </thead>



                <tbody>


                {
                    users.map((user)=>(


                        <tr key={user.id}>


                            <td>
                                {user.id}
                            </td>


                            <td>
                                {user.name}
                            </td>


                            <td>
                                {user.email}
                            </td>


                            <td>
                                {user.phone}
                            </td>


                            <td>
                                {user.orders}
                            </td>


                            <td>

                                <span
                                className={
                                    user.status === "Active"
                                    ?
                                    "active-status"
                                    :
                                    "blocked-status"
                                }
                                >

                                    {user.status}

                                </span>

                            </td>



                            <td>


                                <button

                                className="status-btn"

                                onClick={()=>changeStatus(user.id)}

                                >

                                    {
                                        user.status === "Active"
                                        ?
                                        "Block"
                                        :
                                        "Activate"
                                    }

                                </button>


                            </td>



                        </tr>


                    ))
                }


                </tbody>


            </table>



        </div>


    );

}


export default ManageUsers;