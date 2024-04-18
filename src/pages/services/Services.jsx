import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Hero2 from "../../components/Hero2";
import ServiceCard2 from '../../components/ServiceCard2';
import Footer from '../../components/Footer';
import MedicalServices1 from '/src/assets/images/Medical-Services1.png';
import SAppointment from '/src/assets/images/SAppointment.png';
import SAppointment2 from '/src/assets/images/s2.png';
import SAppointment1 from '/src/assets/images/s1.png';
import { useInView } from 'react-intersection-observer';
import './services.css';

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

function Services() {
  return (
    <div>
      <Header />
      <Hero2 title="Our Services" image={MedicalServices1} />

      {/* Wrap each ServiceCard2 component with AnimatedComponent */}
      <AnimatedComponent>
        <ServiceCard2
          image={SAppointment}
          title="Up Rumors"
          description="Explore the experiences of other individuals facing similar journeys.Explore the experiences of other individuals facing similar journeys.Explore the experiences of other individuals facing similar journeys."
          btnText="Up Rumors"
          link="/Up Rumors"
        />
      </AnimatedComponent>

      <AnimatedComponent>
        <ServiceCard2
          image={SAppointment2}
          title="Our Doctor"
          description="Explore the experiences of other individuals facing similar journeys.Explore the experiences of other individuals facing similar journeys.Explore the experiences of other individuals facing similar journeys."
          btnText="Find a doctor"
          link="/find-a-doctor"
        />
      </AnimatedComponent>

      <AnimatedComponent>
        <ServiceCard2
          image={SAppointment1}
          title="Appointments"
          description="Explore the experiences of other individuals facing similar journeys.Explore the experiences of other individuals facing similar journeys.Explore the experiences of other individuals facing similar journeys."
          btnText="Appointments"
          link="/PatientVisitor"
        />
      </AnimatedComponent>

      <Footer />
    </div>
  );
}

export default Services;
