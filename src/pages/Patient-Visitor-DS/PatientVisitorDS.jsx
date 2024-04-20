
import Header from '../../components/Header'
import Hero2 from '../../components/Hero2'
import PatientInfo from '../../components/PatientInfo'
import DoctorAppointmentList from '../../components/DoctorAppointmentList'
import SetAvailability from '../../components/SetAvailability'
import patientVisitor from '/src/assets/images/patient-visitor-.jpg'
import Footer from '../../components/Footer'
function PatientVisitorDS() {
    window.scrollTo({top: 0, behavior: 'smooth'});
    return (
        <div>
            <Header />
            <Hero2 title="..." image ={patientVisitor}/>
            <PatientInfo />
            <DoctorAppointmentList />
            <SetAvailability />
            <Footer />
        </div>
    )
}

export default PatientVisitorDS
