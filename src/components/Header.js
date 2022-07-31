import { Link } from 'react-router-dom'
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Logo, HeaderContainer } from './styles'

const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/">
        <Logo title="Films Cool Logo" />
      </Link>

      <ul>
        <li>
          <Link to="/login">
            <FaSignInAlt /> Login
          </Link>
        </li>
        <li>
          <Link to="/register">
            <FaUser /> Register
          </Link>
        </li>
      </ul>
    </HeaderContainer>
  )
}

export default Header
