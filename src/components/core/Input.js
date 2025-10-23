
const Input = ({
  id,
  label,
  value,
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
  backgroundColor = 'bg-secondary3 bg-opacity-20',
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
            className={('block w-full mb-2 xxl:text-sm text-xs', labelClassName)}
            htmlFor={id}>
            {label}
          </label>
        )}
        <input
          id={id}
          value={value}
          autoComplete="none"
          min={min}
          max={max}
          spellCheck={spellCheck}
          disabled={disabled}
          className={`placeholder:font-light relative block font-light text-xs h-8 px-4 md:px-[2vh] ${width} placeholder-gray-500 text-color-gray rounded-lg focus:outline-none border focus:border-sky-400 ${
            error && 'focus:ring-red-100 border border-red-300'
          } ${backgroundColor && backgroundColor} ${border && `border ${border}`}`}
          onChange={(e) => onChange(e.target.value)}
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
