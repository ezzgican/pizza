import React from 'react';
import { Form, FormGroup, Input, Label} from 'reactstrap';



export default function OrderForm() {


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
                        id="exampleSelect"
                        name="select"
                        type="select"
                        >
                        <option>İnce Hamur</option>
                        <option>Normal Hamur</option>
                        <option>Kalın Hamur</option>
                        </Input>
                    </FormGroup>
                    </div>
                    
                    <div className="malzemeler">
                        <Label htmlfor="exampleSelect">
                         Malzemeler
                        </Label>
                        <Form>
                        <FormGroup
                            check
                            inline
                        >
                            <Input type="checkbox" />
                            <Label check>
                            Some input
                            </Label>
                        </FormGroup>
                        <FormGroup
                            check
                            inline
                        >
                            <Input type="checkbox" />
                            <Label check>
                            Some other input
                            </Label>
                        </FormGroup>
                        <FormGroup
                            check
                            inline
                        >
                            <Input type="checkbox" />
                            <Label check>
                            Some input
                            </Label>
                        </FormGroup>
                        <FormGroup
                            check
                            inline
                        >
                            <Input type="checkbox" />
                            <Label check>
                            Some input
                            </Label>
                        </FormGroup>
                        <FormGroup
                            check
                            inline
                        >
                            <Input type="checkbox" />
                            <Label check>
                            Some input
                            </Label>
                        </FormGroup>
                        <FormGroup
                            check
                            inline
                        >
                            <Input type="checkbox" />
                            <Label check>
                            Some input
                            </Label>
                        </FormGroup>
                        </Form>

                    </div>



                </div>
  
                











            </div>

             

        </div>
       
       
    )
}