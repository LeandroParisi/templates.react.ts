import classNames from 'classnames'
import styles from './Tooltip.module.scss'

export interface TooltipProps {
  text: string,
  inlineTooltip: boolean
}

const Tooltip = ({ text, inlineTooltip } : TooltipProps) => (
  <span className={classNames(styles.tooltip, { [styles.inline]: inlineTooltip })}>
    <p>{text}</p>
  </span>
)

export default Tooltip
