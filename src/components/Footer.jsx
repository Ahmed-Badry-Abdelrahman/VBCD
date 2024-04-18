import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFlag } from "@fortawesome/free-regular-svg-icons";
import logoImg from "../assets/images/logo.png";
import './footer.css'


function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className='content'>
                    <div className='up-content'>
                        <div className='left-side'>
                            <ul>
                                <li><NavLink to={''}>
                                    <div className='logo'>
                                        <img src={logoImg} alt='logo-img' />
                                        <h1>Breast Cancer</h1>
                                    </div>
                                </NavLink></li>
                                <li>Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna
                                    aliqua. Ut enim ad minim veniam, quis</li>
                                <li><FontAwesomeIcon icon={faEnvelope} className='fo-icon'/><Link to={''}>info@examplemedical.com</Link></li>
                                <li><FontAwesomeIcon icon={faFlag} className='fo-icon'/><Link to={'#'}>227 Marion Street, Columbia</Link></li>
                            </ul>
                        </div>
                        <div className='mid'>
                            <ul>
                                <li><NavLink to={''}><h1>More Links</h1></NavLink></li>
                                <li><NavLink to={''}>Overview</NavLink></li>
                                <li><NavLink to={''}>Find a Doctor</NavLink></li>
                                <li><NavLink to={''}>AI Model</NavLink></li>
                                <li><NavLink to={''}>Patient & Visitors</NavLink></li>
                                <li><NavLink to={''}>Store</NavLink></li>
                                <li><NavLink to={''}>Storage</NavLink></li>
                            </ul>
                        </div>
                        <div className='right-side'>
                            <ul>
                                <li><h1>Site Information</h1></li>
                                <li><NavLink to={''}>Home</NavLink></li>
                                <li><NavLink to={''}>About Us</NavLink></li>
                                <li><NavLink to={''}>Services</NavLink></li>
                                <li><NavLink to={''}>Contact</NavLink></li>
                                <li><input type='text' placeholder='search...'/><button>Search</button></li>
                            </ul>
                        </div>
                    </div>
                    <div className='down-content'>
                    <span>&copy; {new Date().getFullYear()} - Breast Cancer Detection</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}


export default Footer

