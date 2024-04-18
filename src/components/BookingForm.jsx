import { useState } from 'react';
import './booking-form.css';

function BookingForm() {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [email, setEmail] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Gather appointment information
        const appointmentData = {
            name,
            email,
            date,
            time
        };

        // Send appointment information to the backend (replace 'your-backend-endpoint' with your actual backend endpoint)
        try {
            const response = await fetch('your-backend-endpoint', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(appointmentData)
            });

            // Handle response from backend
            if (response.ok) {
                console.log('Appointment saved successfully.');
                setSuccessMessage('Appointment saved successfully.');
                // Optionally, you can reset the form fields after successful submission
                setName('');
                setEmail('');
                setDate('');
                setTime('');
            } else {
                console.error('Failed to save appointment.');
                setErrorMessage('Failed to save appointment.');
            }
        } catch (error) {
            console.error('Error:', error);
            setErrorMessage('Error occurred while saving appointment.');
        }
    };

    return (
        <div className='booking-form-container section-margin-bottom'>
            <div className='booking-form-content content'>
                <div className='title'>
                    <h1>Booking Now</h1>
                </div>
                {successMessage && <p className="success-message">{successMessage}</p>}
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <form onSubmit={handleSubmit}>
                    <div className='f-row-one'>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Your name"
                            required
                        />

                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Your email"
                            required
                        />

                    </div>
                    <div className='f-row-tow'>
                        <input
                            type="text"
                            id="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            placeholder="mm/dd/yyyy"
                            required
                        />

                        <input
                            type="text"
                            id="time"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            placeholder="Enter time"
                            required
                        />

                        <button type="submit">Save</button>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default BookingForm;
