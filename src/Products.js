import React, { useEffect, useState } from "react"

function Products({BuyItems,SetBuyItems}){

    const products = [
        {id:1,name:"kif",price:200000},
        {id:2,name:"kooleh",price:250000},
        {id:3,name:"kafsh",price:400000}
    ];

    const[orderList, SetOrderList] = useState([]);
    const tempOrderList = orderList;

    const handleMosbat = (id) =>{
        tempOrderList[id] = (tempOrderList[id] && tempOrderList[id]+1) || 1; 
        SetOrderList([...tempOrderList])
    }

    const handleManfi = (id) =>{
        tempOrderList[id] = tempOrderList[id] && tempOrderList[id] -1;
        if(tempOrderList[id] <1) tempOrderList[id] = null;
        SetOrderList([...tempOrderList]);
    }

    // useEffect(() =>{
    //     let tempBuyItems = BuyItems;
    //     products.map((product) =>{
    //         tempBuyItems[products.id] = {};
    //         tempBuyItems[products.id].name = products.name;
    //         tempBuyItems[products.id].amount = orderList[products.id];
    //         tempBuyItems[products.id].TotalPrice = products.price * orderList[products.id];
    //     });
    //     SetBuyItems([...tempBuyItems]);
    // },[orderList]);
    useEffect(() => {
        let tempBuyItems = [...BuyItems];
        products.forEach((product) => {
          const index = tempBuyItems.findIndex((item) => item.id === product.id);
          if (index !== -1) {
            tempBuyItems[index].amount = orderList[product.id] || 0;
            tempBuyItems[index].TotalPrice = product.price * tempBuyItems[index].amount;
          }
        });
        SetBuyItems(tempBuyItems);
      }, [orderList]);

    return(
        <div className="products">
            {
            products.map((product) => {
                return(
                <div key={product.id} className="box">
                    <div>Name: {product.name}</div>
                    <div>Price: {product.price}</div>
                    <button onClick = {() => handleMosbat(product.id)}>+</button>
                    <button onClick = {() => handleManfi(product.id)}>-</button>
                </div>
            );
        })
          }
        </div>
    );
}
export default Products;