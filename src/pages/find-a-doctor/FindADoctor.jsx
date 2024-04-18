
import Header from '../../components/Header';
import Hero2 from "../../components/Hero2";
import FdText from "../../components/FdText"
import DoctorSearch from '../../components/Search'
import DBanner from '/src/assets/images/D-banner.png'
// import SDoctorCard from '../../components/SDoctorCard'
import Footer from '../../components/Footer';
import  './find-a-doctor.css'

function FindADoctor() {
    return (
        <div>
            <Header />
            <Hero2 title="Our Doctors" image ={DBanner}/>
            <FdText />
            <DoctorSearch />
            <Footer />
        </div>
    )
}

export default FindADoctor
