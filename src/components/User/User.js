import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { H3, Container } from './styles'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { logout, reset } from '../../features/auth/authSlice'

const User = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const user = JSON.parse(localStorage.getItem('user'))
  const token = localStorage.getItem('token')

  const { favoriteMovieArray } = useSelector((state) => state.userData)

  const deleteAcount = () => {
    if (window.confirm('are you sure?')) {
      axios
        .delete(
          `https://afternoon-badlands-59179.herokuapp.com/users/${user.Username}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .then(() => {
          dispatch(logout())
          dispatch(reset())
          navigate('/')
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }

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
        <button className="btn" onClick={deleteAcount}>
          delete account
        </button>
        <Link to="/user/edit">
          <button className="btn">edit details</button>
        </Link>
      </div>

      <H3>Favorite films:</H3>
      {favoriteMovieArray.map((movie) => (
        <p key={movie._id}>{movie.Title}</p>
      ))}
    </Container>
  )
}

export default User
