
import './hero-section.css';
import Button from './button';

import { motion } from 'framer-motion'

function Hero(props) {

    const praOne = {
        hidden: {
            y: 200,
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 40
            }
        }
    };
    const praTow = {
        hidden: {
            y: 200,
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 40,
                delay: .4
            }
        }
    };
    const btn = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 40,
                delay: .9
            }
        }
    };



    return (
        /* eslint-disable */
        <div className='hero-container section-margin-bottom ' style={{ backgroundImage: `url(${props.image})` }}>
            <div className='content hero-content'>
                <motion.p
                    variants={praOne}
                    animate="visible"
                    initial="hidden"
                >{props.title}</motion.p>
                <motion.p
                    variants={praTow}
                    animate="visible"
                    initial="hidden"
                >{props.text}</motion.p>

                {props.btn && (
                    <motion.div
                    variants={btn}
                    animate= 'visible'
                    initial= 'hidden'
                    >
                        <Button
                            btnText="Up Rumour"
                            link="/Up Rumour" />
                        <Button btnText="Appointment" link="/PatientVisitor" />
                    </motion.div>
                )}

            </div>
        </div>
        /* eslint-enable */
    )
}

export default Hero;
