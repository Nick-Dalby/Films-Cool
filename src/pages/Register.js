import { useState, useEffect } from 'react'
import { FaUser } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { register, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'

const Register = () => {
  const [formData, setFormData] = useState({
    Username: '',
    Password: '',
    Email: '',
    Birthday: '',
  })

  const { Username, Password, Email, Birthday } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess || user) {
      navigate('/')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if (Password.length < 6) {
      toast.error('Password must be 6 characters or more')
    } else {
      const userData = {
        Username,
        Password,
        Email,
        Birthday,
      }

      dispatch(register(userData))
    }
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <div className="container">
      <section className="heading">
        <h1>
          <FaUser /> Register
        </h1>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="Username"
              name="Username"
              value={Username}
              placeholder="enter a username"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="Email"
              name="Email"
              value={Email}
              placeholder="enter your email address"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="Password"
              name="Password"
              value={Password}
              placeholder="enter a password"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Date of birth:</label>
            <input
              type="date"
              className="form-control"
              id="Birthday"
              name="Birthday"
              value={Birthday}
              placeholder="enter your date of birth"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block">
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  )
}

export default Register
