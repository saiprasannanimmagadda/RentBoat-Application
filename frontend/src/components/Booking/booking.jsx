import React, { useEffect } from 'react';
import './booking.css';
import BookingDetails from '../BookingDetails/bookingdetails';
import axios from 'axios';
import { useState } from 'react';

import { useNavigate, useLocation } from 'react-router-dom';


const Booking = () => {
    const [data, setData] = useState({
        firstName: "",
        middleName: "",
        lastName: "",
        phone: "",
        email: "",
        type: "",
        count: "",
        duration: "",
        date: "",
        startTime: ""
    });

    const [error, setError] = useState();
    const [message, setMessage] = useState("");
    const [bookingDetails, setBookingDetails] = useState(null);
    const location = useLocation();
    const params = location;
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate('/');
        window.location.reload();
    };

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "http://localhost:4000/api/v1/rentboat"
            const { data: res } = await axios.post(url, data)
            setBookingDetails(res.data.rentboat);
            setData({
                firstName: "",
                middleName: "",
                lastName: "",
                phone: "",
                email: "",
                type: "",
                count: "",
                duration: "",
                date: "",
                startTime: ""
            });
        }
        catch (error) {
            if (error.response && error.response.status >= 400 && error.response.status <= 500) {
                setError(error.response.data.message);
            }
        }
    }
    useEffect(() => {
        if (params.state != null) {
            setBookingDetails(null);
            setMessage(params?.state?.message);
        }
    }, [params.state])

    return (
        <div>  <button className='back' onClick={() => {
            navigate('/')
        }}> Back to Home </button>
            <button className='logout' onClick={handleLogout}> Logout </button>
            {bookingDetails ? (<BookingDetails bookingDetails={bookingDetails} />) :
                (<div className="signup_container">

                    <div className="signup_form_container">

                        <div className="right">

                            <form className="form_container" onSubmit={handleSubmit}>
                                {message && (<center><p>
                                    {message}
                                </p> </center>)}

                                <h1> Book Now </h1>
                                <input type='text' placeholder='first name' name='firstName' onChange={handleChange}
                                    value={data.firstName} required className="input" />
                                <input type='text' placeholder='middle name' name='middleName' onChange={handleChange}
                                    value={data.middleName} className="input" />
                                <input type='text' placeholder='last name' name='lastName' onChange={handleChange}
                                    value={data.lastName} required className="input" />
                                <input type='text' placeholder='phone number' name='phone' onChange={handleChange}
                                    value={data.phone} required className="input" />
                                <input type='text' placeholder='Email' name='email' onChange={handleChange}
                                    value={data.email} required className="input" />

                                <select name='type' onChange={handleChange} value={data.type} required className="input">
                                    <option value="">Select type</option>
                                    <option value="Boat">Boat (50$ per hr)</option>
                                    <option value="Kayak">Kayak (35$ per hr)</option>
                                    <option value="Paddle Board">Paddle Board (35$ per hr)</option>
                                </select>
                                <input type='number' placeholder='Number of Boats' name='count' onChange={handleChange}
                                    value={data.count} required className="input" />
                                <input type='number' placeholder='duration' name='duration' onChange={handleChange}
                                    value={data.duraton} required className="input" />
                                <input type='date' placeholder='date' name='date' onChange={handleChange}
                                    value={data.date} required className="input" />
                                <input type='text' placeholder='start time' name='startTime' onChange={handleChange}
                                    value={data.startTime} required className="input" />
                                {error && <div >{error}</div>}
                                <button type='submit' className="green_btn">Book Now</button>
                            </form>
                        </div>

                    </div>
                </div >)}
        </div>
    );
};

export default Booking;
