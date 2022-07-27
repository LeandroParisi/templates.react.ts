/* eslint-disable @typescript-eslint/no-unused-vars */
export interface CustomTimePickerProps {
  onChange: React.MouseEventHandler<HTMLButtonElement>,
  hourString?: string,
  label?: string,
  className?: string,
  containerClass?: string,
}

const defaultProps = {
  hourString: '',
  onChange: '',
  label: '',
  className: null,
  containerClass: '',
}

// const CustomTimePicker = ({
//   hourString, onChange, label, containerClass,
// } : CustomTimePickerProps) => {
//   const convertedHour = ConvertHourToDate(hourString)

//   return (
//     <div className={classNames(styles.container, containerClass)}>
//       {label && <p>{label}</p>}
//       {/* Package: https://www.npmjs.com/package/material-ui-time-picker */}
//       <TimeInput
//         mode="24h"
//         value={convertedHour}
//         onChange={(time) => onChange(ExtractHoursFromDate(time))}
//         color="red"
//       />
//     </div>

//   )
// }

// CustomTimePicker.defaultProps = defaultProps

// export default CustomTimePicker
