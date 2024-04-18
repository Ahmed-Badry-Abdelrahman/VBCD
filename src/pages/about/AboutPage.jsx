
import Header from '../../components/Header'
import Hero2 from "../../components/Hero2";
import About from '../../components/About';
import DoctorCard from '../../components/DoctorCard';
import Footer from '../../components/Footer';
import aboutPage1 from '/src/assets/images/about-page1.png'
import './about-page.css';

function AboutPage() {
  return (
    <div>
      <Header />
      <Hero2  title="About Al BCD" image ={aboutPage1}/>
      <About />
      <DoctorCard />
      <Footer />
    </div>
  )
}

export default AboutPage;