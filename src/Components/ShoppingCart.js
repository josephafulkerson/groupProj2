import React from "react";
import swal from 'sweetalert'

function ShoppingCart({cartItems, handleAddCart, handleRemoveCart}) {
    const itemsPrice = cartItems.reduce((a,c) => a + c.price * c.qty, 0)
    const taxPrice = itemsPrice * .0813;
    const shippingPrice = itemsPrice > 150 ? 0 : 18;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;

    return (
        <div>
            <h2 className="cart">
                Shopping Cart
            </h2>
            <div className="emptyCart">
                {cartItems.length === 0 && <div> Cart is Empty </div> }
            </div>
            {cartItems.map((item) => (
                <div key={item.id} className="row"> 
                    <img src={item.image} height="50" width="50"></img>
                    <div className="elementText">{item.name}</div>
                    <div className="addRemButtons">
                        <button onClick={()=>handleAddCart(item)} className="add"> + </button>
                        <button onClick={()=>handleRemoveCart(item)} className="remove"> - </button>
                    </div>
                    <div className="itemPrice">
                        {item.qty} x ${item.price.toFixed(2)}
                    </div>
                </div>
        ))} 
        {cartItems.length !== 0 && (
            <div className="checkout">
                <hr></hr>
                <div>
                    <div>Items Price</div>
                    <div>${itemsPrice.toFixed(2)}</div>
                </div>
                <div>
                    <div>Tax Price</div>
                    <div>${taxPrice.toFixed(2)}</div>
                </div>
                <div>
                    <div>Shipping Price</div>
                    <div>${shippingPrice.toFixed(2)}</div>
                </div>
                <div>
                    <div>
                        <strong>Total Price</strong>
                    </div>
                    <div>${totalPrice.toFixed(2)}</div>
                </div>
                <hr></hr> 
                    <div>
                        <button onClick={() => swal("Checkout complete!", "End of Demo", "success")}>
                            Checkout
                        </button>
                    </div>       
            </div>
        )}
        </div>
    )
}

export default ShoppingCart;