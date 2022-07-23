import classNames from 'classnames'
import styles from './Button.module.scss'

export interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
  children: React.ReactNode,
  disabled?: boolean,
  className?: string,
  styleType: 'main' | 'white', // TODO: add blank
}

const Button = ({
  onClick, children, disabled, className, styleType,
} : ButtonProps) => (
  <button
    className={classNames(className, { [styles[styleType]]: styleType })}
    type='button'
    disabled={disabled}
    onClick={onClick}
  >
    {children}

  </button>
)

Button.defaultProps = {
  onClick: null,
  disabled: false,
  className: '',
  styleType: '',
}
export default Button
