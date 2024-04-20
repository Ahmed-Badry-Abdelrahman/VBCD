
import Header from '../../components/Header';
import Hero from "../../components/Hero";
import Services from '../../components/Services';
import Links from '../../components/Links';
import Fun from '../../components/Fun';
import About from '../../components/About';
import DoctorCard from '../../components/DoctorCard';
import Footer from '../../components/Footer';
import home1 from '/src/assets/images/home_1.png'
import './home.css';


function Home() {
    window.scrollTo({top: 0, behavior: 'smooth'});
    return (
        <div className='home-container'>
            <Header/>
            <Hero btn={true} title="Caring for you through every step " text="our website offers a wealth of resources and compassionate guidance for individuals affected by breast cancer." image={home1}/>
            <Services/>
            <Links/>
            <Fun/>
            <About/>
            <DoctorCard  />
            <Footer />
        </div>
    )
}

export default Home;