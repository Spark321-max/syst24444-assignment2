//991830507
//Matthew Sanderson

interface SummaryType {
  customerName: string;
  phone: string;
  size: string;
  quantity: number;
  extraCheese: boolean;
  deliveryOption: string;
  address: string;
  pizzaSubtotal: number;
  cheeseCost: number;
  deliveryFee: number;
  tax: string;
  total: string;
}

function OrderSummary({ summary }: { summary: SummaryType }) {
  return (
    <div className="summary-container">
      <h2>Order Summary</h2>

      <p><strong>Name:</strong> {summary.customerName}</p>
      <p><strong>Phone:</strong> {summary.phone}</p>
      <p><strong>Pizza Size:</strong> {summary.size}</p>
      <p><strong>Quantity:</strong> {summary.quantity}</p>
      <p><strong>Extra Cheese:</strong> {summary.extraCheese ? "Yes" : "No"}</p>
      <p><strong>Delivery Option:</strong> {summary.deliveryOption}</p>

      {summary.deliveryOption === "Delivery" && (
        <p><strong>Address:</strong> {summary.address}</p>
      )}

      <hr />

      <p><strong>Pizza Subtotal:</strong> ${summary.pizzaSubtotal}</p>
      <p><strong>Extra Cheese Cost:</strong> ${summary.cheeseCost}</p>
      <p><strong>Delivery Fee:</strong> ${summary.deliveryFee}</p>
      <p><strong>Tax (13%):</strong> ${summary.tax}</p>

      <h3><strong>Total:</strong> ${summary.total}</h3>
    </div>
  );
}

export default OrderSummary;
