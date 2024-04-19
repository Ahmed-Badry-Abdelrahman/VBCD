/* eslint-disable react/prop-types */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import './s-doctor-card.css'
function SDoctorCard(props) {
    return (
        <div className='d-card'>
        <div className='up-side'>
            <div className='img-container'>
                <img src={props.image} alt="doctor" />
            </div>
            <div className='info'>
                <h2>{props.name}</h2>
                <section className="rating">
                    <FontAwesomeIcon className='r-icon' icon={faStar} />
                    <FontAwesomeIcon className='r-icon' icon={faStar} />
                    <FontAwesomeIcon className='r-icon' icon={faStar} />
                    <FontAwesomeIcon className='r-icon' icon={faStar} />
                    <FontAwesomeIcon className='r-icon' icon={faStar} />
                    <span>(5/5)</span>
                </section>
            </div>
        </div>
        <div className='more-info'>
            <div className='left'>
                <h3>Specialty </h3>
                <p>{props.specialty}</p>
            </div>
            <div className='right'>
                <div>
                <h3>Location </h3>
                <p>{props.location}</p>
                </div>
                {/* Use a function to handle the click event */}
                <Link to={`/doctor-information/${props.id}`}  target="_blank" className="appointment-link">
                    <span>Request an </span>Appointment
                </Link>
            </div>
        </div>
    </div>
    )
}

export default SDoctorCard
