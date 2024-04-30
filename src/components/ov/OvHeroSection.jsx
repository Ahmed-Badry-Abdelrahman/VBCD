/* eslint-disable react/prop-types */

import './ov-hero-section.css';
import Blog_Optical from '../../assets/images/Blog_Optical-Character-Recognition.png'
function Ov_hero_section() {
    return (
        <div className='OVHero-container'>
            <div className='OVHero-content content'>
                <div className='OVHero-textContent'>
                    <h1>Breast Cancer ?!</h1>
                    <p>Breast cancer is when breast cells mutate and become cancerous cells that multiply and form tumors. Breast cancer typically affects women and people assigned female at birth (AFAB) age 50 and older, but it can also affect men and people assigned male at birth (AMAB), as well as younger women. Healthcare providers may treat breast cancer with surgery to remove tumors or treatment to kill cancerous cells.</p>
                </div>
                <div className='OVHero-imageContainer'>
                    <img src={Blog_Optical} alt="OVHero-image" />
                </div>
            </div>
        </div>  
    );
}

export default Ov_hero_section;
