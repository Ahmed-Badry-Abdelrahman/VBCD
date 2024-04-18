import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import './doctor-card.css';

const DoctorCard = () => {
    const [doctors, setDoctors] = useState([]);
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const mainControls = useAnimation();
    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                const response = await fetch('/src/pages/Doctors.json');
                if (!response.ok) {
                    throw new Error('Failed to fetch doctors');
                }
                const doctorsData = await response.json();
                setDoctors(doctorsData);

                if (isInView) {
                    mainControls.start("visible")
                }
            } catch (error) {
                console.error('Error fetching doctors:', error);
            }
        };

        fetchDoctors();
    }, [isInView]);


    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.4,
                staggerChildren: 0.5,
                duration: .4
            }
        }
    }

    const item = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    }


    return (
        <div className="doctor-card-container section-margin-bottom" ref={ref}>
            <motion.div className='content'
                variants={container}
                initial="hidden"
                animate={mainControls}>
                <div className='title'>Meet Our Doctors</div>
                <div className='card-container'>
                    {doctors.slice(0, 3).map((doctor, index) => (
                        <motion.div
                            className="doctor-card"
                            key={index}
                            variants={item}
                        >
                            <img src={doctor.image} alt={`${doctor.firstName}'s Picture`} />
                            <h2>{doctor.name}</h2>
                            <p>{doctor.specialty}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default DoctorCard;


