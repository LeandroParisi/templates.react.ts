/* eslint-disable no-use-before-define */
import {
  faAngleDown,
  faAngleUp,
  faArrowLeft,
  faArrowRight,
  faBan,
  faBoxes,
  faCalendarAlt,
  faCalendarCheck,
  faCheck,
  faClock,
  faCog,
  faDollarSign,
  faEdit,
  faEllipsisH,
  faEllipsisV,
  faFileAlt,
  faFileSignature,
  faHandHoldingUsd,
  faIdBadge,
  faListUl,
  faLock,
  faLockOpen,
  faMapMarkerAlt,
  faMinus,
  faMoneyBillWave,
  faPhoneAlt,
  faPlus,
  faReceipt,
  faSearchDollar,
  faStopwatch,
  faStore,
  faTimes,
  faTrash,
  faTruckLoading,
  faUser,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons'

export type IconNames = keyof typeof FaIconLib.GroupedIcons;
export type IconValues = typeof FaIconLib.GroupedIcons[IconNames];

export default class FaIconLib {
  private static MenuIcons = {
    STORE: faStore,
    LIST: faListUl,
    PRODUCT: faBoxes,
    PROMOTION: faSearchDollar,
    COUPOM: faReceipt,
    ACCOUNT: faIdBadge,
    CONFIGURATIONS: faCog,
  }

  private static GeneralIcons = {
    MANAGER: faIdBadge,
    ADDRESS: faMapMarkerAlt,
    DELIVERY_FEE: faHandHoldingUsd,
    DELIVERY_TYPE: faTruckLoading,
    PAYMENT_TYPE: faMoneyBillWave,

    ARROW_DOWN: faAngleDown,
    ARROW_UP: faAngleUp,
    CLOCK: faClock,
    ARROW_RIGHT: faArrowRight,
    ARROW_LEFT: faArrowLeft,
    CHECKMARK: faCheck,
    USER: faUser,
    PHONE: faPhoneAlt,

    CLOSE: faTimes,

    PRICE: faDollarSign,

    OPENED: faLockOpen,
    CLOSED: faLock,

    ADD: faPlus,
    REMOVE: faMinus,

    DESCRIPTION: faFileAlt,
    TRASH: faTrash,
    CALENDAR: faCalendarAlt,
    CALENDAR_CHECK: faCalendarCheck,

    HORIZONTAL_DOTS: faEllipsisH,
    VERTICAL_DOTS: faEllipsisV,

    CONDITIONS: faFileSignature,

    COUNTER: faStopwatch,
  }

  private static EntityMenuIcons = {
    edit: faEdit,
  }

  public static GroupedIcons = {
    ...this.MenuIcons,
    ...this.GeneralIcons,
    ...this.EntityMenuIcons,
  } as const

  private static InvalidIcon = faBan

  public static GetIcon(iconName : IconNames) : IconDefinition {
    return this.GroupedIcons[iconName] || FaIconLib.InvalidIcon
  }
}
