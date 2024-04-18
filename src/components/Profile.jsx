import { useState, useEffect } from 'react';
import axios from 'axios';
// import getUserInfo from '../components/GetUserInfo';
import usersData from '../pages/users.json'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import "./profile.css";
const ProfilePage = () => {
    const [userInfo, setUserInfo] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        role: '',
        img: ''
    });
    const [editing, setEditing] = useState(false);

    useEffect(() => {
        const fetchUserInfo = async () => {
            // // Example usage: assume 'username' and 'password' are stored in state or received from props
            // const username = 'example_username';
            // const password = 'example_password';

            // // Call the function to retrieve user information
            // const userData = await getUserInfo(username, password);
            // if (userData) {
            //     setUserInfo(userData);
            //     // Set the form data to the retrieved user information
            //     setFormData(userData);
            // }

            setUserInfo(usersData[0]); // Set the first user from the JSON file as initial user info
        };

        fetchUserInfo();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleEdit = () => {
        setEditing(true);
    };

    const handleSave = async () => {
        try {
            // Make a PUT request to update the user information in the database
            await axios.put('/api/update-user-info', formData);
            // After successful update, update the local user info state
            setUserInfo(formData);
            setEditing(false);
        } catch (error) {
            console.error('Error updating user information:', error);
        }
    };

    if (!userInfo) {
        return <div>Loading user info...</div>;
    }

    return (
        <div className="profile-page ">
            <div className="profile-page-content">
                <div className="user-info">
                    <div className='user-info-container'>
                        <div className="user-info-img">
                            <img src={userInfo.img} />
                        </div>
                        <div className="user-info-details">
                            <h2>{userInfo.name} </h2>
                            <p> {userInfo.phone || 'Not provided'}</p>
                        </div>
                    </div>
                    <div className="user-notification">
                        <div >
                            <FontAwesomeIcon className='notifications-icon' icon={faBell} />
                        </div>

                    </div>
                </div>
                <div className='user-details-container'>
                    <div className='edit-btn'>
                        {editing ? (

                            <button onClick={handleSave}>Save</button>
                        ) : (
                            <button onClick={handleEdit}><FontAwesomeIcon icon={faPenToSquare} /> Edit</button>
                        )}
                    </div>
                    <div className='user-details'>
                        <form>
                            <label>
                                Name:
                                {editing ? (
                                    <input className='name' type="text" name="name" value={formData.name} onChange={handleChange} placeholder={userInfo.name} />
                                ) : (
                                    <input className='name' type="text" name="name" placeholder={userInfo.name} readOnly />
                                )}
                            </label>
                            <label>
                                Email:
                                {editing ? (
                                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder={userInfo.email} />
                                ) : (
                                    <input type="email" name="email" placeholder={userInfo.email} readOnly  />
                                )}
                            </label>
                            <label>
                                Phone:
                                {editing ? (
                                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder={userInfo.phone} />
                                ) : (
                                    <input type="tel" name="phone" placeholder={userInfo.phone} readOnly   />
                                )}
                            </label>
                            <label>
                                Role:
                                {editing ? (
                                    <input type="text" name="role" value={formData.role} onChange={handleChange} placeholder={userInfo.role} />
                                ) : (
                                    <input type="text" name="role"  placeholder={userInfo.role}  readOnly />
                                )}
                            </label>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
