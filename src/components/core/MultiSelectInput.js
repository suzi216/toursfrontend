import Select from 'react-select'

const MultiSelectInput = ({
  id,
  label,
  selected,
  onSelect,
  options = [],
  placeholder = 'Select...',
  formatOptionLabel,
  onChange,
  maxHeight = 100,
  isDisabled = false,
  isLoading = false,
  padding = '2px',
  width,
  error,
  backgroundColor,
  ...props
}) => {
  const styles = {
    control: (base) => ({
      ...base,
      fontSize: 'text-[10px] xxxl:text-xl xxl:text-base',
      lineHeight: '20px',
      borderRadius: '7px',
      color: 'black',
      borderColor: error ? '#F87171' : '#E5E7EB',
      width:"80%",
      height: '10px',
      maxWidth: width || undefined,
      padding,
      '&:hover': {
        borderColor: '#38bdf8',
        boxShadow: '0px 0px 2px #E5E7EB'
      }
    }),
    menu: (provided) => ({
      ...provided,
      fontSize: '14px'
    }),
    menuList: (styles) => ({
      ...styles,
      maxHeight
    }),
  }

  const handleChange = (selectedOption) => {
    onSelect(selectedOption)
    if (onChange) {
      onChange()
    }
  }

  return (
    <div id={id} {...props}>
      <div className="text-color-light-gray focus-within:text-sky-400 font-light">
        {label && (
          <div
            className="w-full mb-2 xxl:text-sm text-xs"
            htmlFor={id}>
            {label}
          </div>
        )}
        <Select
          placeholder={placeholder}
          defaultValue={options[0]}
          closeMenuOnSelect
          formatOptionLabel={formatOptionLabel ?? undefined}
          options={options}
          styles={styles}
          onChange={handleChange}
          value={selected}
          isDisabled={isDisabled}
          isLoading={isLoading}
          isMulti
          classNamePrefix="react_select"
        />
      </div>
      {error && <label className="text-xs text-red-500">{error}</label>}
    </div>
  )
}

export default MultiSelectInput
