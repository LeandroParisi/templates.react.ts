import classNames from 'classnames'
import styles from './Loader.module.scss'

export type LoaderBackgrounds = 'dark' | 'transparent'

export interface LoaderProps {
  src: string
  backgroundColor?: LoaderBackgrounds
  message?: string
  centered?: boolean
}

const defaultProps = {
  backgroundColor: '',
  message: '',
  centered: false,
}

function Loader({
  src, backgroundColor, message, centered,
} : LoaderProps & typeof defaultProps) {
  return (
    <div className={classNames(
      styles.loader,
      { [styles[backgroundColor]]: backgroundColor },
    )}
    >
      <img src={src} alt="Loading" className={classNames({ [styles.centered]: centered })} />
      {message && <h1 className={styles.loaderMessage}>{ message }</h1>}
    </div>
  )
}

Loader.defaultProps = defaultProps

export default Loader
