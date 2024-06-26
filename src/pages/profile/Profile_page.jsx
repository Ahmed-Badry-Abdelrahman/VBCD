import Header from '../../components/Header';
import Profile from '../../components/Profile';
import Footer from '../../components/Footer'

function ProfilePage() {
    window.scrollTo({top: 0, behavior: 'smooth'});
    return (
        <div>
            <Header />
            <Profile />
            <Footer />
        </div>
    )
}

export default ProfilePage
