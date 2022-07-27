import PropTypes from 'prop-types'
import styles from './Overlay.module.scss'

export interface OverlayProps {
  isOpened: boolean,
  close: (e: boolean) => void,
}

const Overlay = ({
  isOpened,
  close,
} : OverlayProps) => (
  <>
  {isOpened
    && (
    <div
      className={styles.overlay}
      onClick={() => close(false)}
    />
    )}
  </>
)

Overlay.propTypes = {
  isOpened: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
}

export default Overlay
