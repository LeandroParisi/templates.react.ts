import Loader, { LoaderBackgrounds } from '../../Assets/Loaders/Loader'
import { GetImage, LoaderImagesLibKeys } from '../../Assets/Loaders/LoaderImagesLib'

export interface useLoadingParams {
  show: boolean
  image?: LoaderImagesLibKeys
  background?: LoaderBackgrounds
}
const useLoading = ({ show, image = 'loading', background } : useLoadingParams) => {
  const { src, bgColor } = GetImage(image)

  return (
    show && (
      <Loader src={src} backgroundColor={background || bgColor} centered />
    )
  )
}

export default useLoading
