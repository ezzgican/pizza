import React from 'react';
import logo from '../../images/iteration-1-images/logo.svg';
import {  FormGroup, Input, Label} from 'reactstrap';
import Malzemeler from './Malzemeler'; 
import PizzaBoyut from './PizzaBoyut';
import { useState } from 'react';



export default function OrderForm({ onGoHome, onOrderComplete }) {
const [hamur, setHamur] = useState("");
const [PizzaSize, setPizzaSize] = useState("");
const [siparisNotu, setSiparisNotu] = useState("");
const [seciliMalzemeler, setSeciliMalzemeler] = useState([]);
const [adet, setAdet] = useState(1);
const pizzaFiyat = 85.50;
const malzemeFiyat = 10;
    
const malzemeListesi = [
  "Pepperoni",
  "Mantar",
  "Zeytin",
  "Mısır",
  "Soğan",
  "Biber",
  "Jalapeno",
  "Mozzarella",
  "Tavuk",
  "Ananas"
];

const toplam = adet * (pizzaFiyat + seciliMalzemeler.length * malzemeFiyat);

const secimler = seciliMalzemeler.length * malzemeFiyat

    return (
        
        <div className="container">
            <div className="hero"> 
                <div className="title-nav">
             <img className="hero-title" src={logo} alt="Teknolojik Yemekler Logo" />
                <div className="navbar">
                    <a  href="#" className="nav-link" onClick={onGoHome}>Ana Sayfa</a>
                    <a  href="#" className="nav-link-active">Sipariş Oluştur</a>
                </div>
                </div>
            </div>  
            
            <div className="order-pizza">
               <div className="pizza-info">
                 <h2 className="pizza-title">Position Absolute Pizza</h2>
                 <div className="price-rate">
                    <span className='price'>85.50₺</span>
                    <span className='rank'>4.9</span>
                    <p className='comment'>(200)</p>
                 </div>
                 <p className="explanation">Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.</p>
                </div>
                <div className="boyut-hamur"> 
                    <div className="boyut">
                        <PizzaBoyut value={PizzaSize} onChange={e => setPizzaSize(e.target.value)} />
                    </div>
                    <div className="hamur">
                    <FormGroup>
                        <div className='hamur-title'>
                            <Label>
                            Hamur Kalınlığı
                            </Label>
                        </div>
                        
                        <Input
                        type="select"
                        value={hamur}
                        onChange={e => setHamur(e.target.value)}
                        >
                        <option value="">Seçiniz</option>
                        <option value="İnce">İnce Hamur</option>
                        <option value="Normal">Normal Hamur</option>
                        <option value="Kalın">Kalın Hamur</option>
                        </Input>
                    </FormGroup>
                    </div>
                    
                    <div className="malzemeler">
                        <Malzemeler malzemeler={malzemeListesi}
                                    seciliMalzemeler={seciliMalzemeler}
                                    setSeciliMalzemeler={setSeciliMalzemeler} 
                        />

                    </div>

                    <div className="siparis-notu-container">
                        <FormGroup>
                            <Label for="siparisNotuTextarea" className="siparis-notu-label">
                            Sipariş Notu:
                            </Label>
                            <Input
                            id="siparisNotuTextarea"
                            name="siparisNotu"
                            placeholder="Siparişine eklemek istediğin bir şey var mı?"
                            type="textarea"
                            className="siparis-notu-textarea"
                            value={siparisNotu} 
                            onChange={e => setSiparisNotu(e.target.value)}
                            />
                        </FormGroup>
                    </div>


                    <div className="ozetler-container">
                            <div className='toplam-ozet'>
                                <span className='toplam-baslik'>Sipariş Toplamı</span>
                                <span className='secimm'>Seçimler: {secimler}</span>
                                <span className='yemek'>Yemek: {pizzaFiyat}</span>
                            </div>
                            <div className="siparis-ozet-kutu">
                                <div className="siparis-adet">
                                <button onClick={() => setAdet(adet > 1 ? adet - 1 : 1)}>-</button>
                                <span className="adetrenk">{adet} Adet</span>
                                <button onClick={() => setAdet(adet + 1)}>+</button>
                                </div>
                                <div className="siparis-toplam">
                                <span>Toplam:</span>
                                <strong>{toplam.toFixed(2)}₺</strong>
                                </div>
                                <button className="siparis-buton"onClick={() => {
                                // Sipariş verisine ihtiyacın olan tüm alanları ekle!
                                const order = {
                                boyut: PizzaSize,
                                hamur,
                                malzemeler: seciliMalzemeler,
                                adet,
                                toplam,
                                siparisNotu
                                // isim gibi başka alanlar da varsa onları da ekle!
                                };
                                onOrderComplete(order);
                                }}>Sipariş Ver
                                </button>
                            </div>
                    </div>

                    
                </div>
  
                











            </div>

             

        </div>
       
       
    )
}