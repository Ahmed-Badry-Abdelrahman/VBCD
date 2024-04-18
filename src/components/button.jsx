import { NavLink } from 'react-router-dom';
import './button.css';

function Button(props) {

    return (
        <NavLink className="nav-btn" to={props.link}>{props.btnText}</NavLink>
    );
}

export default Button;
