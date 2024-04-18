import  { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import icon1 from '../assets/images/icon-1.png'
import iconMove1 from '../assets/images/move-icon 2.png'
import icon2 from '../assets/images/icon-2.png'
import iconMove2 from '../assets/images/move-icon 2.png'
import icon3 from '../assets/images/icon-3.png'

import './fun-section.css';

function Fun() {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
        }
    }, [isInView])

    return (
        <div className='fun-container section-margin-bottom'>
            <motion.div
                className='content'
                ref={ref}
                variants={{
                    hidden: { opacity: 0, y: 180 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: .7, delay: 0.35 }}
            >
                <div className='up-side'>
                    <p>How It Works</p>
                    <p>You Will Be Able To Access Our Services Following 3 Steps</p>
                </div>
                <div className='down-side'>
                    <div className='service'>
                        <img src={icon1} alt='icon-1' />
                        <p className='text'>Have A Coffee</p>
                    </div>
                    <div className='arrow'>
                        <img src={iconMove1} alt='arrow-img' />
                    </div>
                    <div className='service'>
                        <img src={icon2} alt='icon-2' />
                        <p>Choose Doctor</p>
                    </div>
                    <div className='arrow'>
                        <img src={iconMove2} alt='arrow-img' />
                    </div>
                    <div className='service'>
                        <img src={icon3} alt='icon-3' />
                        <p>Admission Now</p>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}


export default Fun

