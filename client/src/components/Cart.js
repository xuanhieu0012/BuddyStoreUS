import React,{useState} from 'react';
import TopHeader from './TopHeader'
import CartProduct from './CartProduct'
import NavBar from './homepage/NavBar'
function Cart({cartData, handleRemoveCartList, handleCartData, setCartData, currentUser}){
    const [totalPrice, setTotalPrice]= useState(0)
    console.log(cartData)
    const itemPrice = cartData.reduce((current, productData) => current + productData.price * productData.qty, 0)
    const taxRate = 8
    const shippingRate = 10
    const subtotal = (itemPrice+ shippingRate + (itemPrice * (taxRate /100))).toFixed(2)

    const displayCartDataFlower= cartData.map(eachProduct => <CartProduct
        key={eachProduct.id} 
        eachProduct={eachProduct} 
        handleRemoveCartList={handleRemoveCartList}
        setTotalPrice={setTotalPrice}
        totalPrice={totalPrice}
        handleCartData={handleCartData}
        />)
        
        
        function handleCheckout(){
            console.log(cartData)
            fetch('/orders',{
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({order: cartData, user_id: currentUser.id, total: subtotal})
            })
            setCartData([])
        }


        return (
            <div className="cartContainerList">
                <TopHeader />
                <NavBar />

               <img className="cartpageImage" src="https://www.utopiaeco.com/images/FREE%20SHIPPING.jpg" alt='cart'/>
            <h1>Shopping Cart </h1>
            <div className="whole-cartContainer">
                {cartData.length === 0 ? null: (<div className="header">
                        <div className="picture-card-text">
                            <h2>Picture</h2>
                        </div>
                        <div className="name-card-text">
                            <h2>Name</h2>
                        </div>
                        <div className="quantity-card-text">
                            <h2> Quantity </h2>
                            </div>
                        <div className="price-card-text">
                            <h2>Price</h2>
                        </div>
                </div>)}
                
                {cartData.length === 0 ? <h1>You have nothing in cart</h1> : displayCartDataFlower}
                
                {cartData.length === 0 ? null: <div className="cartTotal">
                    
                    <br />
                    Total Flower Price: ${itemPrice} 
                    <br />
                    Tax: {taxRate}%
                    <br />
                    Shipping: $ {subtotal > 100 ? "Free" : shippingRate}
                    <br />
                    Subtotal: ${subtotal > 100 ? subtotal - shippingRate : subtotal}
                    
                    <button onClick={handleCheckout}>Check Out</button>
                    </div>}
                
                </div>
            </div>
            )}

export default Cart;