import { InputHTMLAttributes } from 'react'
import { Label } from './style'

interface InputLabelProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  setValue: (value: string) => void;
}

export function InputLabel({label, type, placeholder, setValue}: InputLabelProps) {
  return(
    <Label>
      {label}
      <input 
        type={type} 
        placeholder={placeholder} 
        onChange={event => setValue(event.target.value)}
      />
    </Label>
  )
}
