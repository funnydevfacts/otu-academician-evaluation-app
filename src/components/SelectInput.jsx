import './SelectInput.scss';

function SelectInput({ options = ["option 1", "option 2"], defaultValue = options[0], title }) {
  return (
    <div className='select-input-wrapper'>
      <label className="text-input-label">{title}</label>

      <select defaultValue={defaultValue}>
        {options.map((option, i) => <option key={i} >{option}</option>)}
      </select>
    </div>
  );
}

export default SelectInput;