import React from 'react';

function OrderData({eachOrder}){
  
    const displayOrder = eachOrder.order_products.map(order => <div className="each-order-list-container"> 
        <div >
        <h3>{order.product_details.name}</h3>
        </div>
        <div className="price-list-order">
        <p >$ {order.product_details.price}  </p>
        </div>
        <div>
        <p>{order.qty}</p>
        </div>
        
    </div>)
    return <div className="each-order-container">
        <div className="order-id"><strong>{eachOrder.created_at.slice(0,10)}</strong></div>
        <div>{displayOrder}</div>
        <p className="total-price-order">$ {eachOrder.total}</p>
    </div>
}

export default OrderData;