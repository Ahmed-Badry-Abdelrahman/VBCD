import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import './contact-form.css'
function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Sending data to backend/server
        try {
            const response = await fetch('YOUR_BACKEND_URL', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                // Data successfully sent
                console.log('Message sent successfully');
            } else {
                // Error sending data
                console.error('Failed to send message');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };


    return (
        <div className='contact-container section-margin-bottom'>
            <div className='contact-content content'>
                <div className='left-side'>
                    <div className='row'>
                        <div className='c-icon'>
                            <FontAwesomeIcon className='contact-icon' icon={faLocationDot} />
                        </div>

                        <div className='row-content'>
                            <h2>Location</h2>
                            <p>A108 Adam Street, New York, NY </p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='c-icon'>
                            <FontAwesomeIcon className='contact-icon' icon={faEnvelope} />
                        </div>

                        <div className='row-content'>
                            <h2>Email</h2>
                            <p>info@example.com</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='c-icon'>
                            <FontAwesomeIcon className='contact-icon' icon={faPhone} />
                        </div>
                        <div className='row-content'>
                            <h2>Phone</h2>
                            <p>+20 01144155089</p>
                        </div>
                    </div>
                </div>
                <div className='right-side'>
                    <form onSubmit={handleSubmit}>
                        <div className='field-row-one'>
                            <div>
                                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder='Your Name' />
                            </div>
                            <div>
                                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder='Your Email' />
                            </div>
                        </div>
                        <div>
                            <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder='Subject' />
                        </div>
                        <div>
                            <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder='Your Massage...' />
                        </div>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;
