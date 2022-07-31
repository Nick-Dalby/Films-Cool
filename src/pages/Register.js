import { useState, useEffect } from 'react'
import { FaUser } from 'react-icons/fa'

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    birthday: '',
  })

  const { username, password, email, birthday } = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <div className="container">
      <section className="heading">
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please create an account</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              value={username}
              placeholder="enter a username"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={email}
              placeholder="enter your email address"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              placeholder="enter a password"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <p>Date of birth:</p>
            <input
              type="date"
              className="form-control"
              id="birthday"
              name="birthday"
              value={birthday}
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
