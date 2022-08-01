import { useDispatch, useSelector } from 'react-redux'
import { H2, H3, Container, P, Em } from './styles'
import { Link } from 'react-router-dom'

const User = () => {
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)

  // need to show user info and allow editing
  // need to show list of favs

  return (
    <Container>
      <H3>Username: {user.Username}</H3>
      <H3>Email: {user.Email}</H3>
      <H3>
        Date of birth:{' '}
        {user.Birthday
          ? new Date(user.Birthday).toLocaleDateString('en-CA')
          : ''}
      </H3>
      <div className="btn-container">
        <button className="btn">delete account</button>
        <Link to="/user/edit">
          <button className="btn">edit details</button>
        </Link>
      </div>

      <H3>Favorite films:</H3>
    </Container>
  )
}

export default User
