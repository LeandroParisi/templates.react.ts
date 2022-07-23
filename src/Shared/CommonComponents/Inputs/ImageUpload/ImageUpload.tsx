import { useEffect, useState } from 'react'
import styles from './ImageUpload.module.scss'

export interface ImageUploadProps {
  imageClassName: string,
  initialFileSrc: string,
  containerClassName: string,
  updateState: React.Dispatch<React.SetStateAction<File>>,
}

const ImageUpload = ({
  imageClassName, initialFileSrc, containerClassName, updateState,
} : ImageUploadProps) => {
  const [selectedFile, setSelectedFile] = useState<File>()
  const [preview, setPreview] = useState<string | null>(null)

  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    if (!selectedFile) {
      setPreview(null)
      return
    }

    const objectUrl = URL.createObjectURL(selectedFile)
    setPreview(objectUrl)

    // free memory when ever this component is unmounted
    // eslint-disable-next-line consistent-return
    return () => URL.revokeObjectURL(objectUrl)
  }, [selectedFile])

  const onSelectFile : React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (!e.currentTarget.files || e.currentTarget.files.length === 0) {
      setSelectedFile(undefined)
      return
    }

    const file = e.currentTarget.files[0]
    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(file)
    updateState(file)
  }

  return (
    <div className={styles.container}>
      <input type="file" onChange={onSelectFile} />
      <div className={containerClassName}>
        <img className={imageClassName} src={preview || initialFileSrc} />
      </div>
    </div>
  )
}

export default ImageUpload
