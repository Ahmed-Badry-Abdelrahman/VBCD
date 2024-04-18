import  { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import Button from './button'
import aboutVideo from '../assets/images/about-video.png'
import './about-section.css'


function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();
    useEffect(() => {
        if (isInView) {
            mainControls.start("end")
        }
    }, [isInView])

    return (
        <div className='sub-about-container section-margin-bottom' style={{overflow: "hidden"}}>
            <div
                className='content'
                style={{
                    perspective: "300px",
                    perspectiveOrigin: "center",
                }} >
                <motion.div
                    ref={ref}
                    className='lift-side'
                    style={{
                        perspective: "300px",
                        perspectiveOrigin: "center",
                    }}
                >
                    <motion.img
                        src={aboutVideo}
                        alt='about-video'
                        variants={{
                            start:
                            {
                                opacity: 0,
                                transform: "translate3d(-200px, 200px, -200px)"
                            },
                            end:
                            {
                                opacity: 1,
                                transform: "translate3d(0, 0, 0)"
                            },
                        }}
                        initial="start"
                        animate={mainControls}
                        transition={{ duration: .7, delay: 0.45 }}
                    />
                </motion.div>
                <motion.div className='right-side'
                    variants={{
                        start:
                        {
                            opacity: 0,
                            transform: "translate3d(300px, 0, 0)"
                        },
                        end:
                        {
                            opacity: 1,
                            transform: "translate3d(0, 0, 0)"
                        },
                    }}
                    initial="start"
                    animate={mainControls}
                    transition={{ duration: .7, delay: 0.45 }}
                >
                    <h2>Breast Cancer Detection !! </h2>
                    <ul>
                        <li><p>We have gathered all these features you need it in one website</p></li>
                        <li><p>The site&apos;s ability to determine whether the uploaded mammography results indicate breast cancer. Furthermore</p></li>
                        <li><p>The site help users find doctors based on their location, specialty</p></li>
                    </ul>
                    <Button btnText="Know more" link="/" />
                </motion.div>
            </div>
        </div>
    )
}

export default About
