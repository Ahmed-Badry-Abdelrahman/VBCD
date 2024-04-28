import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './login.css';
import overviewLog from '/src/assets/images/overview-log.png';
import uprumorLog from '/src/assets/images/uprumor-log.png';
import appointmentLog from '/src/assets/images/appointments-log.png';
const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('user');
    const [error, setError] = useState('');
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex(prevIndex => (prevIndex + 1) % 3);
        }, 4000); // Change the interval here to control the speed (2s in this case)

        return () => clearInterval(interval);
    }, []);

    const images = [appointmentLog, uprumorLog, overviewLog];
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://reqres.in/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password, role }),
            });

            if (response.ok) {
                const data = await response.json();
                if (data.success) {
                    // Login successful
                    console.log('Logged in successfully');
                    console.log('Role:', role);

                    // Save the JWT token to local storage
                    localStorage.setItem('jwtToken', data.token);

                    // Redirect user to dashboard or desired page
                    // Redirect logic here...
                } else {
                    // Login failed
                    setError(data.message || 'Login failed');
                }
            } else {
                // Handle server error
                setError('Server error. Please try again later.');
            }
        } catch (error) {
            console.error('Error during login:', error);
            setError('An unexpected error occurred. Please try again later.');
        }
    };

    // ##################################################################################  //
    //                                         TEST                                        //
    // ##################################################################################  //

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     try {
    //         const response = await fetch('https://reqres.in/api/login', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({ email, password, role }),
    //         });

    //         if (response.ok) {
    //             // Login successful
    //             const data = await response.json();
    //             console.log('Logged in successfully');
    //             console.log('Role:', role);
    //             console.log('Token:', data.token);
    //             // Save the JWT token to local storage
    //             localStorage.setItem('jwtToken', data.token);

    //             // Redirect user to dashboard or desired page
    //             // Redirect logic here...
    //         } else {
    //             // Login failed
    //             setError('Login failed. Please check your credentials.');
    //         }
    //     } catch (error) {
    //         console.error('Error during login:', error);
    //         setError('An unexpected error occurred. Please try again later.');
    //     }
    // };

    // ##################################################################################  //
    //                                         TEST                                        //
    // ##################################################################################  //


    return (
        <div className='log-container'>
            <div className='log-content'>
                <div className='log-bk'>
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            className={index === currentImageIndex ? 'show' : ''}
                            alt={`Image ${index}`}
                        />
                    ))}
                </div>
                <div className='log-frm'>
                    <div className='form-group' >
                        <h2 className='log-title'>Login</h2>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    placeholder='Email'
                                />
                            </div>
                            <div>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    placeholder='Password'
                                />
                            </div>
                            <div className='forgot-pass'>
                                <Link to="/rest-password">Forgot Password ?</Link>
                            </div>
                            <div className='roles-container'>
                                <div>
                                    <input
                                        type="radio"
                                        id="user"
                                        value="user"
                                        checked={role === 'user'}
                                        onChange={() => setRole('user')}
                                    />
                                    <label htmlFor="user">User</label>
                                </div>
                                <div>
                                    <input
                                        type="radio"
                                        id="doctor"
                                        value="doctor"
                                        checked={role === 'doctor'}
                                        onChange={() => setRole('doctor')}
                                    />
                                    <label htmlFor="doctor">Doctor</label>
                                </div>
                                <div>
                                    <input
                                        type="radio"
                                        id="admin"
                                        value="admin"
                                        checked={role === 'admin'}
                                        onChange={() => setRole('admin')}
                                    />
                                    <label htmlFor="admin">Admin</label>
                                </div>
                            </div>
                            {error && <p className='form__error'>{error}</p>}
                            <button type="submit">Login</button>
                        </form>
                        <div className='sign-up-now'>
                            <p>Don&apos;t have an account? <Link to="/create-user"> Sign up now</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
