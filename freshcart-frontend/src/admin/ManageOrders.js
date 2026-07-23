import React, { useState } from "react";


function ManageOrders(){



const [orders,setOrders] = useState(()=>{


return JSON.parse(

localStorage.getItem("orders")

) || [];


});





const updateStatus = (id,status)=>{


const updatedOrders = orders.map((order)=>


order.id === id

?

{

...order,

status:status

}

:

order


);



setOrders(updatedOrders);



localStorage.setItem(

"orders",

JSON.stringify(updatedOrders)

);



};






return(



<div className="order-page">



<h1>
Manage Orders
</h1>





{

orders.length === 0 ?


(

<h2>
No Orders Available
</h2>

)


:


(



<table>



<thead>


<tr>


<th>
Order ID
</th>


<th>
Customer
</th>


<th>
Products
</th>


<th>
Amount
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


orders.map((order)=>(



<tr key={order.id}>


<td>

#{order.id}

</td>





<td>

{order.customer}

</td>






<td>


{

order.products.map((item,index)=>(


<div key={index}>


{item.name} × {item.quantity}


</div>


))


}


</td>






<td>


₹{order.amount}


</td>







<td>


<select


value={order.status}


onChange={(e)=>

updateStatus(

order.id,

e.target.value

)

}



>



<option>

Pending

</option>


<option>

Processing

</option>



<option>

Delivered

</option>



<option>

Cancelled

</option>



</select>


</td>






<td>


<button

className="update-btn"

onClick={()=>


alert("Order Updated")


}

>


Update


</button>


</td>






</tr>



))


}



</tbody>





</table>



)


}






</div>


);


}



export default ManageOrders;