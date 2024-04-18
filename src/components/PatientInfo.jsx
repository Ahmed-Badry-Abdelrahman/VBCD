
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons";
import '../components/patient-info.css'
function PatientInfo() {
    return (
        <div className='patient-info-container section-margin-bottom'>
            <div className='patient-info-content content'>
                <div className='up-side'>
                    <h1>Patient & Visitor</h1>
                    <p>We are here to assist you before, during and after your visit to our website. Find everything you need to make your time here as pleasant and comfortable as possible.</p>
                </div>
                <div className='down-side'>
                    <div className='info-card'>
                        <div className='title'>
                            <h1><FontAwesomeIcon className='info-icon' icon={faHandHoldingHeart} /> Patient Information </h1>
                        </div>
                        <div className='details'>
                            <p> Important information and questions you need to know before your appointment with your doctor to get the most benefit and reserve your life. </p>
                        </div>
                        <div className='link box'>
                            <Link to='/AskDoctor'> Questions to ask your doctor </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PatientInfo
