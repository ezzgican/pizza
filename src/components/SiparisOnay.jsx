import logo from '../../images/iteration-1-images/logo.svg';
import OrderForm from './OrderForm';

export default function SiparisOnay({ orderData, onGoHome }) {
  if (!orderData) return null;
  
  
  return (
    <div className="container-onay">
      <div className="hero">
        <img className="onay-logo" src={logo} alt="Teknolojik Yemekler Logo" />
        <h1 className='onay-info'>Tebrikler Siparişiniz Alındı!</h1>
        
        <p>
  {orderData.adet} adet {orderData.boyut?.toLowerCase()} boy pizzanız adresinize teslim edilmek üzere hazırlanacaktır.
</p>
        <p>Toplam: {orderData.toplam?.toFixed(2)}₺</p>
        <button className='onay-button' onClick={onGoHome}>Ana Sayfa</button>
      </div>
    </div>
  );
}
