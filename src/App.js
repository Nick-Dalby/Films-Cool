import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { GlobalStyle } from './styles'

import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import User from './components/User/User'
import UserEdit from './components/User/UserEdit'

function App() {
  return (
    <>
      <GlobalStyle />
      <Router basename="/test_repository">
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/user" element={<User />} />
          <Route path="/user/edit" element={<UserEdit />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App
