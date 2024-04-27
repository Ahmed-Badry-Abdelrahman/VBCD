


import { useState } from 'react';
import './rest-password.css'; // Import CSS file for styling

const ResetPassword = () => {
    const [email, setEmail] = useState('');
    const [verificationCode, setVerificationCode] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [passwordReset, setPasswordReset] = useState(false);
    const [resetStep, setResetStep] = useState(1);
    const [errorMessage, setErrorMessage] = useState('');
    const [serverMessage, setServerMessage] = useState('');

    const checkFieldsFilled = () => {
        if (resetStep === 1 && email.trim() === '') {
            setErrorMessage('Please enter your email.');
            return false;
        } else if (resetStep === 2 && verificationCode.trim() === '') {
            setErrorMessage('Please enter the verification code.');
            return false;
        } else if (resetStep === 3 && newPassword.trim() === '') {
            setErrorMessage('Please enter a new password.');
            return false;
        }
        return true;
    };

    const isValidEmail = (email) => {
        // Regular expression for email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };



    const isValidVerificationCode = () => {
        return /^\d{6}$/.test(verificationCode);
    };


    const isValidNewPassword = (password) => {
        // Password must be at least 8 characters long
        if (password.length < 8) {
            return false;
        }

        // Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character
        const lowercaseRegex = /[a-z]/;
        const uppercaseRegex = /[A-Z]/;
        const digitRegex = /[0-9]/;
        const specialCharRegex = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;

        if (!lowercaseRegex.test(password) ||
            !uppercaseRegex.test(password) ||
            !digitRegex.test(password) ||
            !specialCharRegex.test(password)) {
            return false;
        }

        return true;
    };


    // Function to send email to the server for verification code
    const sendVerificationEmail = async () => {
        if (!isValidEmail(email)) {
            setErrorMessage('Please enter a valid email.');
            return;
        }

        // Proceed with sending verification email
        try {
            // Send email to the server
            const response = await fetch('/api/send-verification-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });
            const data = await response.json();
            if (response.ok) {
                setServerMessage(data.message);
                setResetStep(2);
            } else {
                setErrorMessage(data.error);
            }
        } catch (error) {
            setErrorMessage('An error occurred while sending the verification email.');
        }
    };


    // Function to verify verification code
    const verifyCode = async () => {
        if (!isValidVerificationCode()) {
            setErrorMessage('Please enter a 6-digit verification code.');
            return;
        }

        // Proceed with verifying code
        try {
            // Send verification code to the server
            const response = await fetch('/api/verify-code', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, verificationCode }),
            });
            const data = await response.json();
            if (response.ok) {
                setServerMessage(data.message);
                setResetStep(3);
            } else {
                setErrorMessage(data.error);
            }
        } catch (error) {
            setErrorMessage('An error occurred while verifying the code.');
        }
    };


    // Function to reset password
    const resetPassword = async () => {
        if (!isValidNewPassword()) {
            setErrorMessage('Please enter a strong password (at least 8 characters).');
            return;
        }

        // Proceed with resetting password
        try {
            // Send new password to the server
            const response = await fetch('/api/reset-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, newPassword }),
            });
            const data = await response.json();
            if (response.ok) {
                setServerMessage(data.message);
                setPasswordReset(true);
            } else {
                setErrorMessage(data.error);
            }
        } catch (error) {
            setErrorMessage('An error occurred while resetting the password.');
        }
    };

    const handleEmailSubmit = (e) => {
        e.preventDefault();
        if (checkFieldsFilled()) {
            sendVerificationEmail();
        }
    };

    const handleVerificationCodeSubmit = (e) => {
        e.preventDefault();
        if (checkFieldsFilled()) {
            verifyCode();
        }
    };

    const handlePasswordReset = (e) => {
        e.preventDefault();
        if (checkFieldsFilled()) {
            resetPassword();
        }
    };

    return (
        <div className="reset-password-container">
            <div className='reset-password-content'>
                {passwordReset ? (
                    <p className="success-message">{serverMessage}</p>
                ) : (
                    <div>
                        {resetStep === 1 && (
                            <form onSubmit={handleEmailSubmit}>
                                <h2>Reset Password</h2>
                                <p>Enter the email address associated with your account. We will send you a verification code to reset your password.</p>
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
                                <button type="submit">Submit</button>
                            </form>
                        )}
                        {resetStep === 2 && (
                            <form onSubmit={handleVerificationCodeSubmit}>
                                <p>Please check your email for a verification code.</p>
                                <input type="text" value={verificationCode} onChange={(e) => setVerificationCode(e.target.value)} placeholder='Verification Code' />
                                <button type="submit">Submit</button>
                            </form>
                        )}
                        {resetStep === 3 && (
                            <form onSubmit={handlePasswordReset}>
                                <p>Please enter your new password below.</p>
                                <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder='New Password' />
                                <button type="submit">Reset Password</button>
                            </form>
                        )}
                        {errorMessage && <p className="error-message">{errorMessage}</p>}
                        {serverMessage && <p className="success-message">{serverMessage}</p>}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ResetPassword;
