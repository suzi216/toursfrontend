import { useMemo, useState } from 'react'
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5'
import { cn } from '@/utils/helpers'
import { appFont } from '@/constants'

const PasswordInput = ({
  id,
  value,
  label,
  placeholder,
  onChange,
  error,
  disabled,
  backgroundColor = 'bg-secondary3 bg-opacity-20',
  border,
  width="w-full",
  sm,
  className,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false)
  const type = useMemo(() => (showPassword ? 'text' : 'password'), [showPassword])

  const toggleVisibility = () => setShowPassword((prev) => !prev)

  return (
    <div {...props} className={cn(className, width)}>
      <div className="text-color-light-gray focus-within:text-sky-400 font-light">
        {label && (
          <div className="w-full mb-2 xxl:text-sm text-xs"
            htmlFor={id}>
            {label}
          </div>
        )}
        <div className="relative">
          <input
            id={id}
            type={type}
            autoComplete="new-password"
            value={value}
            className={`${appFont.className} placeholder:font-light relative block font-light w-full text-xs h-8 px-4 md:px-[2vh] ${width} placeholder-gray-500 text-color-gray rounded-lg md:rounded-[1.25vh] focus:outline-none border-none focus:border-sky-400 ${
              error && 'focus:ring-red-100 border border-red-300'
            } ${backgroundColor && backgroundColor} ${border && `border ${border}`}`}
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)}
          />
          <div
            onClick={toggleVisibility}
            className="absolute inset-y-0 right-0 px-3 flex items-center cursor-pointer text-gray-400">
            {showPassword ? (
              <IoEyeOffOutline className="w-4 h-4" />
            ) : (
              <IoEyeOutline className="w-4 h-4" />
            )}
          </div>
        </div>
      </div>
      {error && <label className="text-xs text-red-500">{error}</label>}
    </div>
  )
}

export default PasswordInput
