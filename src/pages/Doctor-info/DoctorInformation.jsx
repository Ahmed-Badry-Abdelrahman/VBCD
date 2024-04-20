
import Header from '../../components/Header'
import DoctorInfo from '../../components/DoctorInfo'
import BookingForm from '../../components/BookingForm'
import Footer from '../../components/Footer'
import  './doctor-information.css'
function DoctorInformation() {
    window.scrollTo({top: 0, behavior: 'smooth'});
    return (
        <div>
            <Header />
            <DoctorInfo />
            <BookingForm />
            <Footer />
        </div>
    )
}

export default DoctorInformation
