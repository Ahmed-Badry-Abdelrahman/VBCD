import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Hero2 from "../../components/Hero2";
import ContactForm from '../../components/ContactForm';
import Footer from '../../components/Footer';
import googleMap from '/src/assets/images/google-map.png';
import { useInView } from 'react-intersection-observer';
import './contact.css';

// Reusable animation wrapper component with feed-in animation
// eslint-disable-next-line react/prop-types
const AnimatedComponent = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2, // Adjust threshold as needed
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

function Contact() {
  window.scrollTo({top: 0, behavior: 'smooth'});
  return (
    <div>
      <Header/>
      <Hero2 title="Contact Us" image ={googleMap}/>
      
      {/* Wrap the ContactForm component with AnimatedComponent */}
      <AnimatedComponent>
        <ContactForm />
      </AnimatedComponent>
      
      <Footer />
    </div>
  )
}

export default Contact;
