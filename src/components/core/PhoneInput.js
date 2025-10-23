import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { cn } from '@/utils/helpers'

const CorePhoneInput = ({
  id,
  label,
  value,
  placeholder,
  onChange,
  onFocus,
  country,
  disabled,
  border,
  error,
  xs,
  width = 'w-full',
  className,
  labelClassName,
  ...props
}) => {
  return (
    <div id={id} {...props} className={cn(className, width)}>
      <div className="text-color-light-gray focus-within:text-sky-400 font-light">
        {label && (
          <div className={cn('w-full mb-2 xxl:text-sm text-xs', labelClassName)} htmlFor={id}>
            {label}
          </div>
        )}
        <PhoneInput
          country={country}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          disabled={disabled}
          onClick={onFocus}
          inputClass={`!relative !block !font-light !text-xs !w-full !h-8 !placeholder-gray-500 !text-color-gray !rounded-lg !focus:outline-none !border-none !focus:border-sky-400 ${
            error && '!focus:ring-red-100 !border !border-red-300'
          } ${border && `!border ${border}`}`}
        />
      </div>
      {error && <label className="text-xs text-red-500">{error}</label>}
    </div>
  )
}

export default CorePhoneInput
