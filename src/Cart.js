import React from "react";

function Cart({BuyItems}){
    return (
    <div className="card">
        <h1>Items: </h1>
        {BuyItems.map((Item,index) =>{
            return( Item.amount &&
                <div key = {index}>
                    <h1>Name: {Item.name}</h1>
                    <h2>Amount: {Item.amount}</h2>
                    <h2>Amount: {Item.TotalPrice}</h2>
                </div>
            );
        }
        )}
    </div>
    );
}
export default Cart;