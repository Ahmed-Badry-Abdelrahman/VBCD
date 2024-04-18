/* eslint-disable react/prop-types */

import './service-card2.css'
import Button from './button'
function ServiceCard2(props) {
    return (
        <div className='service-card-container section-margin-bottom'>
            <div className='service-card-content content'>
                <div className='card'>
                    <div className='left-side'>
                        <img src={props.image} alt="Service" />
                    </div>
                    <div className='right-side'>
                        <p className='card-title'>{props.title}</p>
                        <p className='card-description'>{props.description}</p>
                        <Button btnText={props.btnText} link={props.link} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard2

