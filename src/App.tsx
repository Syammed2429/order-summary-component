import React from 'react';
import './App.css';
import { OrderSummary } from './Components/order-summary/Order-Summary';

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <OrderSummary />
        </header>
      </div>
    </>
  );
}

export default App;
