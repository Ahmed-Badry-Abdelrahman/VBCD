import { useState, useEffect } from 'react';
import Loading from '../components/Loading'
import './appointments.css';

function AppointmentsList() {
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true); // Add loading state

    useEffect(() => {
        // Fetch appointments for the user from backend (replace 'your-backend-endpoint' with your actual backend endpoint)
        fetchAppointments();
    }, []); // Fetch appointments on component mount

    const fetchAppointments = async () => {
        try {
            const response = await fetch('/src/pages/Appointments.json'); // Replace with actual endpoint
            if (response.ok) {
                const data = await response.json();
                setAppointments(data.appointments); // Assuming the response contains an array of appointments
            } else {
                console.error('Failed to fetch appointments.');
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false); // Update loading state when fetch completes
        }
    };

    const cancelAppointment = async (id) => {
        try {
            const response = await fetch(`/src/pages/Appointments.json/${id}`, {
                method: 'DELETE', // Assuming the backend supports DELETE method for canceling appointments
            });
            if (response.ok) {
                // Remove canceled appointment from the list
                setAppointments(appointments.filter(appointment => appointment.id !== id));
            } else {
                console.error('Failed to cancel appointment.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className='appointments-container section-margin-bottom'>
            <div className='appointments-content content'>
                <h2 id='Appointments-link'>Your Appointments</h2>
                {loading ? (
                    <Loading />
                ) : appointments.length > 0 ? (
                    <ul>
                        {appointments.map(appointment => (
                            <li key={appointment.id} className={appointment.status}>
                                <p>Name: {appointment.name}</p>
                                <p>Date: {appointment.date}</p>
                                <p>Status: {appointment.status}</p>
                                {(appointment.status === 'hanging' || appointment.status === 'accepted') && (
                                    <button onClick={() => cancelAppointment(appointment.id)}>Cancel</button>
                                )}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No appointments found.</p>
                )}
            </div>
        </div>
    );
}

export default AppointmentsList;
