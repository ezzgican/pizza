export default function SiparisOnay({ orderData, onGoHome }) {
  if (!orderData) return null;

  return (
    <div className="container">
      <div className="hero">
        <h1>Sipariş Alındı!</h1>
        <p>Teşekkürler, {orderData.isim}.</p>
        <p>
          Siparişin: {orderData.boyut} boy, {orderData.hamur} pizza.
        </p>
        <p>Ek Malzemeler: {orderData.malzemeler?.join(", ")}</p>
        <p>Toplam: {orderData.toplam?.toFixed(2)}₺</p>
        <button onClick={onGoHome}>Ana Sayfa</button>
      </div>
    </div>
  );
}
