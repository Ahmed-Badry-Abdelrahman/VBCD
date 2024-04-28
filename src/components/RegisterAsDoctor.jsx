import { useState, useEffect } from 'react';
import './register.css';
import overviewLog from '/src/assets/images/overview-log.png';
import uprumorLog from '/src/assets/images/uprumor-log.png';
import appointmentLog from '/src/assets/images/appointments-log.png';

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '', // Added email field
        phoneNumber: '',
        password: '',
        confirmPassword: '',
        country: '',
        city: '',
        age: '',
        gender: '',
        specialization: '', // Added specialization field
        experience: '', // Added experience field
        image: null, // Added image field
    });

    const [passwordStrength, setPasswordStrength] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [phoneNumberError, setPhoneNumberError] = useState('');
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData({ ...formData, image: file });
        } else {
            // Handle the case where no file was selected
            console.error('No file selected.');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Password validation
        if (formData.password.length < 8 || !/[a-zA-Z]/.test(formData.password)) {
            setPasswordError('Password must be at least 8 characters long and contain at least one letter.');
            return;
        } else {
            setPasswordError('');
        }

        // Confirm password validation
        if (formData.password !== formData.confirmPassword) {
            setConfirmPasswordError('Passwords do not match.');
            return;
        } else {
            setConfirmPasswordError('');
        }

        // Phone number validation
        if (!/^\d+$/.test(formData.phoneNumber)) {
            setPhoneNumberError('Phone number should contain only numbers.');
            return;
        } else {
            setPhoneNumberError('');
        }

        setSubmitting(true);

        // Prepare form data with image
        const formDataWithImage = new FormData();
        for (const key in formData) {
            formDataWithImage.append(key, formData[key]);
        }

        // Perform submission to the server
        fetch('https://reqres.in/api/register', {
            method: 'POST',
            body: formDataWithImage,
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                setSuccessMessage('Sign up successful!'); // Set success message
                setErrorMessage(''); // Clear any previous error message
                localStorage.setItem('jwtToken', data.token);
                // You can perform any necessary actions after successful submission
            })
            .catch((error) => {
                console.error('Error:', error);
                setErrorMessage('Error occurred during sign up. Please try again.'); // Set error message
                setSuccessMessage(''); // Clear any previous success message
                // Handle errors if any
            })
            .finally(() => {
                setSubmitting(false);
            });
    };

    const handlePasswordChange = (e) => {
        const password = e.target.value;
        checkPasswordStrength(password);
        handleChange(e);
    };

    const checkPasswordStrength = (password) => {
        // Function to check password strength
        // Example: Check if password contains at least 8 characters,
        // one letter, and one special character
        const letterRegex = /[a-zA-Z]/; // Regular expression to match any letter
        const specialCharRegex = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/; // Regular expression to match any special character

        if (password.length >= 8 && letterRegex.test(password) && specialCharRegex.test(password)) {
            setPasswordStrength('strong');
        } else {
            setPasswordStrength('weak');
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex(prevIndex => (prevIndex + 1) % 3);
        }, 4000); // Change the interval here to control the speed (2s in this case)

        return () => clearInterval(interval);
    }, []);
    const images = [appointmentLog, uprumorLog, overviewLog];

    return (
        <div className="reg-container">
            <div className='reg-content' >
                <div className='reg-bk'>
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            className={index === currentImageIndex ? 'show' : ''}
                            alt={`Image ${index}`}
                        />
                    ))}
                </div>
                <div className='reg-frm'>
                    <div className='form-group' >
                        <h2 className='reg-title'>Register</h2>
                        {successMessage && <p className="sn-up-success-message">{successMessage}</p>}
                        {errorMessage && <p className="sn-up-error-message">{errorMessage}</p>}
                        <form onSubmit={handleSubmit}>
                            <div>
                                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required placeholder='First Name' />
                            </div>
                            <div>
                                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required placeholder='Last Name' />
                            </div>
                            <div>
                                <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder='Email' />
                            </div>
                            <div>
                                <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required placeholder='Phone Number' />
                                {phoneNumberError && <p className="error-message">{phoneNumberError}</p>}
                            </div>
                            <div>
                                <input type="password" name="password" value={formData.password} onChange={handlePasswordChange} required placeholder='Password' />
                                {passwordError && <p className="error-message">{passwordError}</p>}
                                {passwordStrength === 'weak' && <p className='weak-pass'>Password must be at least 8 characters, letter and special character #,@,-&,$</p>}
                                {passwordStrength === 'strong' && <p className='strong-pass'>your password is good.</p>}
                            </div>
                            <div>
                                <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required placeholder='Confirm Password' />
                                {confirmPasswordError && <p className="error-message">{confirmPasswordError}</p>}
                            </div>
                            <div>
                                <input type="text" name="country" value={formData.country} onChange={handleChange} required placeholder='Country' />
                            </div>
                            <div>
                                <input type="text" name="city" value={formData.city} onChange={handleChange} required placeholder='City' />
                            </div>
                            <div>
                                <input type="number" name="age" value={formData.age} onChange={handleChange} required placeholder='Age' />
                            </div>
                            <div>
                                <input type="text" name="specialization" value={formData.specialization} onChange={handleChange} required placeholder='Specialization' />
                            </div>
                            <div>
                                <input type="text" name="experience" value={formData.experience} onChange={handleChange} required placeholder='Experience' />
                            </div>
                            <div>
                                <input type="file" name="image" onChange={handleImageChange} required accept="image/*" />
                            </div>
                            <div className='radio-btm'>
                                <div>
                                    <input type="radio" id="male" name="gender" value="male" onChange={handleChange} required />
                                    <label htmlFor="male">Male</label>
                                </div>
                                <div>
                                    <input type="radio" id="female" name="gender" value="female" onChange={handleChange} required />
                                    <label htmlFor="female">Female</label>
                                </div>
                            </div>
                            <button type="submit" disabled={submitting}>Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
