import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Products from './Products';
import Cart from './Cart';

function App() {
  const [BuyItems, SetBuyItems] = useState([
    { id: 1, name: "kif", amount: 0, TotalPrice: 0 },
    { id: 2, name: "kooleh", amount: 0, TotalPrice: 0 },
    { id: 3, name: "kafsh", amount: 0, TotalPrice: 0 },
  ]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <div>
          <h2>Carts</h2>
          <Cart BuyItems = {BuyItems}/>
        </div>

        <div>
          <h2>Products</h2>
          <Products BuyItems = {BuyItems} SetBuyItems = {SetBuyItems}/>
        </div>
        
      </header>
    </div>
  );
}

export default App;
