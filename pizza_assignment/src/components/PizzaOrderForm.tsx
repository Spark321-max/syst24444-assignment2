//991830507
//Matthew Sanderson

import { useState } from "react";

interface PizzaOrderFormProps {
  setOrderSummary: (summary: any) => void;
}

type PizzaSize = "Small" | "Medium" | "Large" | "Extra Large";


function PizzaOrderForm({ setOrderSummary }: PizzaOrderFormProps) {
  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [size, setSize] = useState<PizzaSize>("Medium");
  const [quantity, setQuantity] = useState(1);
  const [extraCheese, setExtraCheese] = useState(false);
  const [deliveryOption, setDeliveryOption] = useState("Pickup");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");

  const pizzaPrices: Record<PizzaSize, number> = {
    Small: 8,
    Medium: 10,
    Large: 12,
    "Extra Large": 15,
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validation
    if (!customerName || !phone) {
      setError("Please fill in your name and phone number.");
      return;
    }

    if (deliveryOption === "Delivery" && !address) {
      setError("Please enter a delivery address.");
      return;
    }

    setError("");

    // Price Calculation
    const pizzaSubtotal = pizzaPrices[size] * quantity;
    const cheeseCost = extraCheese ? 2 * quantity : 0;
    const deliveryFee = deliveryOption === "Delivery" ? 5 : 0;

    const subtotalBeforeTax = pizzaSubtotal + cheeseCost + deliveryFee;
    const tax = subtotalBeforeTax * 0.13;
    const total = subtotalBeforeTax + tax;

    setOrderSummary({
      customerName,
      phone,
      size,
      quantity,
      extraCheese,
      deliveryOption,
      address,
      pizzaSubtotal,
      cheeseCost,
      deliveryFee,
      tax: tax.toFixed(2),
      total: total.toFixed(2),
    });
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Enter Your Order</h2>

      {error && <p className="error">{error}</p>}

      <label>Customer Name:</label>
      <input
        type="text"
        value={customerName}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCustomerName(e.target.value)}
      />

      <label>Phone Number:</label>
      <input
        type="text"
        value={phone}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)}
      />

      <label>Pizza Size:</label>
      <select value={size} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSize(e.target.value as PizzaSize)}>
        <option>Small</option>
        <option>Medium</option>
        <option>Large</option>
        <option>Extra Large</option>
      </select>

      <label>Quantity:</label>
      <input
        type="number"
        min="1"
        value={quantity}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuantity(Number(e.target.value))}
      />

      <label>
        <input
          type="checkbox"
          checked={extraCheese}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setExtraCheese(e.target.checked)}
        />
        Extra Cheese (+$2 per pizza)
      </label>

      <label>Pickup or Delivery:</label>
      <select
        value={deliveryOption}
        onChange={(e) => setDeliveryOption(e.target.value)}
      >
        <option>Pickup</option>
        <option>Delivery</option>
      </select>

      {deliveryOption === "Delivery" && (
        <>
          <label>Delivery Address:</label>
          <input
            type="text"
            value={address}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAddress(e.target.value)}
          />
        </>
      )}

      <button type="submit">Calculate Order</button>
    </form>
  );
}

export default PizzaOrderForm;
