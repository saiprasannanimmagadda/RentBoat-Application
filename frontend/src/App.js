import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import Signup from './components/Signup'
import Login from './components/Login'
import ContactUs from './components/contactus/contactus'
import AboutUs from './components/AboutUs/aboutus';
import Booking from './components/Booking/booking';
import BookingDetails from './components/BookingDetails/bookingdetails';

function App() {
  const user = localStorage.getItem("token")
  return (


    < Routes >
      <Route path='/home' exact element={<Home />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/booking" element={<Booking />} />
      <Route path='/signup' exact element={<Signup />} />
      <Route path='/login' exact element={<Login />} />
      <Route path='/bookingDetails' exact element={<BookingDetails />} />
      <Route path='/' exact element={<Navigate replace to="/Home" />} />
    </Routes >

  );
}

export default App;
