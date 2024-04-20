/* eslint-disable react/prop-types */

import './hero-2.css';

function Hero2(props) {
    return (
        <div className='section-margin-bottom hero-2-container' style={{ backgroundImage: `url(${props.image})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '77vh' }}>
            <p>{props.title}</p>
        </div>
    );
}

export default Hero2;
