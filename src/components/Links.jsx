import { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import LeftLinksImg from '../assets/images/links-img.png'
import LinksImg1 from '../assets/images/link-1.png'
import LinksImg2 from '../assets/images/link-2.png'
import LinksImg3 from '../assets/images/link-3.png'
import './links-section.css'
import { NavLink } from 'react-router-dom'
function Links() {

  const ref = useRef(null)
  const isInView = useInView(ref)
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView])




  return (
    <div className="links-container section-margin-bottom " >
      <div className="content">
        <div className="left-content">
          <img src={LeftLinksImg} alt="links-img" />
        </div>
        <div className="right-content" style={{ overflow: "hidden" }}>
          <motion.div
            className="link"
            ref={ref}
            variants={{
              hidden: { opacity: 0, x: 200 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: .7, delay: 0.25 }}
          >
            <img src={LinksImg1} alt="link-img-1" />
            <NavLink to="/stories">
              <p>Explore the experiences of other individuals facing similar journeys.</p>
            </NavLink>
          </motion.div>
          <motion.div
            className="link"
            ref={ref}
            variants={{
              hidden: { opacity: 0, x: 200 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: .7, delay: 0.4 }}
          >
            <img src={LinksImg2} alt="link-img-2" />
            <NavLink to="/Up-rumor">
              <p>Let&apos;s check the rumors and check whether she has breast cancer or not.</p>
            </NavLink>
          </motion.div>
          <motion.div
            className="link"
            ref={ref}
            variants={{
              hidden: { opacity: 0, x: 200 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: .7, delay: 0.55 }}
          >
            <img src={LinksImg3} alt="link-img-3" />
            <NavLink to="/Overview">
              <p>Let&apos;s learn about breast cancer and gain some experience.</p>
            </NavLink>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Links;
