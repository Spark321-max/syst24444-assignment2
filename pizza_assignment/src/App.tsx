//991830507
//Matthew Sanderson

import { useState } from "react";
import PizzaOrderForm from "./components/PizzaOrderForm";
import OrderSummary from "./components/OrderSummary";
import "./App.css";

function App() {
  const [orderSummary, setOrderSummary] = useState(null);

  return (
    <div className="app-container">
      <h1>Pizza Ordering App</h1>

      <PizzaOrderForm setOrderSummary={setOrderSummary} />

      {orderSummary && <OrderSummary summary={orderSummary} />}
    </div>
  );
}

export default App;
