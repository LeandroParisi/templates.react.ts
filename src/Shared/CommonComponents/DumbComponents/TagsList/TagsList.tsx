import Icon from 'Assets/Icons/Icon'
import FaIconLib from 'Assets/Icons/Lib/FaIconLib'
import styles from './TagsList.module.scss'

export interface ITag{
  name: string
  id: number
}

export interface TagsListProps {
  values : Array<ITag>
  onClose? : React.MouseEventHandler<HTMLButtonElement>
}

const TagsList = ({ values, onClose } : TagsListProps) => (
  <ul className={styles.list}>
    {values?.sort((a, b) => a.id - b.id).map(({ name, id }) => (
      <li
        key={id}
      >
        {name}
        {onClose && (
          <Icon
            icon={FaIconLib.GetIcon('CLOSE')}
            className={styles.selectIcon}
            size="2x"
            tooltipText="Remover"
            onClick={(e) => onClose(e)}
            inlineTooltip
          />
        )}
      </li>
    ))}
  </ul>
)

TagsList.defaultProps = {
  onClose: null,
}
export default TagsList
