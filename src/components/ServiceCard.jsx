
import Button from './button'
import './serviceCard.css';
/* eslint-disable */
function ServiceCard(props) {
    return (
        <div className='serviceCard-container'>
            <div className='card'>
                <div className='card-img'>
                
                    <img src={props.image} alt="Service" />
                </div>
                <div className="card-content">
                    <h2>{props.title}</h2>
                    <p>{props.description}</p>
                    <div  className='buttons'>
                        <Button btnText={props.service} link={props.link}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
/* eslint-enable */


export default ServiceCard;