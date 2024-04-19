import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import "./profile.css";
import profile_img from '../assets/images/profile.png';
import usersData from '../pages/users.json';

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
    const [saveMessage, setSaveMessage] = useState({ content: '', success: null });

    const nameInputRef = useRef(null);

    useEffect(() => {
        const fetchUserInfo = async () => {
            // Fetch user info from a database or any other source
            setUserInfo(usersData[0]);
        };

        fetchUserInfo();
    }, []);

    useEffect(() => {
        if (editing && nameInputRef.current) {
            nameInputRef.current.focus();
        }
    }, [editing]);

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
            setSaveMessage({ content: 'Changes saved successfully!', success: true });
        } catch (error) {
            console.error('Error updating user information:', error);
            setSaveMessage({ content: 'Failed to save changes. Please try again.', success: false });
        }
    };

    return (
        <div className="profile-page ">
            <div className="profile-page-content">
                <div className="user-info">
                    {userInfo && (
                        <div className='user-info-container'>
                            <div className="user-info-img">
                                <img src={profile_img} alt="Profile" />
                            </div>
                            <div className="user-info-details">
                                <h2>{userInfo.name} </h2>
                                <p> {userInfo.phone || 'Not provided'}</p>
                            </div>
                        </div>
                    )}
                    <div className="user-notification">
                        <div>
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
                    {saveMessage.content && (
                        <div className={`save-message-${saveMessage.success ? 'success' : 'failure'}`}>
                            {saveMessage.content}
                        </div>
                    )}
                    <div className='user-details'>
                        <form>
                            <label>
                                Name:
                                {editing ? (
                                    <input ref={nameInputRef} className='name' type="text" name="name" value={formData.name} onChange={handleChange} placeholder={userInfo ? userInfo.name : ''} />
                                ) : (
                                    <input className='name' type="text" name="name" placeholder={userInfo ? userInfo.name : ''} readOnly />
                                )}
                            </label>
                            <label>
                                Email:
                                {editing ? (
                                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder={userInfo ? userInfo.email : ''} />
                                ) : (
                                    <input type="email" name="email" placeholder={userInfo ? userInfo.email : ''} readOnly  />
                                )}
                            </label>
                            <label>
                                Phone:
                                {editing ? (
                                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder={userInfo ? userInfo.phone : ''} />
                                ) : (
                                    <input type="tel" name="phone" placeholder={userInfo ? userInfo.phone : ''} readOnly   />
                                )}
                            </label>
                            <label>
                                Role:
                                {editing ? (
                                    <input type="text" name="role" value={formData.role} onChange={handleChange} placeholder={userInfo ? userInfo.role : ''} readOnly />
                                ) : (
                                    <input type="text" name="role"  placeholder={userInfo ? userInfo.role : ''}  readOnly />
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
