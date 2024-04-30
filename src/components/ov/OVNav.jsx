import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownLong } from "@fortawesome/free-solid-svg-icons";
import './nav-bar.css'; // Import CSS file for NavBar styling

const NavBar = () => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 715.5); // Update state based on scroll position
        };

        window.addEventListener('scroll', handleScroll); // Listen for scroll events

        return () => {
            window.removeEventListener('scroll', handleScroll); // Clean up scroll event listener
        };
    }, []);

    return (
        <div className='navbar-container'>
            <div className='navbar-content'>
                <nav className={isSticky ? 'sticky' : ''} >
                    <ul>
                        <li><span>Contents <FontAwesomeIcon icon={faDownLong} /></span></li>
                        <li><a href="#Overview">Overview</a></li>
                        <li><a href="#Symptoms-and-Causes">Symptoms and Causes</a></li>
                        <li><a href="#Diagnosis-and-Tests">Diagnosis and Tests</a></li>
                        <li><a href="#Stages-of-Breast-Cancer">Stages of Breast Cancer</a></li>
                        <li><a href="#Management-and-Treatment">Management and Treatment</a></li>
                        <li><a href="#Management-and-Treatment">Prevention</a></li>
                        <li><a href="#Outlook-and-Prognosis">Outlook / Prognosis</a></li>
                        <li><a href="#Living-With">Living With</a></li>
                        <li><a href="#Additional-Common-Questions">Additional Common Questions</a></li>
                        {/* Add more sections as needed */}
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default NavBar;
