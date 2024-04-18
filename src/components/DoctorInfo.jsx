import React, { useState, useEffect } from 'react';
import Button from '../components/button';
import Loading from '../components/Loading'
import { useParams } from 'react-router-dom';
import './doctor-info.css';

function DoctorInfo() {
    const { id } = useParams(); // Extract the 'id' parameter from the URL
    // const [doctorData, setDoctorData] = useState(null);
    console.log(id)
    // Sample doctor data for testing
    const doctorData = {
        id: '2',
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '123-456-7890',
        imageSrc: '/src/assets/images/doctor-info-card.png',
        biography: 'Sample biography text...',
        appointments: [
            { id: '1', date: '01/01/2024', time: '10:00 AM' },
            { id: '2', date: '01/02/2024', time: '11:00 AM' },
            { id: '3', date: '01/03/2024', time: '12:00 PM' }
        ]
    };

    // useEffect(() => {
    //     // Fetch doctor data based on ID from the backend
    //     fetch(`YOUR_API_ENDPOINT/${id}`)
    //         .then(response => response.json())
    //         .then(data => setDoctorData(data))
    //         .catch(error => console.error('Error fetching doctor data:', error));
    // }, [id]);

    if (!doctorData) {
        return <Loading />
    }

    return (
        <div className='doctor-info-container section-margin-bottom'>
            <div className='doctor-info-content content'>
                <div className='left-side'>
                    <div className='card'>
                        <div className='shadow'>
                            <img src={doctorData.imageSrc} alt='doctor-img' /> {/* Assuming imageSrc is part of doctorData */}
                            <div className='doctor-inf'>
                                <h1>{`Dr. ${doctorData.name}`}</h1>
                                <p>Email: {doctorData.email}</p>
                                <p>Phone: {doctorData.phone}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='right-side'>
                    <div className='biography'>
                        <h2>Biography</h2>
                        <p>{doctorData.biography}</p>
                    </div>
                    <div className='available-appointment'>
                        {doctorData.appointments.map(appointment => (
                            <div className='day' key={appointment.id}>
                                <p>{appointment.date}</p>
                                <p>{appointment.time}</p>
                            </div>
                        ))}
                    </div>
                    <Button btnText="Make an Appointment" link="" />
                </div>
            </div>
        </div>
    );
}

export default DoctorInfo;
