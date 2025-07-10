import { useState } from "react";
import HomePage from "./components/HomePage";
import OrderForm from "./components/OrderForm";
import SiparisOnay from "./components/SiparisOnay";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [orderData, setOrderData] = useState(null);

  const handleOrderSubmit = (order) => {
    setOrderData(order);
    setCurrentPage("onay");
  };

  return (
    <>
      {currentPage === "home" && (
        <HomePage onStartOrder={() => setCurrentPage("order")} />
      )}
      {currentPage === "order" && (
        <OrderForm
          onOrderComplete={handleOrderSubmit}
          onGoHome={() => setCurrentPage("home")}
        />
      )}
      {currentPage === "onay" && (
        <SiparisOnay orderData={orderData} onGoHome={() => setCurrentPage("home")} />
      )}
    </>
  );
}

export default App;
