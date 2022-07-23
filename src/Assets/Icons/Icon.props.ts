import { IconDefinition, SizeProp } from '@fortawesome/fontawesome-svg-core'
import { CustomIconFactoryKeys } from './Lib/CustomIconsLib'

export type IconTypesUnion = IconDefinition | CustomIconFactoryKeys

export interface IconProps {
  icon : IconTypesUnion,
  color? : string,
  className? : string,
  size? : SizeProp,
  onClick? : React.MouseEventHandler<HTMLButtonElement>,
  noTooltip? : boolean,
  tooltipText? : string,
  type : 'standard',
  inlineTooltip? : boolean,
  isDisabled? : boolean,
}
