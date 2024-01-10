import { useContext } from "react";
import OrderIdContext from "../context/OrderIdContext";

function OrderPage() {

  const { orderId } = useContext(OrderIdContext);

  return (
    <>
      <h1>Order Page</h1>
      <p>Your orderID: {orderId}</p>
    </>
  )
}

export default OrderPage;