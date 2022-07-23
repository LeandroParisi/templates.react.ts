import { KeysOfDict } from '../../Commons/Interfaces&Types/SystemInterfaces/DictionaryTypes'
import loading from './images/loader_1.gif'
import { LoaderBackgrounds } from './Loader'

export interface LoaderImagesProperties {
  src: string,
  bgColor?: LoaderBackgrounds,
  timer: number
}

const LoaderImagesLib = {
  loading: {
    src: loading,
    bgColor: 'transparent',
    timer: 5000,
  },
} as const

export type LoaderImagesLibKeys = KeysOfDict<typeof LoaderImagesLib>

export const GetImage = (image : LoaderImagesLibKeys) => LoaderImagesLib[image] as LoaderImagesProperties

export default LoaderImagesLib
