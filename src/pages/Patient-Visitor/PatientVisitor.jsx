
import './patient-visitor.css'
import Header from '../../components/Header'
import Hero2 from '../../components/Hero2'
import PatientInfo from '../../components/PatientInfo'
import Appointments from '../../components/Appointments'
import PatientStoriesSlider from '../../components/patientSliderStoreys'
import patientVisitor from '/src/assets/images/patient-visitor-.jpg'
import Footer from '../../components/Footer'
function PatientVisitor() {
    window.scrollTo({top: 0, behavior: 'smooth'});
    return (
        <div>
            <Header />
            <Hero2 title="..." image ={patientVisitor}/>
            <PatientInfo />
            <Appointments />
            <PatientStoriesSlider />
            <Footer />
        </div>
    )
}

export default PatientVisitor
