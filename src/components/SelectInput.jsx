import './SelectInput.scss';
import { useState, useEffect } from 'react';

function SelectInput({ options = ["option 1", "option 2"], defaultValue = options[0], title, onChange }) {
  const [inputValue, setInputValue] = useState(defaultValue);

  useEffect(() => {
    const valueToPass = inputValue || defaultValue || convertDateToYMD(new Date());
    onChange(valueToPass);
  }, []);

  return (
    <div className='select-input-wrapper'>
      <label className="text-input-label">{title}</label>

      <select defaultValue={defaultValue}
        onChange={(e) => {
          setInputValue(e.target.value);
          onChange(e.target.value);
        }}
      >
        {options.map((option, i) => <option key={i} >{option}</option>)}
      </select>
    </div>
  );
}

export default SelectInput;