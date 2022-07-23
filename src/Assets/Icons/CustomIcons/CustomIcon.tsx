import { CustomIconFactory, CustomIconFactoryKeys } from '../Lib/CustomIconsLib'

export interface CustomIconProps {
  color : string,
  size : string,
  icon : CustomIconFactoryKeys
}

const CustomIcon = ({ color, size, icon }: CustomIconProps) => (
    <svg
    version="1.0"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 512.000000 512.000000"
    preserveAspectRatio="xMidYMid meet"
    fill={color}
  >
    {CustomIconFactory[icon]()}
  </svg>
)

export default CustomIcon
