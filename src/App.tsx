import React from 'react';
import './App.css';
import { OrderSummary } from './Components/order-summary/Order-Summary';
import TimeConverter from './Components/order-summary/TimeConvertor';

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <OrderSummary />
          <TimeConverter />
        </header>
      </div>
    </>
  );
}

export default App;
