import Icon from 'Assets/Icons/Icon'
import FaIconLib from 'Assets/Icons/Lib/FaIconLib'
import classNames from 'classnames'
import { MouseEventHandler, ReactNode } from 'react'
import Overlay from 'Shared/Templates/Overlay/Overlay'
import styles from './Modal.module.scss'

export interface ModalProps {
  className: string,
  children: ReactNode,
  isOpened: boolean,
  close: MouseEventHandler<HTMLButtonElement> & ((e : boolean) => void),
}

const Modal = ({
  children, isOpened, close, className,
} : ModalProps) => (
  isOpened && (
  <div className={classNames(styles.modalContainer, className)}>
    <Overlay isOpened close={close} />

    <div className={styles.subContainer}>
      <Icon
        icon={FaIconLib.GetIcon('CLOSE')}
        size="1x"
        onClick={close}
        className={styles.closeButton}
      />
      {children}

    </div>
  </div>
  )
)

Modal.defaultProps = {
  className: '',
}

export default Modal
