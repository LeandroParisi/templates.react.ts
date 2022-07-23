import globalStyles from 'assets/scss/globals.module.scss'
import classNames from 'classnames'
import { IFormvalidationError } from 'Shared/Interfaces/IFormValidationError'
import styles from './Input.module.scss'

export interface InputProps {
  value: string,
  label : string
  type? : React.HTMLInputTypeAttribute
  error?: IFormvalidationError,
  placeholder?: string,
  isDisabled? : boolean
  onBlur?: React.FocusEventHandler<HTMLInputElement>,
  onChange?: React.ChangeEventHandler<HTMLInputElement>,
  onFocus?: React.FocusEventHandler<HTMLInputElement>,
  className?: string,
  onEnter?: (value : string) => any,
  onMouseOut?: React.MouseEventHandler<HTMLInputElement>,
}

const defaultProps : Partial<InputProps> = {
  type: 'text',
  placeholder: '',
  onBlur: undefined,
  onChange: undefined,
  onFocus: undefined,
  error: { hasError: false },
  className: '',
  onEnter: undefined,
  isDisabled: false,
}

const Input = ({
  placeholder,
  value,
  onBlur,
  onChange,
  error,
  onFocus,
  label,
  className,
  onMouseOut,
  onEnter,
  isDisabled,
  type,
} : InputProps & typeof defaultProps) => {
  const { hasError, errorMessage } = error!

  const handleEnterClick : React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter' && onEnter) {
      onEnter(value)
    }
  }

  return (
    <div className={classNames(styles.inputContainer, className)}>
      {label && <label htmlFor={value}>{label}</label>}
      <input
        id={value}
        type={type}
        className={classNames({ [globalStyles.errorInput]: hasError })}
        placeholder={placeholder}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        onMouseOut={onMouseOut}
        onKeyUp={handleEnterClick}
        disabled={isDisabled}
      />
      {hasError && <p className={globalStyles.errorText}>{errorMessage}</p>}
    </div>

  )
}

Input.defaultProps = defaultProps

export default Input
