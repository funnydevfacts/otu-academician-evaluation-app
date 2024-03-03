import './Button.scss';

function Button({ label }) {
  return (
    <button className='button'>{label}</button>
  );
}

export default Button;