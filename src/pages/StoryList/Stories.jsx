import Header from '../../components/Header';
import Hero2 from "../../components/Hero2";
import StoryList from "../../components/StoryList"
import PatientStory from '/src/assets/images/patient-stories.jpg'
import Footer from '../../components/Footer'

function Stories() {
    return (
        <div>
            <Header />
            <Hero2  title="Patient & Doctors Stores" image ={PatientStory}/>
            <StoryList />
            <Footer />
        </div>
    )
}

export default Stories
