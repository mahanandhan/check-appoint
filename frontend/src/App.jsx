import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Start from './pages/Start'
import ForgotPassword from './pages/ForgotPassword'
import Main from './components/Main'
import Profile from './pages/Profile'
import Appointments from './pages/Appointments'
import Settings from './pages/Settings'
import PastAppointment from './pages/PastAppointment'
// import Hospitals from './pages/Hospitals'
// import Doctors from './pages/Doctors'
import Privicy from './pages/Privicy'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/dashboard' element={<Main />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/appointments' element={<Appointments />} />
        <Route path='/past-appointment' element={<PastAppointment />} />
        <Route path='/settings' element={<Settings />} />
        {/* <Route path='/hospitals' element={<Hospitals />} /> */}
        {/* <Route path='/doctors/:cadreName' element={<Doctors />} /> */}
        <Route path='/privicy' element={<Privicy />} />
      </Routes>
    </div>
  )
}

export default App
