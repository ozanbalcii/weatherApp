const Input = ({ id, className, type, placeholder, value, required, onChange, name, disabled }) => (
    <input
      id={id}
      className={`${className}`}
      type={type}
      placeholder={placeholder}
      value={value}
      name={name}
      onChange={onChange}
      required={required}
      disabled={disabled}
    />
  );
  
  export default Input;