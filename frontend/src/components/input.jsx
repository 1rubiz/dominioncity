const fixedInputClass =
  'center-placeholder rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm';

export default function Input({
  handleChange,
  handleClick,
  value,
  labelText,
  labelFor,
  id,
  name,
  type,
  isRequired = true,
  placeholder,
  customClass,
}) {
  return (
    <div className="my-3">
      <input
        onClick={handleClick}
        onChange={handleChange}
        value={value}
        id={id}
        name={name}
        type={type}
        required={isRequired}
        className={fixedInputClass + customClass}
        placeholder={placeholder}
      />
    </div>
  );
}
