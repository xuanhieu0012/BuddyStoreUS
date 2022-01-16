import React,{useState, useEffect} from "react";
import OrderData from './OrderData'
function OrdersUser(){
    const [orderList, setOrderList] = useState(null)

    useEffect(() =>{
        fetch('/orders')
        .then(res => res.json())
        .then(orderData => setOrderList(orderData))
    },[])
    console.log(orderList)
    const displayOrderList = orderList === null ? <h1>You don't have any orders</h1> : orderList.map(eachOrder => <OrderData eachOrder={eachOrder}/>)

    return <div className="order-list-container">
        <div className="header">
                        <div className="Order-list-Date">
                            <h2>Date</h2>
                        </div>
                        <div className="Order-list-Name">
                            <h2>Name</h2>
                        </div>
                        <div className="Order-list-Price">
                            <h2>Price</h2>
                        </div>
                        <div className="Order-list-Quantity">
                            <h2> Quantity </h2>
                            </div>
                        <div className="Order-list-Total">
                            <h2>Total</h2>
                        </div>
                </div>
        {displayOrderList}
    </div>
}

export default OrdersUser