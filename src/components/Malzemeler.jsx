import { Label, Input, Form, FormGroup } from 'reactstrap';
import { useState } from 'react';



export default function Malzemeler({malzemeler}) {

    const [seciliMalzemeler, setSeciliMalzemeler] = useState([]);

    const handleChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      // Ekleniyor
      setSeciliMalzemeler([...seciliMalzemeler, value]);
    } else {
      // Çıkarılıyor
      setSeciliMalzemeler(seciliMalzemeler.filter(malzeme => malzeme !== value));
    }
  };


    return (
    <div>
        <div className='malzeme-title'>
            <Label>Malzemeler</Label>
        </div>
      <div className="malzemeler-uyari">
      En Fazla 10 malzeme seçebilirsiniz. Her biri 10₺.
      </div>
      <Form>
        {malzemeler.map((malzeme, index) => (
          <FormGroup check inline key={index}>
            <Input
              type="checkbox"
              value={malzeme}
              checked={seciliMalzemeler.includes(malzeme)}
              onChange={handleChange}
            />
            <Label check>{malzeme}</Label>
          </FormGroup>
        ))}
      </Form>
      {/* Seçilen malzemeleri göstermek için: */}
      <div>
        <strong>Seçilen malzemeler:</strong> {seciliMalzemeler.join(", ")}
      </div>
    </div>
  );
}