
import Header from '../../components/Header'
import Hero2 from '../../components/Hero2'
import Question from '../../components/Question'
import talkingToDoctor from '/src/assets/images/talking-to-a-doctor.jpg'
import Footer from '../../components/Footer'
function AskDoctor() {
    return (
        <div>
            <Header />
            <Hero2  title="Question To Ask" image ={talkingToDoctor}/>
            <Question />
            <Footer />
        </div>
    )
}

export default AskDoctor
