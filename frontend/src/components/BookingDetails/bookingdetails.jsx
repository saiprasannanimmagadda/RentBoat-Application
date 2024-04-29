import { useNavigate } from 'react-router-dom';
// import styles from './styles.module.css';
import axios from 'axios';
import { useState } from 'react';
import './bookingdetails.css'

const BookingDetails = ({ bookingDetails }) => {
    console.log(bookingDetails.date, "dateeee")
    const [error, setError] = useState();
    const navigate = useNavigate();
    const dateStr = bookingDetails?.date; // Assuming bookingDetails?.date is "2024-05-03T00:00:00.000Z"
    const dateObj = new Date(dateStr);
    const formattedDate = dateObj.toISOString().split('T')[0];



    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = `http://localhost:4000/api/v1/rentboat/${bookingDetails?._id}`
            const { data: res } = await axios.delete(url)
            navigate('/booking', { state: { message: res.message } });

        }
        catch (error) {
            if (error.response && error.response.status >= 400 && error.response.status <= 500) {
                setError(error.response.data.message);
            }
        }
    }

    return (

        bookingDetails && (
            <div className='right_details'>

                <div>
                    <div className="centered-container">
                        <h2 style={{ textAlign: 'center' }}>Booking Details</h2>
                        <table>
                            <tbody>
                                <tr>
                                    <td><strong>Name:</strong></td>
                                    <td>{bookingDetails?.firstName} {bookingDetails?.middleName} {bookingDetails?.lastName}</td>
                                </tr>
                                <tr>
                                    <td><strong>Email:</strong></td>
                                    <td>{bookingDetails?.email}</td>
                                </tr>
                                <tr>
                                    <td><strong>Phone:</strong></td>
                                    <td>{bookingDetails?.phone}</td>
                                </tr>
                                <tr>
                                    <td><strong>Type:</strong></td>
                                    <td>{bookingDetails?.type}</td>
                                </tr>
                                <tr>
                                    <td><strong>Number of Boats:</strong></td>
                                    <td>{bookingDetails?.count}</td>
                                </tr>
                                <tr>
                                    <td><strong>Duration:</strong></td>
                                    <td>{bookingDetails?.duration} hours</td>
                                </tr>
                                <tr>
                                    <td><strong>Date:</strong></td>
                                    <td>{formattedDate}</td>
                                </tr>
                                <tr>
                                    <td><strong>Start Time:</strong></td>
                                    <td>{bookingDetails?.startTime}</td>
                                </tr>
                            </tbody>

                        </table>
                        <center><button type='submit' onClick={handleSubmit} className="red_btn">Cancel Now</button></center>

                    </div>


                </div>
            </div>
        )

    );

}

export default BookingDetails;