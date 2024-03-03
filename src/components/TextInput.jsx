import './TextInput.scss';

function TextInput({ placeholder, title }) {
  return (
    <div className='text-input-wrapper'>
      <label className="text-input-label">{title}</label>
      <input className="text-input" type="text" placeholder={placeholder} />
    </div>
  );
}

export default TextInput;