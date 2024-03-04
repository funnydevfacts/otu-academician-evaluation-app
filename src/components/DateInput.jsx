import { convertDateToYMD } from '../utils/dateUtils';
import './TextInput.scss';
import { useEffect, useState } from 'react';

function TextInput({ placeholder, title, onChange, defaultValue }) {
  const [inputValue, setInputValue] = useState(defaultValue || convertDateToYMD(new Date()));

  useEffect(() => {
    const valueToPass = inputValue || defaultValue || convertDateToYMD(new Date());
    onChange(valueToPass);
  }, []);

  return (
    <div className='text-input-wrapper'>
      <label className="text-input-label">{title}</label>
      <input className="text-input"
        type="date"
        placeholder={placeholder}
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
          onChange(e.target.value);
        }}
      />
    </div>
  );
}

export default TextInput;