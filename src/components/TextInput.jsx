import { useState } from 'react';
import './TextInput.scss';

function TextInput({ placeholder, title, onChange, value }) {
  const [inputValue, setInputValue] = useState(value || '');

  return (
    <div className='text-input-wrapper'>
      <label className="text-input-label">{title}</label>
      <input
        className="text-input"
        type="text"
        value={inputValue}
        placeholder={placeholder}
        onChange={(e) => {
          setInputValue(e.target.value);
          onChange(e.target.value);
        }} />
    </div>
  );
}

export default TextInput;