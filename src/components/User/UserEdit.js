import { useNavigate } from 'react-router-dom'
import { logout, reset } from '../../features/auth/authSlice'

import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'

const UserEdit = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  // const { user } = useSelector((state) => state.auth)
  const user = JSON.parse(localStorage.getItem('user'))

  const token = localStorage.getItem('token')
  const formatedDOB = user.Birthday
    ? new Date(user.Birthday).toLocaleDateString('en-CA')
    : ''

  const [formData, setFormData] = useState({
    Username: user.Username,
    Password: '',
    Email: user.Email,
    Birthday: formatedDOB,
  })

  const { Username, Password, Email, Birthday } = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if (!Password) {
      toast.error('Please update password')
    } else {
      const userData = {
        Username,
        Password,
        Email,
        Birthday,
      }
      console.log(userData)
      console.log(user.Username)
      console.log(formatedDOB)
      axios
        .put(
          `https://afternoon-badlands-59179.herokuapp.com/users/${user.Username}`,
          userData,
          {
            headers: {
              Authorization: `Bearer ${token} `,
            },
          }
        )
        .then((response) => {
          console.log(response.data)

          toast.success('updated, please sign in again')
          dispatch(logout())
          dispatch(reset())
          navigate('/')
        })
        .catch((error) => {
          console.log(error)
          toast.error('something went wrong')
        })
    }
  }

  return (
    <div className="container">
      <section className="heading">
        <h1>Edit your info:</h1>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="Username"
              name="Username"
              defaultValue={user.Username}
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
              defaultValue={user.Email}
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
              placeholder="update password"
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
              defaultValue={formatedDOB}
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

export default UserEdit
