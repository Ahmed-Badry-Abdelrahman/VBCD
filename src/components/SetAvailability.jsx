import  { useState, useEffect } from 'react';
import './set-availability.css';

const SetAvailability = () => {
    const [selectedDays, setSelectedDays] = useState([]);
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [message, setMessage] = useState('');
    const [changesLeft, setChangesLeft] = useState(1); // Maximum changes allowed per month
    const [lastChangeDate, setLastChangeDate] = useState(null);

    useEffect(() => {
        const currentDate = new Date();
        const currentMonth = currentDate.getMonth();
        const lastChangeMonth = lastChangeDate ? lastChangeDate.getMonth() : null;

        if (lastChangeMonth !== currentMonth) {
            // Reset the changes count if it's a new month
            setChangesLeft(1);
        }
    }, [lastChangeDate]);

    const handleDayChange = (e) => {
        const options = e.target.options;
        const selectedDays = [];
        for (let i = 0; i < options.length; i++) {
            if (options[i].selected) {
                selectedDays.push(options[i].value);
            }
        }
        setSelectedDays(selectedDays);
    };

    const handleStartTimeChange = (e) => {
        setStartTime(e.target.value);
    };

    const handleEndTimeChange = (e) => {
        setEndTime(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (changesLeft <= 0) {
            setMessage('You have reached the maximum number of changes for this month.');
            return;
        }
        try {
            // Make a POST request to save availability to the database
            const response = await fetch('API_ENDPOINT', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ days: selectedDays, startTime, endTime }),
            });

            if (response.ok) {
                setMessage('Availability set successfully!');
                setLastChangeDate(new Date());
                setChangesLeft(changesLeft - 1);
            } else {
                setMessage('Failed to set availability. Please try again.');
            }
        } catch (error) {
            console.error('Error setting availability: ', error);
            setMessage('An error occurred. Please try again later.');
        }
    };

    return (
        <div className='availabilityForm section-margin-bottom'>
            <div className='availabilityForm-content content'>
                <h2>Set Availability</h2>
                {message && <p className='error-massage'>{message}</p>}
                <p className='help'>( click on Ctrl to  select multiple days. )</p>
                <form onSubmit={handleSubmit}>
                    <div className='dayField'>
                        <label htmlFor="day">Days: </label>
                        <select id="day" multiple value={selectedDays} onChange={handleDayChange} required>
                            <option value="Monday">Monday</option>
                            <option value="Tuesday">Tuesday</option>
                            <option value="Wednesday">Wednesday</option>
                            <option value="Thursday">Thursday</option>
                            <option value="Friday">Friday</option>
                            <option value="Saturday">Saturday</option>
                            <option value="Sunday">Sunday</option>
                        </select>
                    </div>
                    <div className='timeField'>
                        <div>
                            <label htmlFor="startTime">Start Time: </label>
                            <input type="time" id="startTime" value={startTime} onChange={handleStartTimeChange} required />
                        </div>
                        <div>
                            <label htmlFor="endTime">End Time: </label>
                            <input type="time" id="endTime" value={endTime} onChange={handleEndTimeChange} required />
                        </div>
                    </div>
                    <div className='sub-btn'>
                        <p className='changes-left'>( Changes left for this month: {changesLeft} )</p>
                        <button type="submit">Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SetAvailability;
