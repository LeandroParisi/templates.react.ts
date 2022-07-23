/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'
import { useState } from 'react'
import Tooltip from '../../Shared/CommonComponents/DumbComponents/Tooltip/Tooltip'
import CustomIcon from './CustomIcons/CustomIcon'
import styles from './Icon.module.scss'
import { IconProps, IconTypesUnion } from './Icon.props'
import { CustomIconFactoryKeys } from './Lib/CustomIconsLib'
import { Tooltips } from './Lib/Tooltips'

const isCustomIcon = (icon : IconTypesUnion) : icon is CustomIconFactoryKeys => typeof icon === 'string'

const defaultProps = {
  inlineTooltip: false,
  color: 'white',
  className: '',
  size: '25px',
  onClick: null,
  noTooltip: false,
  tooltipText: '',
  type: 'standard',
  isDisabled: false,
}

const Icon = ({
  icon,
  color,
  className,
  size,
  onClick,
  noTooltip,
  tooltipText,
  type,
  inlineTooltip,
  isDisabled,
} : IconProps) => {
  const [showTooltip, setShowTooltip] = useState<boolean>(false)

  const iconName = isCustomIcon(icon) ? icon : icon.iconName

  const tooltip = tooltipText || Tooltips[iconName] as string

  const hasTooltip = !noTooltip && !!tooltip

  return (
    <button
      onClick={(e) => !isDisabled && onClick && onClick(e)}
      className={classNames(
        styles.iconContainer,
        className,
        { [styles[type]]: type },
        { [styles.clickable]: onClick },
        { [styles.disabled]: isDisabled },
      )}
      style={{ fontSize: size }}
      role="button"
      tabIndex={0}
      onFocus={() => hasTooltip && setShowTooltip(true)}
      onMouseOver={() => hasTooltip && setShowTooltip(true)}
      onMouseOut={() => hasTooltip && setShowTooltip(false)}
      onBlur={() => hasTooltip && setShowTooltip(false)}
    >
      {isCustomIcon(icon)
        ? <CustomIcon icon={icon} color={color || defaultProps.color} size={size || defaultProps.size}/>
        : <FontAwesomeIcon icon={icon as IconProp} color={color} size={size} />}
      {hasTooltip && showTooltip && <Tooltip text={tooltip} inlineTooltip={inlineTooltip!} />}
    </button>
  )
}

Icon.defaultProps = defaultProps

export default Icon
