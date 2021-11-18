import React,{useState, useEffect} from "react";

function OrdersUser(){
    const [orderList, setOrderList] = useState(null)

    useEffect(() =>{
        fetch('/orders')
        .then(res => res.json())
        .then(orderData => setOrderList(orderData))
    },[])
    console.log(orderList)
    const displayOrderList = orderList === null ? "You don't have any orders" : orderList.map(eachOrder => console.log(JSON.parse(JSON.stringify(eachOrder))))
    return <div>{displayOrderList}</div>
}

export default OrdersUser