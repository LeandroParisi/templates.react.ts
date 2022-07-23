import { getTrackBackground, Range } from 'react-range'
import { PRIMARY3 } from 'Shared/Libs/Colors'
import formatPrice from 'Shared/utils/formatPrice'
import styles from './RangeInput.module.scss'

const PRICE_RANGES = {
  min: 'Min',
  max: 'Max',
}

export interface RangeInputProps {
  onChange: (values : number[]) => void
  limit: {min: number, max: number}
  values : {min: number, max: number}
  unmasked: boolean,
}

const defaultProps : Partial<RangeInputProps> = {
  unmasked: false,
}

const RangeInput = ({
  limit, values, onChange, unmasked,
} : RangeInputProps) => {
  const THUMB_SIZE = 15

  const STEP = 1

  const { min, max } = limit

  return (
    <div className={styles.sliderContainer}>
      <Range
        values={Object.values(values)}
        step={STEP}
        min={min}
        max={max}
        onChange={onChange}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: '36px',
              display: 'flex',
              width: '100%',
            }}
          >
            <div
              ref={props.ref}
              style={{
                height: '5px',
                width: '100%',
                borderRadius: '4px',
                background: getTrackBackground({
                  values: Object.values(values),
                  colors: ['#ccc', PRIMARY3, '#ccc'],
                  min,
                  max,
                }),
                alignSelf: 'center',
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props, isDragged }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: `${THUMB_SIZE}px`,
              width: `${THUMB_SIZE}px`,
              borderRadius: '4px',
              backgroundColor: '#FFF',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: '1px 1px 2px #AAA',
            }}
          >
            <div
              style={{
                height: `${THUMB_SIZE / 2}px`,
                width: '5px',
                backgroundColor: isDragged ? PRIMARY3 : '#CCC',
              }}
            />
          </div>
        )}
      />
      <div className={styles.valuesDisplay}>
        {Object.entries(values).map((entries) => {
          const [key, value] = entries
          return (
          <div>
            <span>{PRICE_RANGES[key as keyof typeof PRICE_RANGES]}</span>
            <p>{unmasked ? value : formatPrice(value)}</p>
          </div>
          )
        })}
      </div>
    </div>
  )
}

RangeInput.defaultProps = defaultProps

export default RangeInput
