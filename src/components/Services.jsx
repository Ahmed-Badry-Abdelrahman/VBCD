import  { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation,  } from 'framer-motion'
import './service-section.css';
import ServiceCard from './ServiceCard';
import findADoctorCard1 from '../assets/images/find-a-doctor-card 1.png'
import Appointments from '../assets/images/Appointments.png'
import UpRumor from '../assets/images/Up-rumor.png'
function Services() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
        }
    }, [isInView])

    return (
        <div className='service-section-container section-margin-bottom '>
            <motion.div
                ref={ref}
                className='content'
                variants={{
                    hidden: { opacity: 0, y: 180 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: .5, delay: 0.35 }}
            >
                <ServiceCard image={findADoctorCard1} title="Our Doctor" description="Search by name, specialty, location and more." service="Find a doctor" link="/find-a-doctor" />
                <ServiceCard image={Appointments} title="Appointments" description="Get the in person or virtual care you need in any time." service="Appointments" link="/PatientVisitor" />
                <ServiceCard image={UpRumor} title="Up Rumors" description="Raise the rumor to verify whether it is true or not." service="Up Rumors" link="/Up Rumors" />
            </motion.div>
        </div>
    )
}

export default Services;