import { Link, useNavigate } from 'react-router-dom'
import { FaSignInAlt, FaSignOutAlt, FaUser, FaFilm } from 'react-icons/fa'
import { Logo, HeaderContainer } from './styles'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'

import { useLocation } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  const location = useLocation()

  console.log(location.pathname)

  return (
    <HeaderContainer>
      <Link to="/">
        <Logo title="Films Cool Logo" />
      </Link>

      <ul>
        {user ? (
          <>
            {location.pathname === '/user' ? (
              <li>
                <Link to="/">
                  <button className="btn icon">
                    <FaFilm />
                  </button>
                </Link>
              </li>
            ) : (
              <li>
                <Link to="/user">
                  <button className="btn icon">
                    <FaUser />
                  </button>
                </Link>
              </li>
            )}

            <li>
              <button className="btn icon" onClick={onLogout}>
                <FaSignOutAlt />
              </button>
            </li>
          </>
        ) : (
          <>
            {location.pathname === '/login' ? (
              <li>
                <Link to="/register">
                  <button className="btn">
                    <FaUser /> Register
                  </button>
                </Link>
              </li>
            ) : (
              <li>
                <Link to="/login">
                  <button className="btn">
                    <FaSignInAlt />
                    Login
                  </button>
                </Link>
              </li>
            )}
          </>
        )}
      </ul>
    </HeaderContainer>
  )
}

export default Header
