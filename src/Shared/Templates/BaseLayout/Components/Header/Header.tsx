import logo from 'assets/images/logos/logo_transparent.png'
import { Squash as Hamburger } from 'hamburger-react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import Button from 'Shared/CommonComponents/Button/Button'
import Routes from 'Shared/Libs/Routes/Routes'
import SideBar from 'Shared/Templates/BaseLayout/Components/SideBar/SideBar'
import styles from './Header.module.scss'

export interface HeaderProps {
  openMenu : boolean
  setOpenMenu : React.Dispatch<React.SetStateAction<boolean>>
}

const Header = ({
  openMenu,
  setOpenMenu,
} : HeaderProps) => {
  const history = useHistory()

  return (
    <header className={styles.header}>
      <Hamburger
        toggled={openMenu}
        toggle={() => setOpenMenu(!openMenu)}
      />
      <Button onClick={() => history.push(Routes.HOME)} className={styles.logoContainer} styleType="main">
        <img src={logo} alt="logo" />
      </Button>
      <SideBar isOpened={openMenu} />
    </header>
  )
}

Header.propTypes = {
  openMenu: PropTypes.bool.isRequired,
  setOpenMenu: PropTypes.func.isRequired,
}

export default Header
