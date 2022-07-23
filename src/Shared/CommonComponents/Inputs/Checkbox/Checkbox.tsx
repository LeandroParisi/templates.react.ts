import classNames from 'classnames'
import { IFormvalidationError } from 'Shared/Interfaces/IFormValidationError'
import styles from './Checkbox.module.scss'

export interface CheckboxProps {
  placeholder: string,
  id: string,
  onClick: React.MouseEventHandler<HTMLInputElement>,
  error: IFormvalidationError
  className: string,
  checked: boolean,
  disabled: boolean,
}

const defaultProps = {
  placeholder: '',
  error: null,
  className: '',
  checked: false,
  disabled: false,
}

const Checkbox = ({
  placeholder,
  id,
  onClick,
  error: { hasError, errorMessage },
  checked,
  className,
  disabled,
} : CheckboxProps) => (
  <div className={classNames(styles.inputContainer, className)}>
    {placeholder && (
      <label htmlFor={id} className={classNames({ [styles.disabled]: disabled })}>
        {placeholder}
      </label>
    )}
    <input
      id={id}
      type="checkbox"
      className={classNames({ [styles.error]: hasError })}
      placeholder={placeholder}
      checked={checked}
      onClick={onClick}
      disabled={disabled}
    />
    {hasError && <p className={styles.errorText}>{errorMessage}</p>}
  </div>
)

Checkbox.defaultProps = defaultProps

export default Checkbox
