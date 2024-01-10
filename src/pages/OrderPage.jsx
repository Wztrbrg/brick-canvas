import { useContext } from "react";
import OrderIdContext from "../context/OrderIdContext";
import Header from "../components/Header";
import "./orderpage.css"

function OrderPage() {

  const { orderId } = useContext(OrderIdContext);

  return (
    <>
      <Header></Header>
      <div className="order-page-wrapper">
        <div className="order-content">
          <div className="order-details">
            <div className="order-header">
              <h1>Leveransuppgifter</h1>
              <p>Var god fyll i alla fält för att göra klart din beställning</p>
            </div>
            <div className="contact-container">
              <h2>Kontakt</h2>
              <div className="input-container">
                <label>E-postadress</label>
                <input type="email" />
              </div>
              <div className="input-container">
                <label>Telefonnummer</label>
                <input type="text" />
              </div>
            </div>
            <div className="delivery-container">
              <h2>Leverans</h2>
              <div className="name-container">
                <div className="input-container">
                  <label>Förnamn</label>
                  <input type="text" />
                </div>
                <div className="input-container">
                  <label>Efternamn</label>
                  <input type="text" />
                </div>
              </div>
              <div className="input-container">
                <label>Adress</label>
                <input type="text" />    
              </div>
              <div className="adress-container">
                <div className="input-container">
                  <label>Postkod</label>
                  <input type="text" />    
                </div>
                <div className="input-container">
                  <label>Stad</label>
                  <input type="text" />    
                </div>
              </div>
            </div>
          </div>
          <div className="payment-details">
            <div className="payment-header">
              <h1>Betalningsalternativ</h1>
              <p>Betalningsalternativ ännu inte integrerade, vänligen återkom inom kort</p>
            </div>
          </div>
          <button className="landing-btn">Beställ</button>
        </div>
      </div>
    </>
  )
}

export default OrderPage;