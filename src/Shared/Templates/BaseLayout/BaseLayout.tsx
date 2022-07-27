import globalStyles from 'assets/scss/globals.module.scss'
import { ReactNode, useState } from 'react'
import Header from 'Shared/Templates/BaseLayout/Components/Header/Header'
import Overlay from 'Shared/Templates/Overlay/Overlay'
import styles from './BaseLayout.module.scss'

export interface BaseLayoutProps {
  children: ReactNode,
  isMainPage?: boolean,
}

const BaseLayout = ({ children, isMainPage } : BaseLayoutProps) => {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <div className={styles.baseLayoutContainer}>
      <Overlay
        isOpened={openMenu}
        close={setOpenMenu}
      />
      <Header
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
      />

      <div className={styles.baseLayout}>
        {isMainPage
          ? <section className={globalStyles.mainPage}>{ children }</section>
          : children }
      </div>
    </div>
  )
}

BaseLayout.defaultProps = {
  isMainPage: true,
}

export default BaseLayout
