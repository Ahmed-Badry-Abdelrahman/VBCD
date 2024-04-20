import Header from '../../components/Header';
import BreastCancerDetection from '../../components/BreastCancerDetection';
import Footer from '../../components/Footer'

function ProfilePage() {
    window.scrollTo({top: 0, behavior: 'smooth'});
    return (
        <div>
            <Header />
            <BreastCancerDetection />
            <Footer />
        </div>
    )
}

export default ProfilePage
