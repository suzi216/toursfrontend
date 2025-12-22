
const Input = ({
  id,
  label,
  value,
  name,
  placeholder,
  onChange,
  onFocus,
  error,
  type = 'text',
  min,
  max,
  disabled,
  spellCheck = true,
  xs,
  backgroundColor = '',
  border,
  width ="w-full",
  labelClassName,
  ...props
}) => {
  return (
    <div {...props}>
      <div className="text-color-light-gray focus-within:text-sky-400 font-light">
        {label && (
          <label
            className="block xl:text-sm text-14 text-gray-700 mb-2"
            htmlFor={id}>
            {label}
          </label>
        )}
        <input
          id={id}
          value={value}
          name={name}
          autoComplete="none"
          min={min}
          max={max}
          spellCheck={spellCheck}
          disabled={disabled}
          className={`placeholder:font-light relative block font-light text-12 xl:text-14 h-8 px-4 md:px-[2vh] ${width} placeholder-gray-500 text-color-gray rounded-lg focus:outline-none border focus:border-sky-400 ${
            error && 'focus:ring-red-100 border border-red-300'
          } ${backgroundColor && backgroundColor} ${border && `border ${border}`}`}
          onChange={onChange}
          onClick={onFocus}
          type={type}
          placeholder={placeholder}
          aria-label={label}
        />
      </div>
      {error && <label className="text-xs text-red-500">{error}</label>}
    </div>
  )
}

export default Input
