import { useState, useEffect } from 'react';
import './appointments.css'
const DoctorAppointments = () => {
    const [acceptedAppointments, setAcceptedAppointments] = useState([]);
    const [pendingAppointments, setPendingAppointments] = useState([]);

    useEffect(() => {
        fetchAppointments();
    }, []);

    const fetchAppointments = async () => {
        try {
            // Fetch appointments from an API
            const response = await fetch('/src/pages/DoctorAppointmentList.json');
            const data = await response.json();

            // Separate accepted and pending appointments
            const accepted = data.filter(appointment => appointment.status === 'accepted');
            const pending = data.filter(appointment => appointment.status === 'pending');

            setAcceptedAppointments(accepted);
            setPendingAppointments(pending);
        } catch (error) {
            console.error('Error fetching appointments: ', error);
        }
    };

    const handleAccept = async (appointmentId) => {
        try {
            // Send a request to update the appointment status to accepted
            await fetch(`API_ENDPOINT/${appointmentId}`, {
                method: 'PUT',
                body: JSON.stringify({ status: 'accepted' }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            // Fetch appointments again to reflect the changes
            fetchAppointments();
        } catch (error) {
            console.error('Error accepting appointment: ', error);
        }
    };

    const handleReject = async (appointmentId) => {
        try {
            // Send a request to update the appointment status to rejected
            await fetch(`API_ENDPOINT/${appointmentId}`, {
                method: 'PUT',
                body: JSON.stringify({ status: 'rejected' }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            // Fetch appointments again to reflect the changes
            fetchAppointments();
        } catch (error) {
            console.error('Error rejecting appointment: ', error);
        }
    };

    return (
        <div className='appointments-container section-margin-bottom'>
            <div className='appointments-content content'>
                <h2>Accepted Appointments</h2>
                <ul className='accepted-appointments'>
                    {acceptedAppointments.map(appointment => (
                        <li className='accepted' key={appointment.id}>{appointment.patientName} - {appointment.date}</li>
                    ))}
                </ul>

                <h2>Pending Appointments</h2>
                <ul>
                    {pendingAppointments.map(appointment => (
                        <li className='pending' key={appointment.id}>
                            {appointment.patientName} - {appointment.date}
                            <div className='accept-reject-btn'>
                                <button className='accept' onClick={() => handleAccept(appointment.id)}>Accept</button>
                                <button className='reject' onClick={() => handleReject(appointment.id)}>Reject</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default DoctorAppointments;
