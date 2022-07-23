import Icon from 'Assets/Icons/Icon'
import IconsLib from 'Assets/Icons/Lib/FaIconLib'
import classNames from 'classnames'
import styles from './PriceTag.module.scss'

export interface PriceTagProps {
  value: string
  className: string
}

const PriceTag = ({ value, className } : PriceTagProps) => (
  <div className={classNames(styles.priceTag, className)}>
    <Icon
      icon={IconsLib.GetIcon('PRICE')}
      className={styles.priceIcon}
      size="1x"
      color="rgba(90, 90, 90)"
      noTooltip
    />
    <p>{value}</p>
  </div>
)

export default PriceTag
