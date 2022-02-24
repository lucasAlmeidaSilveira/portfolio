import InputMask from 'react-input-mask'
import { InputLabelProps } from '../../types'
import { Label } from './style'

export function InputLabel({label, type, placeholder, setValue}: InputLabelProps) {
  return(
    <Label>
      {label}
      
      {type !== 'phone' ? (
        <input 
          type={type} 
          placeholder={placeholder} 
          onChange={event => setValue(event.target.value)}
        />
      ) : (
        <InputMask 
          type={type} 
          onChange={event => setValue(event.target.value)} 
          placeholder={placeholder} 
          mask={'(99) 99999-9999'} 
        />
      )}
    </Label>
  )
}
