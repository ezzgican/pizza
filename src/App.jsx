import { useState } from "react";
import "./App.css";
import HomePage from './components/HomePage';
import OrderForm from './components/OrderForm'



function App() {
  const [currentPage, setCurrentPage] = useState('home');
  
  return (
    <>
      {currentPage === 'home' && <HomePage onStartOrder={() => setCurrentPage('order')} />}
      {currentPage === 'order' && <OrderForm />} 
    </>
  );
}

export default App;
