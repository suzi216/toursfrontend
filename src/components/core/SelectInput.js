import Select from 'react-select'

const SelectInput = ({
  id,
  label,
  selected,
  onSelect,
  options = [],
  placeholder = 'Select...',
  formatOptionLabel,
  menuPlacement = "bottom",
  onChange,
  maxHeight = 200,
  isClearable = true,
  isDisabled = false,
  isLoading = false,
  padding = '3px',
  width,
  error,
  border,
  backgroundColor,
  noOptionsMessage = () => 'No options',
  labelClassName,
  selectClassName,
  ...props
}) => {
  const styles = {
    control: (base) => ({
      ...base,
      lineHeight: '18px',
      borderRadius: '7px',
      borderColor: error ? '#F87171' : '#E5E7EB',
      maxWidth: width || undefined,
      padding,
      border: border ? 'border' : 'border',
      '&:hover': {
        borderColor: '#38bdf8',
        boxShadow: '0px 0px 2px #E5E7EB'
      }
    }),
    singleValue: (provided) => ({
      ...provided,
      color: '#4E4E4E',
      fontWeight: '300'
    }),
    option: (styles, { isFocused, isSelected }) => {
      let backgroundColor = null
      if (isSelected) {
        backgroundColor = '#bae6fd'
      } else if (isFocused) {
        backgroundColor = '#e0f2fe'
      }
      return {
        ...styles,
        backgroundColor,
        color: '#4E4E4E',
        fontSize: '10px',
        fontWeight: '300',

      }
    }
  }

  const handleChange = (selectedOption) => {
    onSelect({
      name: props.name,
      value: selectedOption?.value || '',
    })

    if (onChange) onChange()
  }


  return (
    <div id={id} {...props} >
      <div className="text-color-light-gray focus-within:text-sky-400 font-light">
        {label && (
          <div
            className="w-full mb-2 xl:text-sm text-14"
            htmlFor={id}>
            {label}
          </div>
        )}
        <Select
          placeholder={!isDisabled && placeholder}
          closeMenuOnSelect
          formatOptionLabel={formatOptionLabel ?? ((option) => option.label)}
          options={options}
          styles={styles}
          onChange={handleChange}
          value={selected}
          isClearable={isClearable}
          isDisabled={isDisabled}
          isLoading={isLoading}
          classNamePrefix="react_select"
          className="text-12"
          menuPlacement={menuPlacement}
          noOptionsMessage={noOptionsMessage}
        />
      </div>
      {error && <label className="xl:text-xs text-10 text-red-500">{error}</label>}
    </div>
  )
}

export default SelectInput
