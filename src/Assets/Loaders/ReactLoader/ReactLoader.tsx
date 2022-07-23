import Loader from 'react-loader-spinner'
import { DARK } from '../../../Shared/Libs/Colors'
import styles from './ReactLoader.module.scss'

export interface ReactLoaderProps {
  size? : number
}
const defaultProps = {
  size: 75,
}

const ReactLoader = ({ size } : ReactLoaderProps & typeof defaultProps) => (
  <div className={styles.loaderContainer}>
    <Loader
      type="Oval"
      color={DARK}
      height={size}
      width={size}
    />

  </div>
)

ReactLoader.defaultProps = defaultProps

export default ReactLoader
