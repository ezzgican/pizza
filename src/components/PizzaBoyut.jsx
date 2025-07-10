import React from 'react';
import { FormGroup, Input, Label } from 'reactstrap';

// value ve onChange parent’tan gelir, böylece kontrollü component olur
export default function PizzaBoyut({ value, onChange }) {
  return (
    <div className="boyut">
        <div className='pizza-boyut-title'>
            <legend>Pizza Boyutu</legend>
        </div>
    
      <FormGroup check>
        <Input
          name="pizzaBoyut"
          type="radio"
          value="Küçük"
          checked={value === "Küçük"}
          onChange={onChange}
        />
        <Label check>Küçük</Label>
      </FormGroup>
      <FormGroup check>
        <Input
          name="pizzaBoyut"
          type="radio"
          value="Orta"
          checked={value === "Orta"}
          onChange={onChange}
        />
        <Label check>Orta</Label>
      </FormGroup>
      <FormGroup check>
        <Input
          name="pizzaBoyut"
          type="radio"
          value="Büyük"
          checked={value === "Büyük"}
          onChange={onChange}
        />
        <Label check>Büyük</Label>
      </FormGroup>
    </div>
  );
}
