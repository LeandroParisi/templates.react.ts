import Loader from 'Assets/Loaders/Loader'
import { GetImage, LoaderImagesLibKeys } from 'Assets/Loaders/LoaderImagesLib'
import { useEffect, useState } from 'react'

export interface useLoaderParams {
  image : LoaderImagesLibKeys
}

const useLoader = ({ image } : useLoaderParams) => {
  const [display, setDisplay] = useState(true)

  const { src, timer } = GetImage(image)

  useEffect(() => {
    setTimeout(() => {
      setDisplay(false)
    }, timer)
  }, [])

  return (
    display && <Loader src={src} />
  )
}

export default useLoader
