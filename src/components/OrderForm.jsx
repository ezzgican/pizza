import React from 'react';
import { Form, FormGroup, Input, Label} from 'reactstrap';
import Malzemeler from './Malzemeler'; 
import { useState } from 'react';



export default function OrderForm() {
const [hamur, setHamur] = useState("");
    
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



    return (
        
        <div className="container">
            <div className="hero"> 
                <div className="title-nav">
             <h1 className="hero-title">Teknolojik Yemekler</h1>
                <div className="navbar">
                    <a  href="#" className="nav-link" onClick={() => setCurrentPage('home')}>Ana Sayfa</a>
                    <a  href="#" className="nav-link-active">Sipariş Oluştur</a>
                </div>
                </div>
            </div>  
            
            <div className="order-pizza">
               <div className="pizza-info">
                 <h2 className="pizza-title">Position Absolute Pizza</h2>
                 <div className="price-rate">
                    <span>85.50₺</span>
                    <span>4.9</span>
                    <p>(200)</p>
                 </div>
                 <p className="explanation">Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.</p>
                </div>
                <div className="boyut-hamur"> 
                    <div className="boyut">
                        <legend>
                        Pizza Boyutu
                        </legend>
                        <FormGroup check>
                        <Input
                            name="radio1"
                            type="radio"
                        />
                        {' '}
                        <Label check>
                            Küçük
                        </Label>
                        </FormGroup>
                        <FormGroup check>
                        <Input
                            name="radio1"
                            type="radio"
                        />
                        {' '}
                        <Label check>
                            Orta
                        </Label>
                        </FormGroup>
                        <FormGroup check>
                        <Input
                            name="radio1"
                            type="radio"
                        />
                        {' '}
                        <Label check>
                            Büyük
                        </Label>
                        </FormGroup>

                    </div>
                    <div className="hamur">
                    <FormGroup className="hamur-form">
                        <Label htmlfor="exampleSelect">
                        Hamur Kalınlığı
                        </Label>
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
                        <Malzemeler malzemeler={malzemeListesi} />

                    </div>



                </div>
  
                











            </div>

             

        </div>
       
       
    )
}